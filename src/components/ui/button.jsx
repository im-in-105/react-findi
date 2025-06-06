// src/components/ui/button.jsx

export function Button({ children, onClick, type = "button", className = "" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
        >
            {children}
        </button>
    );
}
