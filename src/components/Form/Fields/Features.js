import { useCallback } from 'react';
import Checkbox from '../../shared/Checkbox';

export default function Features({
  features,
  selectedFeatures,
  onFeatureChange,
}) {
  const handleToggle = useCallback(
    (feat) => {
      const isSelected = selectedFeatures.includes(feat);
      const updated = isSelected
        ? selectedFeatures.filter((f) => f !== feat)
        : [...selectedFeatures, feat];
      onFeatureChange(updated);
    },
    [selectedFeatures, onFeatureChange]
  );

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            Funcionalidades Essenciais
          </h3>
          <p className="text-gray-500">Escolha os recursos que precisa</p>
        </div>
      </div>

      <div className="space-y-3">
        {features.map((feat) => (
          <Checkbox
            key={feat}
            value={feat}
            checked={selectedFeatures.includes(feat)}
            onChange={() => handleToggle(feat)}
            variant="modern"
          >
            {feat}
          </Checkbox>
        ))}
      </div>
    </div>
  );
}
