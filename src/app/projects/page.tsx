"use client";

import Image from "next/image";
import { Fade, Slide, Hinge } from "react-awesome-reveal";
import Carousel from "react-material-ui-carousel";

import telexImg from "../../../public/images/_murtax_design.png";
import boilerPlateImg from "../../../public/images/boiler-plate.png";
import telexAImg from "../../../public/images/telex-1.png";
import telexBImg from "../../../public/images/telex-2.png";
import boilerPlateAImg from "../../../public/images/boiler-plate-1.png";
import boilerPlateBImg from "../../../public/images/boiler-plate-2.png";
import scaAImg from "../../../public/images/sca-1.png";
import scaBImg from "../../../public/images/sca-2.png";
import scaCImg from "../../../public/images/sca-3.png";

import AnimatedSection from "@component/components/AnimatedSection";
import Link from "next/link";
const telexImages = [telexImg, telexAImg, telexBImg];
const boilerImages = [boilerPlateImg, boilerPlateAImg, boilerPlateBImg];
const scaImages = [scaAImg, scaBImg, scaCImg];

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
          <section className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-12">
            <div className="w-full">
              <div className="w-full min-h-[250px] md:min-h-[350px]">
                <Carousel
                  animation="slide"
                  autoPlay={true}
                  indicators={false}
                  duration={1000}
                >
                  {scaImages.map((item, index) => (
                    <Image
                      key={"images-telex" + index}
                      src={item}
                      alt="dummy image"
                      className="max-w-full rounded-md shadow-md"
                      sizes="(max-width:100%)"
                      height={index === 0 ? 400 : 338}
                    />
                  ))}
                </Carousel>
              </div>

              <Link
                href="https://shecodeafrica.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl font-bold text-purple mt-10 mb-4"
              >
                She Code Africa
              </Link>
              <p>
                She Code Africa is a registered non-profit organization
                dedicated to empowering and celebrating girls and women in
                technology across Africa through technical training, mentorship,
                and community programs.
              </p>

              <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
                My Role and Contributions
              </h4>
              <ul className="list-disc flex flex-col gap-3 ml-3">
                <li>
                  Currently leading the complete revamp of the She Code Africa
                  website and managing the Admin Web App, ensuring alignment
                  with user needs and organizational goals.
                </li>
                <li>
                  Facilitate Agile ceremonies including sprint planning,
                  stand-ups, and retrospectives to ensure smooth team
                  collaboration and on-time delivery.
                </li>
                <li>
                  Manage product backlogs and create actionable user stories and
                  tickets using Linear.
                </li>
                <li>
                  Collaborate closely with cross-functional teams — including
                  design, engineering, and QA — to deliver high-quality,
                  user-focused features.
                </li>
                <li>
                  Work with stakeholders and mentors to gather requirements,
                  review updates, and incorporate feedback into product
                  iterations.
                </li>
                <li>
                  Oversee quality assurance processes to ensure that all
                  deliverables meet design and functionality standards.
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
                <li>Google Chat</li>
              </ul>
            </div>
            <div className="w-full">
              <div className="w-full min-h-[250px] md:min-h-[350px]">
                {/* <Image
                  src={telexImg}
                  alt="dummy image"
                  className="max-w-full rounded-md shadow-md"
                  sizes="(max-width:100%)"
                  height={400}
                /> */}
                <Carousel
                  animation="slide"
                  autoPlay={true}
                  indicators={false}
                  duration={1000}
                >
                  {telexImages.map((item, index) => (
                    <Image
                      key={"images-telex" + index}
                      src={item}
                      alt="dummy image"
                      className="max-w-full rounded-md shadow-md"
                      sizes="(max-width:100%)"
                      height={index === 0 ? 400 : 338}
                    />
                  ))}
                </Carousel>
              </div>

              <Link
                className="text-4xl font-bold text-purple mt-10 mb-4"
                href="https://telex.im/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telex
              </Link>
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
                <li>Clickup</li>
                <li>Google sheets</li>
                <li>Figma</li>
                <li>Notion</li>
                <li> Slack</li>
              </ul>
            </div>
            <div className="w-full">
              <div className="w-full min-h-[250px] md:min-h-[350px]">
                <Carousel
                  animation="slide"
                  autoPlay={true}
                  indicators={false}
                  duration={1000}
                >
                  {boilerImages.map((item, index) => (
                    <Image
                      key={"images-boiler" + index}
                      src={item}
                      alt="dummy image"
                      className="max-w-full rounded-md shadow-md"
                      sizes="(max-width:100%)"
                      height={338}
                    />
                  ))}
                </Carousel>
              </div>

              <Link
                className="text-4xl font-bold text-purple mt-10 mb-4"
                href="https://trackyt.pipeops.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trackyt
              </Link>
              <p>
                Trackyt is a personal finance tracking application designed to
                help users monitor their income, expenses, and savings goals in
                real time. The app empowers individuals to make informed
                financial decisions by providing visual analytics, budgeting
                tools, and spending insights through an intuitive interface.
              </p>

              <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
                My Role and Contributions
              </h4>
              <ul className="list-disc flex flex-col gap-3 ml-3">
                <p>
                  As a Product Manager, I oversaw the product’s lifecycle from
                  concept to MVP delivery, ensuring alignment between user
                  needs, business goals, and technical feasibility. My key
                  contributions included
                </p>
                <li>
                  <b>Requirement Gathering & Ideation: </b>Collaborated with
                  stakeholders to define core features such as income tracking,
                  expense categorization, budget goals, and data visualization
                  dashboards.
                </li>
                <li>
                  <b>User Research & Problem Definition: </b>Conducted user
                  interviews and surveys to identify common financial pain
                  points, helping shape Trackyt’s initial feature set.
                </li>
                <li>
                  <b>Roadmap & Sprint Planning: </b>Created a detailed product
                  roadmap and prioritized backlog items using Linear, ensuring
                  timely delivery of features.
                </li>
                <li>
                  <b>Collaboration & Agile Facilitation: </b>Worked closely with
                  designers and developers to translate requirements into
                  actionable user stories, conducted sprint reviews, and ensured
                  continuous feedback loops.
                </li>
                <li>
                  <b>Design & UX Oversight: </b>Partnered with the design team
                  in Figma to review and refine user flows for the dashboard,
                  transaction input screens, and analytics sections.
                </li>
                <li>
                  <b>Testing & Quality Assurance: </b>Coordinated QA sessions
                  and conducted user acceptance testing to validate
                  functionality and usability before MVP launch.
                </li>
                <li>
                  <b>Stakeholder Communication:</b> Provided regular progress
                  updates, coordinated demo sessions, and integrated user
                  feedback into subsequent iterations.
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
                Technologies used
              </h4>
              <ul className="list-disc flex flex-col gap-3 ml-3">
                <li>Google docs</li>
                <li>Google sheets</li>
                <li>Linear</li>
                <li>Figma</li>
                <li>Slack</li>
              </ul>
            </div>

            <div className="w-full">
              <div className="w-full min-h-[250px] md:min-h-[350px]">
                <Carousel
                  animation="slide"
                  autoPlay={true}
                  indicators={false}
                  duration={1000}
                >
                  {boilerImages.map((item, index) => (
                    <Image
                      key={"images-boiler" + index}
                      src={item}
                      alt="dummy image"
                      className="max-w-full rounded-md shadow-md"
                      sizes="(max-width:100%)"
                      height={338}
                    />
                  ))}
                </Carousel>
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
                <li>Github</li>
              </ul>
            </div>
          </section>
        </AnimatedSection>
      </Fade>
    </main>
  );
};

export default Projects;
