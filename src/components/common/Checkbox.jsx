export default function Checkbox({ label, className = '', ...props }) {
  return <label className={`flex items-center gap-2 cursor-pointer ${className}`}><input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-2 focus:ring-primary-500" {...props} />{label && <span className="text-sm text-text-primary">{label}</span>}</label>;
}
