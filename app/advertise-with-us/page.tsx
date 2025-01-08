import Address from "@/app/components/Address";
import ShowCard from "@/app/components/ShowCard";
import Form from "@/app/components/Form";
import ContactDetails from "@/app/components/ContactDetails";
import Section from "@/app/components/Section";
import addresses from "@/app/data/addresses";

export default function AdvertiseWithUs() {
  return (
    <Section className="p-4">
      <h1 className="text-neutral-900 text-2xl font-semibold border-b border-b-neutral-300 pb-1 md:text-center md:text-2xl md:pb-4 lg:text-3xl lg:py-8 lg:pb-11">
        Contact Us
      </h1>
      <h2 className="text-neutral-900 text-xl font-semibold my-3 md:text-base md:text-center md:my-8">Ad Sales Contacts in the America</h2>
      <ul className="border-y border-y-neutral-300 py-8 text-xs flex flex-col gap-6 text-center md:text-[0.8125rem] md:flex-row md:gap-0">
        <li className="md:w-1/2 md:pr-9 md:border-r md:border-r-neuborder-b-neutral-300">
          <Address address={addresses[0]} />
        </li>
        <li className="md:w-1/2 md:pl-9">
          <Address address={addresses[1]} />
        </li>
      </ul>
      <ul className="my-8 text-xs text-center flex flex-col gap-5 w-40 mx-auto md:w-96 md:text-[0.8125rem]">
        {addresses.slice(2, addresses.length).map((address, index) => (
          <li key={index}>
            <Address address={address} />
          </li>
        ))}
      </ul>
      <ShowCard className="mb-7 flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-5" />
      <h2 className="text-2xl text-neutral-900 font-semibold">How to Report News To Us</h2>
      <div className="md:grid md:grid-cols-2">
        <Form className="text-sm flex flex-col gap-4 mt-4 md:pr-5 md:border-r md:border-r-neutral-300" />
        <div className="text-sm text-neutral-900 flex flex-col gap-6 mt-8 md:mt-4 md:pl-5">
          <ContactDetails />
        </div>
      </div>
    </Section>
  );
}
