import recommendationService from './recommendation.service';
import mockProducts from '../mocks/mockProducts';

describe('recommendationService', () => {
  test('Retorna recomendação correta para SingleProduct com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Personalização de funis de vendas',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'MultipleProducts',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(2);
    expect(recommendations.map((product) => product.name)).toEqual([
      'RD Station CRM',
      'RD Station Marketing',
    ]);
  });

  test('Retorna apenas um produto para SingleProduct com mais de um produto de match', () => {
    const formData = {
      selectedPreferences: [
        'Integração fácil com ferramentas de e-mail',
        'Automação de marketing',
      ],
      selectedFeatures: [
        'Rastreamento de interações com clientes',
        'Rastreamento de comportamento do usuário',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Station Marketing');
  });

  test('Retorna o último match em caso de empate para SingleProduct', () => {
    const formData = {
      selectedPreferences: [
        'Automação de marketing',
        'Integração com chatbots',
      ],
      selectedRecommendationType: 'SingleProduct',
    };

    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );

    expect(recommendations).toHaveLength(1);
    expect(recommendations[0].name).toBe('RD Conversas');
  });

  test('Sem matches retorna [] para SingleProduct e MultipleProducts', () => {
    const formData = {
      selectedPreferences: ['Não existe'],
      selectedFeatures: ['Também não existe'],
      selectedRecommendationType: 'SingleProduct',
    };
    expect(
      recommendationService.getRecommendations(formData, mockProducts)
    ).toEqual([]);

    const formData2 = {
      selectedPreferences: ['Não existe'],
      selectedFeatures: ['Também não existe'],
      selectedRecommendationType: 'MultipleProducts',
    };
    expect(
      recommendationService.getRecommendations(formData2, mockProducts)
    ).toEqual([]);
  });

  test('Sem products, retorna []', () => {
    const formData = {
      selectedPreferences: ['Qualquer um'],
      selectedFeatures: ['Qualquer um'],
      selectedRecommendationType: 'SingleProduct',
    };
    expect(recommendationService.getRecommendations(formData, [])).toEqual([]);
  });

  test('FormData vazio não causa erro e retorna []', () => {
    const recs = recommendationService.getRecommendations({}, mockProducts);
    expect(recs).toEqual([]);
  });

  test('Quando não passa recommendationType, assume MultipleProducts', () => {
    const formData = {
      selectedPreferences: ['Integração fácil com ferramentas de e-mail'],
      selectedFeatures: [],
    };
    const recommendations = recommendationService.getRecommendations(
      formData,
      mockProducts
    );
    expect(Array.isArray(recommendations)).toBe(true);
    expect(recommendations[0].name).toBe('RD Station CRM');
  });
});
