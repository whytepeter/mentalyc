type TextFieldProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
  onInputChange?: (value: string) => void;
};

export function TextField({
  value,
  onInputChange,
  placeholder,
}: TextFieldProps) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onInputChange?.(e.target.value)}
      placeholder={placeholder}
      className="w-full border-b border-slate-200 focus:border-primary bg-slate-50 h-10 px-6  focus:outline-none  focus:bg-white placeholder:text-gray-300"
    />
  );
}
