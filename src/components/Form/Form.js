import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ onRecommendationsChange }) {
  const { preferences, features, products } = useProducts();

  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataRecommendations = getRecommendations(formData);

    onRecommendationsChange(dataRecommendations);
  };

  const disabledSubmitButton =
    !(
      formData.selectedPreferences.length || formData.selectedFeatures.length
    ) || !formData.selectedRecommendationType;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />

      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />

      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />

      <SubmitButton text="Obter recomendação" disabled={disabledSubmitButton} />
    </form>
  );
}

export default Form;
