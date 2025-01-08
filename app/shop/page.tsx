import Link from "next/link";
import Section from "../components/Section";
import shop from "@/public/shop.png";
import HeroImage from "../components/HeroImage";

const products = [
  {
    id: "rising-brands-2024-by-jadetimes",
    name: "Rising Brands 2024 by Jadetimes",
    sku: "364215376135199",
    price: "44.00",
    images: ["https://placehold.co/660X880", "https://placehold.co/660X880"],
    new: true,
    link: "/shop/rising-brands-2024-by-jadetimes",
  },
];

export default function Shop() {
  return (
    <>
      <HeroImage src={shop} />
      <Section className="p-4 lg:max-w-[1000px]">
        <h1 className="text-2xl text-center md:text-3xl lg:text-4xl">Shop</h1>
        <ul className="flex flex-wrap gap-4 mt-5 items-center justify-center md:grid md:grid-cols-3 md:gap-5 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.id} className="relative max-w-72 text-neutral-900">
              {product.new && <div className="bg-accent text-white w-fit px-2 uppercase text-lg font-semibold absolute top-0 left-0 z-10">New</div>}
              <Link href={product.link} className="block group">
                <div className="relative">
                  <img src={product.images?.[0]} alt={product.name} className="aspect-[9_/_12]" />
                  <div className="text-sm bg-white/80 backdrop-blur-sm p-3 absolute bottom-0 w-full text-center translate-y-full -z-[1] lg:duration-300 lg:group-hover:translate-y-0 lg:group-hover:z-0 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:z-0">
                    Quick View
                  </div>
                </div>
                <div className="text-lg flex flex-col gap-2 pt-4 bg-white">
                  <h2>{product.name}</h2>
                  <div className="text-neutral-700">${product.price}</div>
                </div>
              </Link>
              <button className="bg-neutral-900 text-white p-3 w-full mt-3">Pre-Order</button>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
