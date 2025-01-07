export function FormInput(props) {
  const { label, required, id, type = "text" } = props;
  return (
    <div className="flex flex-col w-full max-md:max-w-full">
      <label htmlFor={id} className="text-left text-black">
        {label} 
        {required && <span className="text-red-600"> *</span>}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className="flex gap-2.5 py-4 mt-2 w-full rounded-lg border border-solid border-zinc-400 min-h-[51px] max-md:max-w-full text-black"
        aria-required={required}
      />
    </div>
  );
}
