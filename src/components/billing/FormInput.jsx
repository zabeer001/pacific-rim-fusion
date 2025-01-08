// eslint-disable-next-line
export function FormInput({ id, label, type = "text", required, value, onValueChange }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">{label}{required && " *"}</label>
      <input
        id={id}
        name={id} // Add the name attribute here
        type={type}
        required={required}
        value={value}
        onChange={(e) => onValueChange(e.target.name, e.target.value)} // Use e.target.name now
        className="flex gap-2.5 py-4 mt-2 w-full rounded-lg border border-solid border-zinc-400 min-h-[51px] max-md:max-w-full text-black pl-2.5"
        aria-required={required}
      />
    </div>
  );
}
