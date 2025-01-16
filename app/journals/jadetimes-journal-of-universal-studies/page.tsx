import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import product from "@/public/journals/product.png";
import ChevronIcon from "@/components/ChevronIcon";
import FormButton from "@/components/FormButton";
import ContactDetails from "@/components/ContactDetails";

export default function JadetimesJournalOfUniversalStudies() {
  return (
    <>
      <Section className="p-4 lg:max-w-[1000px]">
        <h1 className="text-2xl text-center md:text-3xl lg:text-4xl">The Jadetimes Journal of Universal Studies</h1>
        <p className="text-center mt-4 text-lg lg:text-2xl lg:mt-2">Volume 1, Issue 1 | eISSN: Pending</p>
        <div className="text-sm md:flex md:flex-row md:gap-4 lg:gap-5 my-4 lg:my-5">
          <Image src={product} alt="" className="max-w-[600px] mx-auto h-fit w-full" />
          <div className="flex flex-col mt-5 md:mt-0">
            <p className="mb-5">
              Jadetimes Journal of Universal Studies (JJUS) is dedicated to the global advancement of knowledge across a diverse range of disciplines.
              It serves as a platform for peer-reviewed original research, surveys, case studies, and academic discourse, fostering interdisciplinary
              collaboration and innovation. The journal invites contributions in the following areas:
            </p>
            <ul className="list-disc pl-4 flex flex-col gap-5 mt-auto lg:pl-5">
              <li>
                <span className="font-semibold text-heading">Business and Economics:</span> Entrepreneurship, market trends, financial analysis,
                corporate strategies, and global business practices.
              </li>
              <li>
                <span className="font-semibold text-heading">Education:</span> Pedagogical innovations, curriculum development, e-learning
                technologies, and education policy analysis.
              </li>
              <li>
                <span className="font-semibold text-heading">Health and Medicine:</span> Public health, medical advancements, healthcare management,
                and preventive medicine.
              </li>
              <li>
                <span className="font-semibold text-heading">Journalism and Media Studies:</span> Media ethics, digital journalism, communication
                strategies, and emerging trends in mass media.
              </li>
              <li>
                <span className="font-semibold text-heading">Social Sciences:</span> Sociology, anthropology, cultural studies, and social policy.
              </li>
              <li>
                <span className="font-semibold text-heading">Technology and Engineering:</span> Artificial intelligence, software development,
                sustainable engineering practices, and technological innovations.
              </li>
              <li>
                <span className="font-semibold text-heading">Arts and Humanities:</span> Literature, philosophy, history, cultural studies, and the
                performing arts.
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm mb-5">
          Jadetimes Journal of Universal Studies (JJUS) is issued quarterly, with new editions released in March, June, September, and December each
          year. It provides a forum for thought-provoking commentary by accepting submissions in the form of original research contributions,
          scientific surveys, case studies, book reviews, and letters to the Editor-in-Chief.
        </p>
        <p className="text-sm mb-5">
          The editorial team comprises distinguished professionals and researchers from around the globe who assist in reviewing and maintaining the
          journal&apos;s high standards in an honorary capacity. All contributors are solely responsible for the content and opinions presented in
          their submissions.
        </p>
        <p className="text-sm mb-5">
          The journal is copyrighted, and manuscripts published in Jadetimes Journal of Universal Studies should not be reproduced without explicit
          written permission from the Editor-in-Chief.
        </p>
        <p className="text-sm">
          By embracing a multidisciplinary approach, JJUS seeks to advance scholarly knowledge, inspire innovation, and encourage meaningful dialogue
          among researchers, educators, and professionals worldwide.
        </p>
        <section className="text-sm mt-5">
          <h2 className="text-xl font-semibold mb-4 text-heading">Our Mission</h2>
          <p>
            At Jadetimes Journal of Universal Studies (JJUS), our mission is to foster the global dissemination of knowledge across diverse
            disciplines by providing a platform for high-quality, peer-reviewed research. We aim to inspire innovation, encourage interdisciplinary
            collaboration, and support the academic and professional growth of researchers, educators, and practitioners. Through our commitment to
            intellectual excellence and inclusivity, we strive to bridge gaps in understanding, advance solutions to complex challenges, and
            contribute to the collective progress of society.
          </p>
        </section>
        <section className="text-sm mt-5">
          <h2 className="text-xl font-semibold mb-4 text-heading">What We Offer</h2>
          <p>
            At Jadetimes Journal of Universal Studies (JJUS), we provide a comprehensive platform for researchers, educators, and professionals to
            showcase their work and contribute to global academic and professional discourse. Our offerings include:
          </p>
          <section className="mt-5">
            <h3 className="font-semibold lg:text-sm mb-4">Publication Opportunities</h3>
            <ul className="list-disc pl-7">
              <li>
                Peer-reviewed research papers, case studies, and surveys across a wide range of disciplines, including Business, Education, Health,
                Journalism, Technology, Social Sciences, and the Arts.
              </li>
              <li>Acceptance of original and innovative contributions that push the boundaries of knowledge.</li>
            </ul>
          </section>
          <section className="mt-5">
            <h3 className="font-semibold lg:text-sm mb-4">Global Reach</h3>
            <ul className="list-disc pl-7">
              <li>
                A worldwide platform for the dissemination of research, ensuring your work is accessible to scholars, practitioners, and institutions
                around the globe.
              </li>
              <li>Online availability of all issues, facilitating easy access and increased readership.</li>
            </ul>
          </section>
          <section className="mt-5">
            <h3 className="font-semibold lg:text-sm mb-4">Editorial Excellence</h3>
            <ul className="list-disc pl-7">
              <li>
                A dedicated editorial board comprising renowned professionals and researchers from diverse fields, ensuring rigorous review and
                quality control.
              </li>
              <li>Constructive feedback and guidance to refine and enhance the quality of submitted work.</li>
            </ul>
          </section>
          <section className="mt-5">
            <h3 className="font-semibold lg:text-sm mb-4">Interdisciplinary Collaboration</h3>
            <ul className="list-disc pl-7">
              <li>
                A space for interdisciplinary dialogue and collaboration, encouraging the integration of diverse perspectives to address complex
                challenges.
              </li>
            </ul>
          </section>
          <section className="mt-5">
            <h3 className="font-semibold lg:text-sm mb-4">Recognition and Credibility</h3>
            <ul className="list-disc pl-7">
              <li>An opportunity to contribute to a reputable journal committed to upholding the highest academic and ethical standards.</li>
              <li>A quarterly publication schedule, ensuring timely dissemination of current and impactful research.</li>
            </ul>
          </section>
          <section className="my-5">
            <h3 className="font-semibold lg:text-sm mb-4">Copyright Protection</h3>
            <ul className="list-disc pl-7">
              <li>Copyrighted publications that safeguard the intellectual property of contributors.</li>
              <li>Clear policies for permission and reproduction, ensuring the integrity of published works.</li>
            </ul>
          </section>
          <p>
            Jadetimes Journal of Universal Studies (JJUS) is more than just a publication; it is a collaborative community that values innovation,
            integrity, and excellence. We are dedicated to empowering researchers, educators, and professionals to make meaningful contributions to
            their fields and society at large.
          </p>
        </section>
        <section className="text-sm mt-5">
          <h2 className="text-xl font-semibold mb-4 text-heading">Announcements</h2>
          <section className="mt-5">
            <h3 className="font-semibold lg:text-sm mb-4">Call for Papers</h3>
            <ul className="list-disc pl-7">
              <li>
                We are currently accepting submissions for the upcoming issue of JJUS. Researchers, educators, and professionals are invited to submit
                their original manuscripts by March 25. Topics span a wide range of disciplines, including Business, Education, Health, Journalism,
                Technology, Social Sciences, and the Arts.
              </li>
            </ul>
          </section>
          <section className="mt-5">
            <h3 className="font-semibold lg:text-sm mb-4">Upcoming Issue Release</h3>
            <ul className="list-disc pl-7">
              <li>
                The next issue of JJUS will be published in June. Explore groundbreaking research and thought-provoking articles from experts
                worldwide.
              </li>
            </ul>
          </section>
          <section className="mt-5">
            <h3 className="font-semibold lg:text-sm mb-4">Editorial Board Updates</h3>
            <ul className="list-disc pl-7">
              <li>
                We are pleased to announce the addition of new members to our editorial board. Their expertise will further enhance the quality and
                diversity of our journal.
              </li>
            </ul>
          </section>
          <section className="mt-5">
            <h3 className="font-semibold lg:text-sm mb-4">Author Workshops</h3>
            <ul className="list-disc pl-7">
              <li>
                Join us for an exclusive online workshop on April 15, focusing on effective research writing and manuscript preparation. Stay tuned
                for registration details.
              </li>
            </ul>
          </section>
          <section className="my-5">
            <h3 className="font-semibold lg:text-sm mb-4">Indexing and Recognition</h3>
            <ul className="list-disc pl-7">
              <li>
                We are actively pursuing indexing in reputed databases to expand the global reach and academic visibility of JJUS. Updates on this
                progress will be shared soon.
              </li>
            </ul>
          </section>
          <p>
            For detailed information, submission guidelines, and deadlines, please visit our website or contact us at info@jadetimes.com. Stay
            connected with us for more updates and opportunities!
          </p>
        </section>
        <section className="text-sm mt-5">
          <h2 className="text-xl font-semibold mb-4 text-heading">Articles</h2>
          <ul className="list-disc pl-7">
            <li>Pending</li>
          </ul>
        </section>
        <section className="text-sm mt-5">
          <h2 className="text-xl font-semibold mb-4 text-heading">Downloads</h2>
          <Link
            href="/copyright-declaration-forn.pdf"
            target="_blank"
            className="border border-neutral-900 p-3 flex flex-row gap-2 w-fit items-center lg:text-base duration-300 font-medium lg:hover:bg-blue-400 lg:hover:text-white lg:hover:border-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
            </svg>
            COPYRIGHT DECLARATION FORM
          </Link>
        </section>
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
      <div className="text-sm font-medium p-3 bg-neutral-900 text-white text-center">&copy; Jadetimes Journal of Universal Studies (JJUS)</div>
    </>
  );
}
