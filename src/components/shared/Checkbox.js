import React from 'react';

function Checkbox({ children, ...props }) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        {...props}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
}

export default Checkbox;
