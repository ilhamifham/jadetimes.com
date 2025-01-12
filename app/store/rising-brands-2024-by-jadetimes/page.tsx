"use client";

import Image from "next/image";
import { useState } from "react";
import useKey from "@/app/hooks/useKey";
import product from "@/public/store/product.jpg";
import ChevronIcon from "@/app/components/ChevronIcon";
import Section from "@/app/components/Section";

const products = [
  {
    id: "rising-brands-2024-by-jadetimes",
    name: "Rising Brands 2024 by Jadetimes",
    sku: "364215376135199",
    price: "44.00",
    images: product,
    new: true,
    link: "/store/rising-brands-2024-by-jadetimes",
  },
];

const productInformations = [
  {
    title: "PRODUCT INFO",
    info: "Whether you're an entrepreneur, investor, or simply passionate about the world of business, Rising Brands 2024 is your essential guide to staying ahead in the ever-evolving business landscape. Join us in celebrating innovation, excellence, and the future of global brands.",
  },
  {
    title: "RETURN & REFUND POLICY",
    info: "We strive to ensure your satisfaction with Rising Brands 2024. If for any reason you are not completely happy with your purchase, you have 30 days from the date of purchase to return your item, provided it is unused, in its original condition, and in the original packaging. To initiate a return, contact our customer service team at info@jadetimes.com with your order number and reason for return. Once your return is received and inspected, we will notify you of the approval or rejection of your refund, which will be processed and applied to your original method of payment. For exchanges of defective or damaged items, please contact us at info@jadetimes.com.",
  },
  {
    title: "SHIPPING INFO",
    info: "At Rising Brands 2024, we aim to provide prompt and reliable shipping services to ensure your magazine reaches you in perfect condition. All orders are processed within 1-2 business days, with domestic delivery within 5-7 business days for standard shipping and 2-3 business days for express shipping. International orders may take 10-14 business days for standard shipping and 5-7 business days for express shipping. Shipping costs are calculated at checkout, and tracking information will be provided once your order has shipped. Please ensure your shipping address is correct, as we are not responsible for packages delivered to incorrect addresses. For any issues with damaged or lost packages, contact our customer service team at info@jadetimes.com.",
  },
];

export default function RisingBrands2024ByJadetimes() {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [key, handleKey] = useKey(0);

  function handleCurrentQuantity(value: string) {
    if (value === "increment") {
      setCurrentQuantity((prevQuantity) => (prevQuantity === 9999 ? 9999 : prevQuantity + 1));
    }
    if (value === "decrement") {
      setCurrentQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1));
    }
    // if (event) {
    //   const inputValue = Number(event.target.value);
    //   if (inputValue >= 1 && inputValue <= 9999) {
    //     setCurrentQuantity(inputValue);
    //   }
    // }
  }

  return (
    <Section className="p-4 lg:max-w-[1000px]">
      <div className="md:grid md:grid-cols-2">
        <div className="md:pr-4 lg:pr-5 md:border-r md:border-r-[#17171724]">
          <Image src={products[0].images} alt="" className="aspect-[9_/_12]" />
        </div>
        <div className="md:pl-4 lg:pl-5 mt-5 md:mt-0">
          <h1 className="text-3xl mb-2">{products[0].name}</h1>
          <div className="lg:text-sm">SKU: {products[0].sku}</div>
          <div className="flex flex-row items-center justify-between my-6">
            <div className="text-2xl text-neutral-700">${products[0].price}</div>
            <div className="flex flex-row items-center gap-4 border-2 border-[#17171724] text-lg relative w-36" aria-label="quantity">
              <button
                className={`p-2 bg-neutral-300 text-black z-10 ${currentQuantity === 1 && "opacity-50"}`}
                onClick={() => handleCurrentQuantity("decrement")}
                disabled={currentQuantity === 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                </svg>
              </button>
              <input
                type="text"
                className="block w-full h-full text-center absolute px-12 focus:outline-none"
                value={currentQuantity}
                // onChange={() => handleCurrentQuantity("", event)}
                // min="1"
                // max="9999"
                readOnly
              />
              <button className="p-2 bg-neutral-300 text-black absolute right-0 z-10" onClick={() => handleCurrentQuantity("increment")}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
                  <path d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
              </button>
            </div>
          </div>
          <p className="lg:text-sm">Will contact you once you made the payment.</p>
          <button className="text-lg mt-2 mb-8 bg-neutral-900 text-white p-3 w-full md:p-2 md:text-base md:mb-5">Order Now</button>
          {productInformations.map((productInformation, index) => (
            <div key={index} className="border-b border-b-[#17171724] last:border-b-0">
              <button className="flex flex-row justify-between items-center gap-8 w-full py-4" onClick={() => handleKey(index)}>
                <div className="text-black text-left lg:text-base">{productInformation.title}</div>
                <div className="text-black">
                  {key === index ? <ChevronIcon className="w-5 -rotate-90 duration-300" /> : <ChevronIcon className="w-5 rotate-90 duration-300" />}
                </div>
              </button>
              <div className={`duration-300 grid ${key === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-y-hidden" aria-hidden={key !== index}>
                  <p className="lg:text-sm mb-4 text-neutral-900">{productInformation.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-neutral-900 mt-8 text-lg lg:text-base">
        <p>
          Discover the future of business with <span className="italic">Rising Brands 2024</span>, the premier magazine dedicated to spotlighting the
          best upcoming brands from around the world. Dive into a treasure trove of insights, featuring:
        </p>
        <ul className="mt-4 list-decimal pl-5 flex flex-col gap-2">
          <li>
            <span className="font-medium">Top CEOs in Emerging Brands:</span> Get inspired by the visionary leaders driving the next generation of
            successful businesses.
          </li>
          <li>
            <span className="font-medium">Innovative Business Ideas:</span> Learn about groundbreaking concepts and strategies that are set to
            revolutionize various industries.
          </li>
          <li>
            <span className="font-medium">Brand Spotlights:</span> Detailed profiles of the most promising brands, exploring their journey, unique
            selling points, and market impact.
          </li>
          <li>
            <span className="font-medium">Expert Tips and Advice:</span> Gain valuable advice from industry experts on how to grow, manage, and
            sustain a successful brand.
          </li>
          <li>
            <span className="font-medium">Comprehensive Analysis:</span> In-depth articles and case studies offering a thorough understanding of
            market trends and consumer behavior.
          </li>
        </ul>
      </div>
    </Section>
  );
}
