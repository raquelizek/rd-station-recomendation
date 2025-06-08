import ClearButton from '../ClearButton/ClearButton';
import SubmitButton from '../SubmitButton/SubmitButton';
import RadioOption from './RadioOption';

const RECOMMENDATION_OPTIONS = [
  {
    value: 'SingleProduct',
    label: 'Produto Único',
    description: 'Melhor recomendação individual',
  },
  {
    value: 'MultipleProducts',
    label: 'Múltiplos Produtos',
    description: 'Várias recomendações relevantes',
  },
];

function RecommendationType({
  selectedRecommendationType,
  onRecommendationTypeChange,
  selectedPreferences,
  selectedFeatures,
  hasRecommendations,
  onSubmit,
  onClear,
}) {
  const isSubmitDisabled =
    !selectedRecommendationType ||
    (selectedPreferences.length === 0 && selectedFeatures.length === 0);

  return (
    <div>
      <div className="flex flex-col items-start gap-1 mb-6">
        <h3 className="text-xl font-bold text-gray-800">
          Tipo de recomendação
        </h3>
        <p className="text-gray-500">Como deseja receber as recomendações?</p>
      </div>

      <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <legend className="sr-only">Selecione o tipo de recomendação</legend>
        {RECOMMENDATION_OPTIONS.map((option) => (
          <RadioOption
            key={option.value}
            value={option.value}
            label={option.label}
            description={option.description}
            checked={selectedRecommendationType === option.value}
            onChange={onRecommendationTypeChange}
          />
        ))}
      </fieldset>

      <div className="flex flex-col sm:flex-row gap-4">
        <SubmitButton
          disabled={isSubmitDisabled}
          onClick={onSubmit}
          text="Gerar recomendações"
        />

        {hasRecommendations && (
          <ClearButton onClick={onClear} text="Limpar recomendações" />
        )}
      </div>
    </div>
  );
}

export default RecommendationType;
