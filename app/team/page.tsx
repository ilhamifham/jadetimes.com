import Image from "next/image";
import Section from "@/app/components/Section";
import HeroImage from "@/app/components/HeroImage";
import reporter from "@/public/reporter.png";
import valVanBalen from "@/public/team/val-van.png";
import naveethMalinga from "@/public/team/naveeth.png";
import kingzangThinley from "@/public/team/kingzang.png";
import geethLiyanage from "@/public/team/geeth.png";
import sangithaSharma from "@/public/team/sangitha.png";
import fedraFerro from "@/public/team/fedra.png";
import chamithaRanneththi from "@/public/team/chamitha.png";
import simranjitSingh from "@/public/team/simranjit.png";
import lakhanGandhi from "@/public/team/lakhan.png";
import brandonBryce from "@/public/team/brandon.png";
import sahilJaswal from "@/public/team/sahil.png";
import akashDeepMuni from "@/public/team/akash.png";

const teamMembers = [
  {
    name: "Val Van Balen",
    role: "Co-Founder",
    education: ["BA (Hons)", "MSc in Creative Multimedia", "PhD (Graphics)"],
    image: valVanBalen,
  },
  {
    name: "Naveeth Malinga",
    role: "Co-Founder",
    education: ["BSc (Network Engineering)", "Masters in Biomedical Engineering"],
    image: naveethMalinga,
  },
  {
    name: "Kingzang Thinley",
    role: "Director of Article Operations",
    education: ["BSc (Marketing)", "MSc in Film & TV Production"],
    image: kingzangThinley,
  },
  {
    name: "Geeth Liyanage",
    role: "CEO & Creative Director",
    education: ["BA (Hons)", "MSc in Film & TV Production", "PhD (Journalism & Mass-Communication)"],
    image: geethLiyanage,
  },
  {
    name: "Sangitha Sharma",
    role: "Director of Content & Publications",
    education: ["B.Ed", "M.Ed", "MA (English Literature)", "PhD in Education"],
    image: sangithaSharma,
  },
  {
    name: "Fedra Ferro",
    role: "Chief Human Resources Officer",
    education: ["BSc (Marketing)", "MBA"],
    image: fedraFerro,
  },
  {
    name: "Chamitha Ranneththi",
    role: "Chief Logistics Officer (CLO)",
    education: ["MBA", "Masters in Law (LLM)"],
    image: chamithaRanneththi,
  },
  {
    name: "Simranjit Singh",
    role: "Director and Editor in Chief",
    education: ["BA in Arts", "Masters in Mass Communication"],
    image: simranjitSingh,
  },
  {
    name: "Lakhan Gandhi",
    role: "Head of Legal & Regulatory Affairs",
    education: ["BIT", "BA", "Masters in Law"],
    image: lakhanGandhi,
  },
  {
    name: "Brandon Bryce",
    role: "Chief Network Officer (CNO)",
    education: ["Bachelor in Network Operations"],
    image: brandonBryce,
  },
  {
    name: "Sahil Jaswal",
    role: "Chief Marketing Officer (CMO)",
    education: ["BSc (Marketing)", "MBA"],
    image: sahilJaswal,
  },
  {
    name: "Akash Deep Muni",
    role: "Director of Production & Development",
    education: ["BSc in English", "MSc in Journalism", "Ph.D. in Journalism and Mass Communication"],
    image: akashDeepMuni,
  },
];

export default function Team() {
  return (
    <>
      <HeroImage src={reporter} />
      <Section className="p-4 lg:max-w-[1280px]">
        <h1 className="text-3xl text-center text-heading">Board of Directors</h1>
        <div className="flex gap-4 flex-wrap justify-center lg:gap-5 mt-4 lg:mb-1 md:grid md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((teamMember, index) => (
            <div key={index} className="p-4 bg-neutral-800 text-white flex flex-col pb-3 max-w-80 lg:p-0">
              <Image src={teamMember.image} alt={teamMember.name} className="aspect-square lg:border-x lg:border-neutral-300 lg:border-t " />
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
