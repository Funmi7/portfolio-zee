"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

import IllusImage from "@component/assets/illus.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Slide direction="up">
        <section className="flex  flex-col justify-center lg:p-24 p-12 bg-neutral-100 dark:bg-black">
          <section className="flex min-h-full items-center justify-between w-full md:flex-col-reverse flex-col-reverse lg:flex-row">
            <div className="flex flex-col gap-3 lg:w-1/2 md:w-full">
              <h3 className="text-purple dark:text-purple text-2xl font-semibold">
                Hello, I'm
              </h3>
              <h1 className="font-black text-3xl sm:text-5xl">Chizaram Orji</h1>
              <div>
                <TypeAnimation
                  sequence={[
                    1000,
                    "An innovative product manager",
                    1000,
                    "A collbaorative team member",
                    1000,
                    "A strategic product owner",
                    1000,
                  ]}
                  speed={30}
                  className="react-type-style"
                  repeat={Infinity}
                />
              </div>
              <Link href="/projects">
                <button className="bg-purple rounded-md p-2 w-[140px] text-white">
                  My Projects
                </button>
              </Link>
            </div>
            <div className="lg:h-[50vh] md:h-auto lg:w-1/2 md:w-full">
              <Image
                src={IllusImage}
                alt="An illutration of a lady with a laptop"
                className="max-w-full"
              />
            </div>
          </section>
        </section>
      </Slide>
      <Slide delay={500}>
        <section className="mt-24 transition ease-in-out delay-150">
          <h1 className="font-bold text-3xl sm:text-5xl flex items-center justify-center">
            <div className="bg-gray h-px mr-8  w-3/12 hidden sm:block" />
            Biography
            <div className="bg-gray h-px ml-8 w-3/12 hidden sm:block" />
          </h1>
          <div className="flex flex-col md:flex-row items-start justify-between mt-10 gap-12">
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-semibold text-purple mb-4">
                About Me
              </h3>
              <p>
                Hello! My name is Zara Orji, a passionate, innovative product
                manager with a keen eye for detail and a drive for excellence. I
                specialize in overseeing the development and lifecyle of
                products from inception to launch. My role involves
                understanding market needs, defining product vision,
                prioritizing features and collaborating closely with cross
                functional teams to ensure successful delivery.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-semibold text-purple mb-4">
                Background
              </h3>
              <p>
                From an early age, I’ve always been intrigued by how
                applications are designed, built, and brought to life. Although
                I studied Microbiology in higher institution, my curiosity and
                passion for technology led me into the world of product
                management, where I found the perfect balance between
                problem-solving, collaboration, and innovation.
                <br /> <br /> To build a solid foundation, I completed the
                Google Project Management Certification on Coursera, gaining
                hands-on knowledge in Agile methodologies, project planning, and
                stakeholder management. This training helped me transition into
                tech with a strong focus on product strategy and delivery.{" "}
                <br /> <br />
                My journey began at HNG, a fast-paced bootcamp for advanced
                learners, where I worked as a Product Manager Intern and later
                as an Apprentice Product Manager. I collaborated with engineers,
                designers, and testers to build a real-time notification app for
                IT professionals, facilitating sprints, managing timelines, and
                aligning product goals with team output. <br /> <br />
                Currently, I serve as a Product Manager at She Code Africa,
                where I’m leading the total revamp of the organization’s website
                and managing the Admin Web App. In this role, I function as both
                a Product Manager and Scrum Master, ensuring smooth coordination
                between cross-functional teams while maintaining agile
                principles
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-between mt-10 gap-12">
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-semibold text-purple mb-4">
                Education
              </h3>
              <p className="font-semibold">Google Project Management</p>
              <ul className="list-disc ml-4 mt-4 flex flex-col gap-4">
                <li>Foundations of project management</li>
                <li>Project initiation: Starting a successful project</li>
                <li>Project Planning: Putting it all together</li>
                <li>Project execution: Running the project</li>
                <li>Agile project management</li>
                <li>Capstone: Applying project management in the real world</li>
              </ul>

              <p className="font-semibold">
                AltSchool Africa - School of Product
              </p>
              <ul className="list-disc ml-4 mt-4 flex flex-col gap-4">
                <li>
                  Understanding the full product lifecycle: ideation → launch →
                  post-launch
                </li>
                <li>
                  Cultivating a product-focused mindset: identifying
                  opportunities, solving problems, and delivering exceptional
                  user experiences.
                </li>
                <li>
                  Applying feature & initiative prioritisation techniques that
                  balance business goals and customer needs.
                </li>
                <li>
                  Crafting and maintaining product roadmaps aligned with company
                  objectives and timelines.
                </li>
                <li>
                  Executing successful product launches, from planning through
                  execution, into market entry.
                </li>
                <li>
                  Mastering multiple development methodologies — Agile, Scrum
                  and Waterfall — to improve product development processes.
                </li>
                <li>
                  Employing Design Thinking and prototyping to iteratively
                  refine product ideas and enhance usability.
                </li>
                <li>
                  Gaining proficiency in market research, customer insights and
                  turning data into actionable requirements.
                </li>
                <li>
                  Strengthening communication skills for effective stakeholder
                  engagement, team alignment and product advocacy
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-semibold text-purple mb-4">
                Professional Experience
              </h3>
              <h4 className="text-xl font-semibold">
                Product Manager - SheCodeAfrica (current)
              </h4>
              <p className="mt-4 mb-4">
                SheCodeAfrica is an organization that empowers women in tech
                through training, mentorship, and networking opportunities. As a
                Product Manager, I lead the development of initiatives aimed at
                increasing female participation in technology and providing
                resources for their professional growth.
              </p>
              <ul>
                My key responsibilities include:
                <li className="list-disc pl-2 mt-2">
                  Facilitating Agile ceremonies such as sprint planning, daily
                  stand-ups, and retrospectives.
                </li>
                <li className="list-disc pl-2">
                  Managing product roadmaps and prioritizing features based on
                  user feedback, impact, and timelines.
                </li>
                <li className="list-disc pl-2">
                  Collaborating with developers and designers to translate
                  requirements into actionable tasks in linear.
                </li>
                <li className="list-disc pl-2">
                  Coordinating stakeholder communication, gathering feedback,
                  and ensuring approvals align with business goals.
                </li>
                <li className="list-disc pl-2">
                  Tracking progress and ensuring timely MVP delivery, using
                  data-driven insights to optimize workflow.
                </li>
                <li className="list-disc pl-2">
                  Overseeing QA testing and release management, ensuring product
                  quality and functionality before deployment.
                </li>
              </ul>
              <p className="mt-2">
                This experience has strengthened my ability to lead diverse
                teams, deliver high-quality products, and bridge the gap between
                user needs and technical execution — all while fostering
                collaboration and continuous improvement.
              </p>
              <h4 className="text-xl font-semibold mt-8">
                Product Manager Intern - HNG
              </h4>
              <p className="mt-4 mb-4">
                HNG is a fast paced bootcamp for learning digital skills focused
                on advanced learners and those with some pre-knowledge, and it
                gets people into shape for job offers. In the HNG bootcamp, we
                work in teams to build apps and solve problems.
              </p>
              <p>
                I was a team member and a sub team lead for team telex. My team
                members and I built a real time notification app for IT
                professionals.
              </p>
            </div>
          </div>
        </section>
      </Slide>
    </main>
  );
}
