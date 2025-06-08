function SubmitButton({ text, disabled, onClick }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className="
        flex-1
        bg-[#1CBFDA]
        disabled:bg-gray-300
        text-white
        font-semibold
        py-4
        px-6
        rounded-xl
        disabled:cursor-not-allowed
        flex
        items-center
        justify-center
        gap-3
        shadow-lg
      "
    >
      <span className="flex items-center justify-center gap-2">{text}</span>
    </button>
  );
}

export default SubmitButton;
