import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Recomendador de Produtos{' '}
        <span className="text-blue-600">RD Station</span>
      </h1>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 md:p-8 w-full max-w-5x grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 md:col-span-2 mb-4">
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
            encontrar uma variedade de produtos da RD Station, cada um projetado
            para atender às necessidades específicas do seu negócio. De CRM a
            Marketing, de Conversas a Inteligência Artificial, temos uma solução
            para ajudar você a alcançar seus objetivos. Use o formulário abaixo
            para selecionar suas preferências e funcionalidades desejadas e
            receba recomendações personalizadas de produtos que melhor atendam
            às suas necessidades.
          </p>
        </div>

        <div>
          <Form onRecommendationsChange={setRecommendations} />
        </div>

        <div>
          <RecommendationList recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}

export default App;
