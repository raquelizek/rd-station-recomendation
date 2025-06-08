const recommendationService = {
  getRecommendations: (formData, products) => {
    const {
      selectedPreferences = [],
      selectedFeatures = [],
      selectedRecommendationType = 'MultipleProducts'
    } = formData;

    const scored = products.map((product, idx) => {
      let score = 0;
      selectedPreferences.forEach(pref => {
        if (product.preferences.includes(pref)) score += 2;
      });
      selectedFeatures.forEach(feat => {
        if (product.features.includes(feat)) score += 1;
      });
      return { product, score, idx };
    });

    const filtered = scored
      .filter(item => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return b.idx - a.idx;
      });

    const results = filtered.map(item => ({
      ...item.product,
      score: item.score
    }));

    if (selectedRecommendationType === 'SingleProduct') {
      return results.length > 0 ? [results[0]] : [];
    }
    return results;
  },
};

export default recommendationService;
