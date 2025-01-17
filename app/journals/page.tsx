import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import journalsBanner from "@/public/journals/journals-banner.png";
import HeroImage from "@/components/HeroImage";
import product from "@/public/journals/product.png";
import ChevronIcon from "@/components/ChevronIcon";
import FormButton from "@/components/FormButton";
import ContactDetails from "@/components/ContactDetails";

const products = [
  {
    id: "jadetimes-journal-of-universal-studies",
    name: "Jadetimes Journal of Universal Studies",
    volume: "Volume 1, Issue 1",
    images: product,
    link: "/journals/jadetimes-journal-of-universal-studies",
  },
];

export default function Journals() {
  return (
    <>
      <HeroImage src={journalsBanner} />
      <Section className="p-4 lg:max-w-[1000px]">
        <h1 className="text-2xl text-center md:text-3xl lg:text-4xl">Jadetimes Media Journals</h1>
        <p className="text-center text-lg lg:text-2xl lg:mt-2">For Publications</p>
        <ul className="flex flex-wrap gap-4 mt-5 items-center justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:gap-5 lg:grid-cols-4">
          {products.map((product) => (
            <li key={product.id} className="relative max-w-72 sm:max-w-none text-neutral-900">
              <Link href={product.link} className="block group">
                <Image src={product.images} alt={product.name} className="aspect-[9_/_12]" />
                <div className="text-lg flex flex-col gap-2 pt-4 bg-white">
                  <h2 className="font-medium">{product.name}</h2>
                  <div className="text-neutral-700 text-sm">{product.volume}</div>
                </div>
              </Link>
              <Link
                href="/journals/jadetimes-journal-of-universal-studies"
                className="text-sm md:text-xs bg-neutral-900 border border-neutral-900 text-white px-4 py-2 inline-block tracking-widest mt-4 lg:py-3 duration-300 lg:hover:bg-white lg:hover:text-black"
              >
                Read More
              </Link>
            </li>
          ))}
        </ul>
        <section className="mt-6 md:grid md:grid-cols-2">
          <div>
            <h2 className="text-xl font-medium text-center mb-6 lg:text-2xl">Submit Your Paper Today!</h2>
            <form action="" className="text-sm flex flex-col gap-4 mt-4 md:pr-4 lg:pr-5">
              <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <label htmlFor="name">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 mt-2 md:border-x-0 md:border-t-0"
                  />
                </div>
                <div>
                  <label htmlFor="country">Country</label>
                  <input
                    id="country"
                    type="text"
                    className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 mt-2 md:border-x-0 md:border-t-0"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 mt-2 md:border-x-0 md:border-t-0"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <label htmlFor="whatsapp">
                    Whatsapp Number <span className="text-accent">*</span>
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 mt-2 md:border-x-0 md:border-t-0"
                  />
                </div>
                <div className="lg:flex lg:flex-col lg:justify-between">
                  <label htmlFor="cv" className="block">
                    Manuscript
                  </label>
                  <input
                    type="file"
                    id="cv"
                    className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none mt-2 md:border-x-0 md:border-t-0 file:p-3 file:border-0 file:bg-neutral-300 lg:file:hover:bg-neutral-900 lg:file:hover:text-white file:focus:bg-neutral-900 file:focus:text-white file:duration-300 file:mr-3"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="job">Journal Name</label>
                <div className="relative mt-2">
                  <select
                    id="job"
                    className="w-full border-2 border-neutral-300 duration-300 lg:hover:border-neutral-900 focus:border-neutral-900 focus-visible:outline-none p-3 md:border-x-0 md:border-t-0 appearance-none"
                  >
                    <option value=""></option>
                    <option value="internships">Jadetimes Journals of Universal Studies</option>
                  </select>
                  <ChevronIcon rotate="90deg" className="w-5 absolute right-3 top-1/2 -translate-y-1/2 -z-[1]" />
                </div>
              </div>
              <FormButton className="text-base lg:max-w-72 lg:mx-auto lg:py-2">Submit Your Application</FormButton>
            </form>
          </div>
          <div className="text-sm text-neutral-900 flex flex-col gap-6 mt-8 md:pl-4 lg:pl-5 md:mt-1 md:border-l border-neutral-300">
            <ContactDetails />
          </div>
        </section>
      </Section>
    </>
  );
}
