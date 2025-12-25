export default function Select({ label, options, error, className = '', ...props }) {
  return <div className={className}>{label && <label className="block text-sm font-medium text-text-primary mb-2">{label}</label>}<select className="w-full rounded-lg border border-border-default bg-surface px-4 py-2 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-500" {...props}>{options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}</select>{error && <p className="mt-1 text-sm text-red-500">{error}</p>}</div>;
}
