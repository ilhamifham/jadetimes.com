"use client";

import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  children: Readonly<React.ReactNode>;
  link: string;
}

const PictureLink = ({ children, className, link }: Props) => {
  const router = useRouter();
  function navigateToLink(link: string) {
    router.push(link);
  }
  return (
    <picture className={`cursor-pointer h-fit ${className}`} onClick={() => navigateToLink(link)}>
      {children}
    </picture>
  );
};

export default PictureLink;
