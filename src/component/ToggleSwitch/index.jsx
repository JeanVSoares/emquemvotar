import { useState } from "react";

export default function ToggleSwitch({ onChange }) {
  const [enabled, setEnabled] = useState(false);

  const toggle = () => {
    const newValue = !enabled;
    setEnabled(newValue);
    if (onChange) onChange(newValue);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? "bg-indigo-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}