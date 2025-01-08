import Image from "next/image";
import newsStudio from "@/public/show/news-studio.webp";
import photoStudio from "@/public/show/photo-studio.webp";
import interviewStudio from "@/public/show/interview-studio.webp";

const shows = [
  {
    image: newsStudio,
    title: "Global News Services",
    description: "Delivering comprehensive news from around the world.",
  },
  {
    image: photoStudio,
    title: "Commercial Services",
    description: "Offering publishing services for commercial purposes.",
  },
  {
    image: interviewStudio,
    title: "Entertainment Content",
    description: "Producing engaging and diverse entertainment content.",
  },
];

const ShowCard = ({ className }: { className: string }) => {
  return (
    <ul className={className}>
      {shows.map((show, index) => (
        <li key={index} className="text-neutral-900">
          <Image src={show.image} alt={show.description} className="w-full aspect-video object-cover object-center" />
          <h2 className="font-semibold mb-1 mt-3">{show.title}</h2>
          <p className="text-sm">{show.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ShowCard;
