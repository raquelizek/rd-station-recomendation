import { useEffect} from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({ setRecommendationsForUser }) {

  const { preferences, features, products } = useProducts();
  
  const { getRecommendations, recommendations, setRecommendations } =
    useRecommendations(products);

  const { formData, handleChange, resetForm } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = getRecommendations(formData);
    const arr = Array.isArray(data) ? data : [data];
    setRecommendations(arr);
  };

  const handleClear = () => {
    setRecommendations([]);
    handleChange('selectedPreferences', []);
    handleChange('selectedFeatures', []);
    handleChange('selectedRecommendationType', '');
    resetForm();
  };

  useEffect(() => {
    setRecommendationsForUser(recommendations);
  }, [recommendations, setRecommendationsForUser]);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 ">
          <div className="p-6">
            <Preferences
              preferences={preferences}
              selectedPreferences={formData.selectedPreferences}
              onPreferenceChange={(selected) => {
                handleChange('selectedPreferences', selected);
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 ">
          <div className="p-6">
            <Features
              features={features}
              selectedFeatures={formData.selectedFeatures}
              onFeatureChange={(selected) => {
                handleChange('selectedFeatures', selected);
              }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border-2">
        <div className="p-6">
          <RecommendationType
            selectedRecommendationType={formData.selectedRecommendationType}
            onRecommendationTypeChange={(selected) =>
              handleChange('selectedRecommendationType', selected)
            }
            onSubmit={handleSubmit}
            onClear={handleClear}
            hasRecommendations={recommendations.length > 0}
            selectedPreferences={formData.selectedPreferences}
            selectedFeatures={formData.selectedFeatures}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
