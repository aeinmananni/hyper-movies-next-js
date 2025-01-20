import { InputHTMLAttributes } from "react";

type InputProps = {
  icon?: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ icon, ...props }: InputProps) {
  return (
    <div className="w-full relative">
      <input
        {...props}
        className={`w-full py-2 px-3 rounded-sm ${props.className}`}
      />
      <i className="absolute right-2 top-2.5 text-slate-200">{icon}</i>
    </div>
  );
}
