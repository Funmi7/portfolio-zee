"use client";

import Image from "next/image";

import growthImg from "@component/assets/growth-illus.svg";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import AnimatedSection from "@component/components/AnimatedSection";

const items = [
  {
    title: "Continuous Learning",
    details:
      "I plan to stay updated with industry trends, and best practices by reading books, attending webinars and taking relevant courses to ehance my skill set.",
  },
  {
    title: "Technical Knowledge:",
    details:
      "Improve my understanding of the technical aspects of a product. Having a basic knowledeg of software development, architecture, and design",
  },
  {
    title: "Customer Focus",
    details: "I will engage with customers to understand their needs.",
  },
  {
    title: "Data-Driven Decision Making",
    details: "I will improve my data analysis skills.",
  },
  {
    title: "Networking and Mentorship",
    details:
      " Build more relationships with other product managers, developers, designers, data analysts, video marketers etc and seek more mentors who can guide me further on the right path.",
  },

  {
    title: "Feedback and Reflection",
    details:
      "I plan to always seek feedback from team members, mentors and stakeholders. Always reflecting on my performances and areas for improvement.",
  },
];

const Growth = () => {
  return (
    <main>
      <h1 className="font-bold text-5xl flex items-center justify-center">
        <div className="bg-gray h-px mr-8 w-3/12" />
        Growth
        <div className="bg-gray h-px ml-8 w-3/12" />
      </h1>
      <Fade>
        <AnimatedSection>
          <section className="flex min-h-[60vh] flex-col md:flex-row p-6 sm:p-12 lg:p-24 justify-center items-center bg-neutral-100 dark:bg-black mt-20">
            <div className="w-full md:w-1/2">
              <Image
                src={growthImg}
                alt="An illutration of growth"
                className="max-w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p>
                Whilst working as a product manager intern in HNG with team
                telex, I have learned a lot and improved in the following
                aspects:
              </p>

              <p className="mt-6">
                <b>Knowledge Expansion:</b> Collaborating with other interns and
                mentors from different tracks (developers, designers, video
                marketers, data analysts etc.) has allowed me to learn about
                various aspects of product development, including technical
                constraints, user experience design principles, and marketing
                strategies
              </p>

              <p className="mt-6">
                <b>Enhanced Communication Skills: </b>
                Collaborating with team members from various tracks has helped
                improve my ability to communicate complex ideas clearly and
                effectively to diverse audiences.
              </p>
              <p className="mt-6">
                <b>Problem-Solving Abilities: </b>
                Facing unique challenges that requires innovative solutions has
                enabled me hone my problem-solving skills as I work with others
                to overcome obstacles.
              </p>
              <p className="mt-6">
                <b>Network Building: </b>
                Interacting with professionals, mentors and interns from various
                tracks has expanded my professional network, which can provide
                support, resources, and opportunities for future growth.
              </p>

              <p className="mt-6">
                I have learned a lot and still learning and gaining much needed
                experience from{" "}
                <Link
                  href="https://hng.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple"
                >
                  HNG Tech
                </Link>{" "}
                and{" "}
                <Link
                  href="https://hng.tech/internship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple"
                >
                  HNG Internship
                </Link>
                .
              </p>
            </div>
          </section>
        </AnimatedSection>
      </Fade>

      <h3 className="  text-3xl font-semibold mt-20 text-center">
        {" "}
        My Growth Pathway Plan
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-[30px]">
        {items.map((item) => (
          <div
            className="rounded-md border-1 border border-neutral-300 p-4 shadow-xl"
            key={"skills" + item.title}
          >
            <h4 className="mt-4 text-xl font-bold text-purple mb-4">
              {item.title}
            </h4>{" "}
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Growth;
