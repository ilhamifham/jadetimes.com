import Link from "next/link";
import ChevronIcon from "@/components/ChevronIcon";

interface Props {
  href: string;
  className?: string;
  children: Readonly<React.ReactNode>;
}

const ReadMoreLink = ({ href, className, children }: Props) => {
  return (
    <Link href={href} className={`flex items-center w-fit capitalize text-nowrap group lg:duration-300 lg:hover:opacity-50 ${className}`}>
      Read more
      <span className="sr-only">{children}</span>
      <ChevronIcon className="w-4 translate-y-[0.5px] lg:group-hover:ml-3 lg:duration-300" />
    </Link>
  );
};

export default ReadMoreLink;
