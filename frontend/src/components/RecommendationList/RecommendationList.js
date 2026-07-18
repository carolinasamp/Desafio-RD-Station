import React from 'react';

function RecommendationList({ recommendations }) {
  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-4">
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="text-xl font-bold text-gray-900">
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
