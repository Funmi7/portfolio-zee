"use client";

import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

import ownershipImg from "@component/assets/icons/ownership.svg";
import interationImg from "@component/assets/icons/iteration.svg";
import designImg from "@component/assets/icons/ui-ux.svg";
import toolsImg from "@component/assets/icons/design-thinking.svg";
import writingImg from "@component/assets/icons/sheet.svg";
import agileImg from "@component/assets/icons/scrum.svg";
import taskImg from "@component/assets/icons/assignment.svg";
import adaptionImg from "@component/assets/icons/adapt.svg";
import communicationImg from "@component/assets/icons/conversation.svg";
import decisionImg from "@component/assets/icons/decision-making.svg";
import designThinking from "@component/assets/icons/design-thinking.svg";
import empathyImg from "@component/assets/icons/encourage.svg";
import ideaImg from "@component/assets/icons/idea.svg";
import projectMgtImg from "@component/assets/icons/project-management.svg";
import leaderImg from "@component/assets/icons/leadership.svg";

import AnimatedSection from "@component/components/AnimatedSection";
const techSkills = [
  {
    icon: interationImg,
    name: "Software Development Lifecycle (SDLC)",
    details:
      "I have knowledge of the various stages in the software development process, from planning and design to development, testing, deplpyment, and maintenance.",
  },
  {
    icon: agileImg,
    name: "Agile Methodologies",
    details:
      "I am familiar with agile frameworks like scrum and kanban, including sprint planning, backlog grooming, and conducting restropectives",
  },
  {
    icon: designImg,
    name: "UX/UI Design Principles",
    details:
      "I have basic understanding of UX/UI design principles to collaborate with design teams and ensure user-friendly product",
  },
  {
    icon: toolsImg,
    name: "Product Management Tools",
    details:
      "Proficiency with product management and project management tools like Linear, Jira, Trello, Asana, and Confluence to track progress and manage tasks",
  },
  {
    icon: writingImg,
    name: "Technical Writing",
    details:
      "Ability to create clear and concise technical documentation, including product requirements (PRD) and feature requirement documents",
  },
  {
    icon: taskImg,
    name: "Task Assigning",
    details:
      "Ability to break down features, and issues into actionable tickets",
  },
];

const softSkills = [
  {
    icon: communicationImg,
    name: "Communication",
    details:
      "I am capable of clearly conveying ideas, requirements, and feedback to stakeholders and cross functional team members",
  },
  {
    icon: decisionImg,
    name: "Decision Making",
    details:
      "I make informed decisions confidently and quickly, often based on incomplete information. Balancing data-driven insights with intuition and experience",
  },
  {
    icon: projectMgtImg,
    name: "Time Management",
    details:
      "I manage time efficiently and prioritize tasks to ensure deadlines are met. Ensuring that projects stay on track and within scope",
  },
  {
    icon: empathyImg,
    name: "Empathy",
    details:
      "I Understand and share in the feelings of others, which helps to create user-centric products and maintain good relationships with team members and customers.",
  },
  {
    icon: leaderImg,
    name: "Leadership",
    details:
      "I try to inspire and guide my cross-functional teams towards achieving common goals. Leading by example and fostering a collaborative environment.",
  },
  {
    icon: designThinking,
    name: "Problem solving",
    details:
      "Identifying issues and developing effective solutions. Being resourceful and innovative in addressing challenges that arise during product development",
  },
  {
    icon: adaptionImg,
    name: "Adaptibility",
    details:
      "I am flexible and open to change. I quickly adjust to new information, change in market conditions, and shifting priorities",
  },
  {
    icon: ideaImg,
    name: "Creativity",
    details:
      "I always think outside the box to develop innovative product features and solutions. Encouraging creativity within the team",
  },
  {
    icon: ownershipImg,
    name: "Negotiation",
    details:
      "I can effectively negotiate with stakeholders, including balancing competing interests and securing necessary resources and support for the product",
  },
];

const Skills = () => {
  return (
    <main>
      <h1 className="font-bold text-3xl sm:text-5xl flex items-center justify-center ">
        <div className="bg-gray h-px mr-8  w-3/12 hidden sm:block" />
        My Skills
        <div className="bg-gray h-px ml-8 w-3/12 hidden sm:block" />
      </h1>
      <Fade>
        <AnimatedSection>
          <h3 className="text-xl sm:text-4xl font-bold text-purple mt-14 mb-4">
            Technical Skills
          </h3>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[30px] sm:mt-[80px]">
            {techSkills.map((item) => (
              <div
                className="rounded-md border-1 border border-neutral-300 p-4 shadow-xl"
                key={"skills" + item.name}
              >
                <Image
                  src={item.icon}
                  alt="skills icon"
                  width={60}
                  height={60}
                />
                <h4 className="mt-4 text-xl font-bold text-purple mb-4">
                  {item.name}
                </h4>
                <p>{item.details}</p>
              </div>
            ))}
          </section>
        </AnimatedSection>
      </Fade>
      <Fade>
        <AnimatedSection>
          <h3 className="text-xl sm:text-4xl font-bold text-purple mt-14 mb-4">
            Soft Skills
          </h3>
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[30px] sm:mt-[80px]">
            {" "}
            {softSkills.map((item) => (
              <div
                className="rounded-md border-1 border border-neutral-300 p-4 shadow-xl"
                key={"skills" + item.name}
              >
                <Image
                  src={item.icon}
                  alt="skills icon"
                  width={80}
                  height={80}
                />
                <h4 className="mt-4 text-xl font-bold text-purple mb-4">
                  {item.name}
                </h4>
                <p>{item.details}</p>
              </div>
            ))}
          </section>
        </AnimatedSection>
      </Fade>
    </main>
  );
};

export default Skills;
