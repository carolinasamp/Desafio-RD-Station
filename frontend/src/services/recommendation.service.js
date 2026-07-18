//recommendation.service.js

const calculateScore = (product, formData) => {
  const { selectedPreferences = [], selectedFeatures = [] } = formData;

  const matchedPreferences = product.preferences.filter((preference) =>
    selectedPreferences.includes(preference),
  );

  const matchedFeatures = product.features.filter((feature) =>
    selectedFeatures.includes(feature),
  );

  return {
    product,
    matches: {
      preferences: matchedPreferences,
      features: matchedFeatures,
    },
    score: matchedPreferences.length + matchedFeatures.length,
  };
};

const getSingleRecommendation = (scoredProducts) => {
  const validProducts = scoredProducts.filter(({ score }) => score > 0);

  if (!validProducts.length) {
    return [];
  }

  // Em caso de empate, o reduce mantém o último produto válido encontrado.
  const bestProduct = validProducts.reduce((previous, current) =>
    previous.score > current.score ? previous : current,
  );

  return [bestProduct.product];
};

const getMultipleRecommendations = (scoredProducts) => {
  return scoredProducts
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ product }) => product);
};

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: "",
  },
  products = [],
) => {
  const scoredProducts = products.map((product) =>
    calculateScore(product, formData),
  );

  switch (formData.selectedRecommendationType) {
    case "SingleProduct":
      return getSingleRecommendation(scoredProducts);

    case "MultipleProducts":
      return getMultipleRecommendations(scoredProducts);

    default:
      return [];
  }
};

export default { getRecommendations };
