import Link from "next/link";
import ChevronIcon from "@/app/components/ChevronIcon";

interface Props {
  className?: string;
  ariaLabel: string;
  href: string;
}

const ReadMoreLink = ({ className, ariaLabel, href }: Props) => {
  return (
    <Link
      href={href}
      className={`flex items-center w-fit capitalize text-nowrap group lg:duration-300 lg:hover:opacity-50 ${className}`}
      aria-label={`read more about ${ariaLabel}`}
    >
      Read more
      <ChevronIcon className="w-4 translate-y-[0.5px] lg:group-hover:ml-3 lg:duration-300" />
    </Link>
  );
};

export default ReadMoreLink;
