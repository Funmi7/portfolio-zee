"use client";

import Image from "next/image";
import { Fade, Slide, Hinge } from "react-awesome-reveal";

import telexImg from "../../../public/images/_murtax_design.png";
import boilerPlateImg from "../../../public/images/boiler-plate.png";

import AnimatedSection from "@component/components/AnimatedSection";

const Projects = () => {
  return (
    <main>
      <h1 className="font-bold text-3xl sm:text-5xl flex items-center justify-center ">
        <div className="bg-gray h-px mr-8  w-3/12 hidden sm:block" />
        My Projects
        <div className="bg-gray h-px ml-8 w-3/12 hidden sm:block" />
      </h1>
      <Fade>
        <AnimatedSection>
          <section className="flex flex-col md:flex-row items-start justify-between mt-10 gap-12">
            <div className="w-full md:w-1/2">
              <div className="w-full">
                <Image
                  src={telexImg}
                  alt="dummy image"
                  className="max-w-full rounded-md shadow-md"
                  sizes="(max-width:100%)"
                  height={400}
                />
              </div>

              <h3 className="text-4xl font-bold text-purple mt-10 mb-4">
                Telex
              </h3>
              <p>
                Telex is a real time notification app for IT professionals such
                as DevOps, Product managers, project managers, software
                engineers, and security teams. It is an application that ensures
                timely and accurate delivery of notifications. Telex is designed
                to be the central hub for all app related events allowing teams
                to stay informed and collaborate on issues in real time
              </p>

              <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
                My Role and Contributions
              </h4>
              <ul className="list-disc flex flex-col gap-3 ml-3">
                <li>
                  <b>Sub team lead - Telex FRD:</b> Contributed to the drafting
                  of the success metrics
                </li>
                <li>
                  <b>Sub team lead - Telex:</b> Created actionable Telex MVP
                  tickets for the <b>Messaging</b> and <b>Payment</b> features
                </li>
                <li>
                  Worked alongside the deign team by monitoring, inspecting and
                  giving inputs, ensuring deadlines were met
                </li>
                <li>
                  Attended several meetings with the mentors on the team for
                  updates and feedback{" "}
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
                Technologies used
              </h4>
              <ul className="list-disc flex flex-col gap-3 ml-3">
                <li>Google docs</li>
                <li>Linear</li>
                <li>Google sheets</li>
                <li>Figma</li>
                <li>Notion</li>
                <li> Slack</li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full">
                <Image
                  src={boilerPlateImg}
                  alt="dummy image"
                  className="max-w-full rounded-md shadow-md"
                  height={338}
                  sizes="(max-width:100%)"
                />
              </div>

              <h3 className="text-4xl font-bold text-purple mt-10 mb-4">
                HNG-11 Boiler Plate
              </h3>
              <p>
                The HNG-11 Boiler plate is the foundational document
                highlighting key aspects of a product which includes product
                overview, objectives and goals, roadmaps, metrics and KPIs,
                target market, value proposition, competitive analysis and
                problem statement
              </p>

              <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
                My Role and Contributions
              </h4>
              <ul className="list-disc flex flex-col gap-3 ml-3">
                <li>
                  <b>Sub team lead:</b> Worked alongside the design team by
                  monitoring, inspecting and giving input during the design of
                  key features
                </li>
                <li>Created actionable tickets for the boiler plate</li>
              </ul>

              <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
                Technologies used
              </h4>
              <ul className="list-disc flex flex-col gap-3 ml-3">
                <li>Google docs</li>
                <li>Google sheets</li>
                <li>Figma</li>
                <li>Slack</li>
              </ul>
            </div>
            ;
          </section>
        </AnimatedSection>
      </Fade>
    </main>
  );
};

//               <div className="w-full bg-no-repeat bg-cover rounded-md">

export default Projects;
