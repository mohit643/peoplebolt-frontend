// src/components/ui/Table.jsx

/**
 * Table
 * Props:
 *   headers  — string[]  e.g. ["Name", "Role", "Status"]
 *   children — <tr> rows as JSX
 *   className — extra classes on wrapper div
 */
export default function Table({ headers = [], children, className = "" }) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-xl overflow-hidden ${className}`}
    >
      <table className="w-full table-fixed">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50">
            {headers.map((h) => (
              <th
                key={h}
                className="text-left px-4 py-3 text-[11px] font-medium text-gray-400 uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">{children}</tbody>
      </table>
    </div>
  );
}
s;
