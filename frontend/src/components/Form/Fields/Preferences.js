import { useCallback } from 'react';
import Checkbox from '../../shared/Checkbox';

function Preferences({ preferences, selectedPreferences, onPreferenceChange }) {
  const handleToggle = useCallback(
    (pref) => {
      const isSelected = selectedPreferences.includes(pref);
      const updated = isSelected
        ? selectedPreferences.filter((p) => p !== pref)
        : [...selectedPreferences, pref];
      onPreferenceChange(updated);
    },
    [selectedPreferences, onPreferenceChange]
  );

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            Preferências de Negócio
          </h3>
          <p className="text-gray-500">Selecione suas prioridades principais</p>
        </div>
      </div>

      <div className="space-y-3">
        {preferences.map((pref) => (
          <Checkbox
            key={pref}
            value={pref}
            checked={selectedPreferences.includes(pref)}
            onChange={() => handleToggle(pref)}
            variant="modern"
          >
            {pref}
          </Checkbox>
        ))}
      </div>
    </div>
  );
}

export default Preferences;
