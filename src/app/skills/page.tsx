import Image from "next/image";

import ownershipImg from "@component/assets/icons/ownership.svg";

const Skills = () => {
  const dummySkills = {
    icon: ownershipImg,
    name: "Product Ownership",
    details:
      "If you are looking for a reliable and experienced Product Manager to help you navigate development through the software lifecycle, look no further. With my expertise in Agile methodologies and end-to-end product management, I can help you deliver the product that your customers deserve.",
  };

  return (
    <main>
      {" "}
      <h1 className="font-bold text-5xl flex items-center justify-center">
        <div className="bg-gray h-px mr-8 w-3/12" />
        My Skills
        <div className="bg-gray h-px ml-8 w-3/12" />
      </h1>
      <section className="grid grid-cols-3 gap-8 mt-[80px]">
        {Array(7)
          .fill(dummySkills)
          .map((item) => (
            <div
              className="rounded-md border-1 border border-neutral-300 p-4 shadow-xl"
              key={"skills" + item.name}
            >
              <Image src={item.icon} alt="skills icon" width={80} height={80} />
              <h4 className="mt-4 text-xl font-bold text-purple mb-4">
                {item.name}
              </h4>
              <p>{item.details}</p>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Skills;
