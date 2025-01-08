import Section from "../components/Section";
import HeroImage from "../components/HeroImage";
import reporter from "@/public/reporter.png";

const teamMembers = [
  {
    name: "Val Van Balen",
    role: "Co-Founder",
    education: ["BA (Hons)", "MSc in Creative Multimedia", "PhD (Graphics)"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Naveeth Malinga",
    role: "Co-Founder",
    education: ["BSc (Network Engineering)", "Masters in Biomedical Engineering"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Kingzang Thinley",
    role: "Director of Article Operations",
    education: ["BSc (Marketing)", "MSc in Film & TV Production"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Geeth Liyanage",
    role: "CEO & Creative Director",
    education: ["BA (Hons)", "MSc in Film & TV Production", "PhD (Journalism & Mass-Communication)"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Sangitha Sharma",
    role: "Director of Content & Publications",
    education: ["B.Ed", "M.Ed", "MA (English Literature)", "PhD in Education"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Fedra Ferro",
    role: "Chief Human Resources Officer",
    education: ["BSc (Marketing)", "MBA"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Chamitha Ranneththi",
    role: "Chief Logistics Officer (CLO)",
    education: ["MBA", "Masters in Law (LLM)"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Simranjit Singh",
    role: "Director and Editor in Chief",
    education: ["BA in Arts", "Masters in Mass Communication"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Lakhan Gandhi",
    role: "Head of Legal & Regulatory Affairs",
    education: ["BIT", "BA", "Masters in Law"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Brandon Bryce",
    role: "Chief Network Officer (CNO)",
    education: ["Bachelor in Network Operations"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Sahil Jaswal",
    role: "Chief Marketing Officer (CMO)",
    education: ["BSc (Marketing)", "MBA"],
    image: "https://placehold.co/800X800",
  },
  {
    name: "Akash Deep Muni",
    role: "Director of Production & Development",
    education: ["BSc in English", "MSc in Journalism", "Ph.D. in Journalism and Mass Communication"],
    image: "https://placehold.co/800X800",
  },
];

export default function Team() {
  return (
    <>
      <HeroImage src={reporter} />
      <Section className="p-4 lg:max-w-[1280px]">
        <h1 className="text-3xl text-center text-heading">Board of Directors</h1>
        <div className="flex gap-4 flex-wrap justify-center lg:gap-5 mt-4 lg:mb-1 md:grid md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((teamMember, index) => (
            <div key={index} className="p-4 bg-neutral-900 text-white flex flex-col pb-3 max-w-72 lg:p-0">
              <img src={teamMember.image} alt={teamMember.name} className="aspect-square" />
              <div className="flex flex-col gap-1 mt-4 lg:mt-3 lg:px-4 lg:pb-4">
                <div className="text-2xl">{teamMember.name}</div>
                <div className="text-accent text-lg lg:text-sm">{teamMember.role}</div>
                <div className="text-lg lg:text-xs">{teamMember.education.join(" | ")}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
