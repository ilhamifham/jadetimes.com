"use client";

const MembershipButton = () => {
  function scrollToTop() {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <button
      className="text-sm md:text-xs bg-neutral-900 border border-neutral-900 text-white px-6 py-4 inline-block tracking-widest mt-6 lg:py-3 duration-300 lg:hover:bg-white lg:hover:text-black"
      onClick={scrollToTop}
    >
      Subscribe Now
    </button>
  );
};

export default MembershipButton;
