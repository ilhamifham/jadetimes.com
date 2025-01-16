import Link from "next/link";

interface Props {
  className: string;
  onClick?: () => void;
}

const LinkToMembership = ({ className, onClick }: Props) => {
  return (
    <Link
      href="/membership"
      className={`bg-accent py-[0.3rem] px-[0.87rem] whitespace-nowrap tracking-wide text-white border border-accent lg:duration-300 lg:hover:bg-white lg:hover:text-black ${className}`}
      onClick={onClick}
    >
      Subscribe : 49.99/Year
    </Link>
  );
};

export default LinkToMembership;
