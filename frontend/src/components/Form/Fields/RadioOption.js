import { useCallback } from "react";

function RadioOption({ value, label, description, checked, onChange }) {
  const handleSelect = useCallback(() => onChange(value), [onChange, value]);
  const borderStyle = checked ? 'border-[#1CBFDA] bg-white' : 'border-gray-200 hover:border-gray-300';
  const dotStyle = checked ? 'border-[#1CBFDA] bg-[#1CBFDA]' : 'border-gray-300';

  return (
    <label
      htmlFor={value}
      className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${borderStyle}`}
    >
      <input
        id={value}
        type="radio"
        name="recommendationType"
        value={value}
        checked={checked}
        onChange={handleSelect}
        className="sr-only"
      />

      <div className="flex items-center gap-3">
        <span
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${dotStyle}`}
        >
          {checked && <span className="w-2 h-2 bg-white rounded-full" />}
        </span>

        <div>
          <div className="font-semibold text-gray-800">{label}</div>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>
    </label>
  );
}

export default RadioOption