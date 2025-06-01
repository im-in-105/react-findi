// src/components/ui/input.jsx

export function Input({ value, onChange, placeholder, className = "" }) {
    return (
        <input
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`border px-3 py-2 rounded w-full ${className}`}
        />
    );
}
