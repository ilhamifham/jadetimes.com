import Link from "next/link";

const pricePlans = [
  {
    duration: "monthly",
    amount: 6.99,
    date: "month",
    popular: false,
  },
  {
    duration: "annual",
    amount: 49.99,
    date: "year",
    popular: true,
  },
  {
    duration: "two year",
    amount: 79.99,
    date: "2 year",
    popular: false,
  },
];

const PricePlanCard = () => {
  return (
    <ul className="text-center flex flex-col gap-4 justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:gap-5" id="price-plans">
      {pricePlans.map((pricePlan, index) => (
        <li
          key={index}
          className={`bg-white p-8 relative w-full md:order-none ${pricePlan.popular ? "-order-1 sm:col-span-2 md:col-auto" : ""}`.trim()}
        >
          <h2 className="uppercase text-lg lg:text-xl">{pricePlan.duration}</h2>
          <div className="my-6 md:mb-1">
            <div>
              <span className="text-lg align-top mr-1 inline-block">$</span>
              <span className="text-4xl lg:text-5xl inline-block">{pricePlan.amount}</span>
            </div>
            <div className="text-sm md:text-xs">Every {pricePlan.date}</div>
          </div>
          <div className="text-sm md:text-xs">7 day free trial</div>
          <Link
            href=""
            className={`text-lg text-white w-full block py-3 mt-5 md:text-sm lg:duration-300 lg:hover:opacity-80 ${
              pricePlan.popular ? "bg-accent" : "bg-neutral-900"
            }`}
          >
            Subscribe
          </Link>
          {pricePlan.popular && (
            <div className="text-lg bg-accent text-white uppercase w-fit px-4 py-2 absolute -top-[1.375rem] left-1/2 -translate-x-1/2 text-nowrap md:py-1 md:text-sm md:-top-[0.875rem]">
              Most Popular
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PricePlanCard;
