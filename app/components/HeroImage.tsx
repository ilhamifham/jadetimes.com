import Image, { StaticImageData } from "next/image";

const HeroImage = ({ src }: { src: StaticImageData }) => {
  return <Image src={src} alt="" className="w-full min-h-[488px] object-cover object-center" />;
};

export default HeroImage;
