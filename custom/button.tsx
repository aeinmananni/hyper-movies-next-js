import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`uppercase h-max w-max bg-gray-200 text-white active:scale-90 transition-all duration-300  ${props.className}`}
    >
      {children}
    </button>
  );
}
