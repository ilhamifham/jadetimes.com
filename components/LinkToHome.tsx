import Link from "next/link";

interface Props {
  className: string;
  children: Readonly<React.ReactNode>;
}

const LinkToHome = ({ className, children }: Props) => {
  return (
    <Link href="/" className={className}>
      <span className="sr-only">Jadetimes.com</span>
      {children}
    </Link>
  );
};

export default LinkToHome;
