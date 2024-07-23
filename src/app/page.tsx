"use client";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import IllusImage from "@component/assets/illus.svg";

export default function Home() {
  return (
    <main>
      <section className="flex min-h-[70vh] flex-col justify-center p-24 bg-neutral-100 dark:bg-black">
        <section className="flex h-full items-center justify-between w-full">
          <div className="flex flex-col gap-3 w-1/2">
            <h3 className="text-purple dark:text-purple text-2xl font-semibold">
              Hello, I'm
            </h3>
            <h1 className="font-black text-5xl">Chizaram Orji</h1>
            <div>
              <TypeAnimation
                sequence={[
                  1000,
                  "A creative product manager", // initially rendered starting point
                  1000,
                  "A wonderful software engineer",
                  1000,
                  "A great human",
                  1000,
                ]}
                speed={30}
                style={{ fontSize: "2em", color: "#5e3bee" }}
                repeat={Infinity}
              />
            </div>
            <button className="bg-purple rounded-md p-2 w-[140px] text-white">
              My Projects
            </button>
          </div>
          <div className="w-1/2 h-[50vh]">
            <Image
              src={IllusImage}
              alt="An illutration of a lady with a laptop"
            />
          </div>
        </section>
      </section>
      <section className="mt-24">
        <h1 className="font-bold text-5xl flex items-center justify-center">
          <div className="bg-gray h-px mr-8 w-3/12" />
          Biography
          <div className="bg-gray h-px ml-8 w-3/12" />
        </h1>
        <div className="flex items-center justify-between mt-10 gap-12">
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold text-purple mb-4">
              About Me
            </h3>
            <p>
              Hello! My name is Alex Johnson, a passionate web developer and
              designer with a keen eye for detail and a drive for excellence. I
              specialize in creating interactive, responsive, and visually
              appealing websites that not only meet but exceed client
              expectations.
            </p>
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold text-purple mb-4">
              Background
            </h3>
            <p>
              From a young age, I have been fascinated by the intersection of
              technology and creativity. This led me to pursue a Bachelor's
              degree in Computer Science from XYZ University, where I honed my
              skills in various programming languages and web technologies. My
              education provided me with a solid foundation in both the
              theoretical and practical aspects of web development.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-10 gap-12">
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold text-purple mb-4">
              Professional Experience
            </h3>
            <p>
              Over the past few years, I have gained extensive experience
              working on diverse projects, from small business websites to
              large-scale web applications. My journey has taken me through
              roles such as junior developer, front-end specialist, and now, a
              lead developer. Each position has contributed to my growth and
              proficiency in the field.
            </p>
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold text-purple mb-4">
              HNG Internship 11
            </h3>
            <p>
              One of the most significant milestones in my career was my role in
              the HNG Internship 11 program. As a team lead, I was responsible
              for overseeing a group of talented interns, guiding them through
              complex projects, and ensuring the successful completion of our
              objectives. My contributions included:
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
