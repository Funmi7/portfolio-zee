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
                From a young age, I have been fascinated by how applications
                come to be. Even though I studied microbiology in a higher
                institution, my passion was in building applications and
                bringing products to life. This led me to begin researching and
                discovering more about product management. Furthermore, I
                decided to undertake a Google Project Management course with
                Coursera, where I gained essential project management skills
                needed to succeed as a project manager through Google’s
                methodology.
                <br />
                <br />
                Currently, I am a product manager intern with HNG which is a
                fast paced bootcamp for learning digital skills focused on
                advanced learners and those with some pre-knowledge, and it gets
                people into shape for job offers.
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
                <li className="">Foundations of project management</li>
                <li className="">
                  Project initiation: Starting a successful project
                </li>
                <li className="">Project Planning: Putting it all together</li>
                <li className="">Project execution: Running the project</li>
                <li className="">Agile project management</li>
                <li className="">
                  Capstone: Applying project management in the real world
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 w-full">
              <h3 className="text-2xl font-semibold text-purple mb-4">
                Professional Experience
              </h3>
              <h4 className="text-xl font-semibold">
                Product Manager Intern - HNG (current)
              </h4>
              <p className="mt-4 mb-4">
                HNG is a fast paced bootcamp for learning digital skills focused
                on advanced learners and those with some pre-knowledge, and it
                gets people into shape for job offers. In the HNG bootcamp, we
                work in teams to build apps and solve problems.
              </p>
              <p>
                I am a team member and sub team lead for team telex. My team
                members and I are currently building a real time notification
                app for IT professionals.
              </p>
            </div>
          </div>
        </section>
      </Slide>
    </main>
  );
}
