function Checkbox({ children, value, checked, onChange, variant = "modern" }) {
  return (
    <label
      className="group flex items-center gap-4 p-4 rounded-xl cursor-pointer 
       bg-gray-50 hover:bg-gray-100 border-2 border-transparent hover:border-gray-200"
      
    >
      <div className="relative">
        <input
          type="checkbox"
          value={value}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${
            checked
              ? "bg-[#1CBFDA] border-[#1CBFDA]"
              : "border-gray-300 group-hover:border-gray-400"
          }`}
        >
          {checked && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="text-gray-700 font-medium leading-relaxed flex-1">
        {children}
      </span>
    </label>
  )
}

export default Checkbox
