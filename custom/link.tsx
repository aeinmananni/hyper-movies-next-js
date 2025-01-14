import Link, { LinkProps } from "next/link";

type CustomLinkProps = {
  children: React.ReactNode;
} & LinkProps;

const CustomLink = ({ children, ...props }: CustomLinkProps) => {
  return <Link {...props}>{children}</Link>;
};

export default CustomLink;
