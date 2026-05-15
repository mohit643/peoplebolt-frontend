// src/components/ui/Card.jsx

/**
 * Card
 * Props:
 *   title     — card heading string
 *   action    — React node shown top-right (e.g. a link or button)
 *   children  — card body content
 *   className — extra tailwind classes
 */
export default function Card({ title, action, children, className = "" }) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-xl p-5 ${className}`}
    >
      {(title || action) && (
        <div className="flex items-center justify-between mb-4">
          {title && <p className="font-medium text-[14px]">{title}</p>}
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
