import React from 'react';

function SubmitButton({ text, disabled }) {
  return (
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all duration-200 text-white font-semibold px-6 py-3 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default SubmitButton;
