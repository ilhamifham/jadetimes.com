import Link from "next/link";

interface Props {
  className: string;
  href?: string;
  children: Readonly<React.ReactNode>;
}

const UpdatesLink = ({ className, href, children }: Props) => {
  const styles =
    "bg-neutral-800 border border-neutral-800 w-fit text-nowrap text-center tracking-widest text-white uppercase lg:duration-300 lg:hover:text-black lg:hover:bg-white";
  if (href) {
    return (
      <Link href={href} className={`${styles} ${className}`}>
        {children}
      </Link>
    );
  }
  return <div className={`${styles} ${className}`}>{children}</div>;
};

export default UpdatesLink;