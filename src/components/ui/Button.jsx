// src/components/ui/Button.jsx

const VARIANTS = {
  primary: "bg-blue-600 text-white border-transparent hover:bg-blue-700",
  secondary: "bg-white text-gray-700 border-gray-200 hover:bg-gray-50",
  success: "bg-green-600 text-white border-transparent hover:bg-green-700",
  danger: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100",
  ghost: "bg-transparent text-gray-500 border-transparent hover:bg-gray-50",
};

const SIZES = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-[13px]",
  lg: "px-6 py-2.5 text-sm",
};

/**
 * Button
 * Props:
 *   variant — "primary" | "secondary" | "success" | "danger" | "ghost"
 *   size    — "sm" | "md" | "lg"
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 font-medium rounded-lg border transition
        ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
