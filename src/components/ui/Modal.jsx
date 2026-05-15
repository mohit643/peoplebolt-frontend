"use client";
// src/components/ui/Modal.jsx

/**
 * Modal
 * Props:
 *   open      — boolean
 *   onClose   — () => void
 *   title     — string
 *   children  — modal body
 *   footer    — React node (action buttons)
 */
export default function Modal({ open, onClose, title, children, footer }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Panel */}
      <div className="relative bg-white rounded-xl w-full max-w-md mx-4 z-10">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <p className="font-medium text-[14px]">{title}</p>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg leading-none transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-4">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex justify-end gap-2 px-5 py-4 border-t border-gray-100">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
    