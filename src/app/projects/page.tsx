import Image from "next/image";
const Page = () => {
  return (
    <main>
      <h1 className="font-bold text-5xl flex items-center justify-center">
        <div className="bg-gray h-px mr-8 w-3/12" />
        My Projects
        <div className="bg-gray h-px ml-8 w-3/12" />
      </h1>
      <section className="flex items-center justify-between mt-10 gap-12">
        <div className="w-1/2">
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/669612/pexels-photo-669612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="dummy image"
              className="max-w-full rounded-md"
            />
          </div>

          <h3 className="text-4xl font-bold text-purple mt-10 mb-4">Telex</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            id mi id auctor. Morbi quis lacus consectetur elit suscipit accumsan
            nec sed massa. Sed nec lectus at lectus porttitor tempus. Nulla
            imperdiet condimentum ex sed luctus. Praesent vulputate sodales odio
            ut volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Duis varius sem augue, quis
            imperdiet nisl maximus pellentesque.
          </p>

          <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
            My Role and Contributions
          </h4>
          <ul className="list-disc flex flex-col gap-3 ml-3">
            <li>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis
              tempor id mi id auctor. Morbi quis lacus consectetur elit suscipit
              accumsan nec sed massa
            </li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
            Technologies used
          </h4>
          <ul className="list-disc flex flex-col gap-3 ml-3">
            <li>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis
              tempor id mi id auctor. Morbi quis lacus consectetur elit suscipit
              accumsan nec sed massa
            </li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
        </div>

        <div className="w-1/2">
          <div className="w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/530024/pexels-photo-530024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="dummy image"
              className="max-w-full rounded-md"
            />
          </div>

          <h3 className="text-4xl font-bold text-purple mt-10 mb-4">Telex</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor
            id mi id auctor. Morbi quis lacus consectetur elit suscipit accumsan
            nec sed massa. Sed nec lectus at lectus porttitor tempus. Nulla
            imperdiet condimentum ex sed luctus. Praesent vulputate sodales odio
            ut volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Duis varius sem augue, quis
            imperdiet nisl maximus pellentesque.
          </p>

          <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
            My Role and Contributions
          </h4>
          <ul className="list-disc flex flex-col gap-3 ml-3">
            <li>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis
              tempor id mi id auctor. Morbi quis lacus consectetur elit suscipit
              accumsan nec sed massa
            </li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>

          <h4 className="text-xl font-semibold text-purple mt-10 mb-4">
            Technologies used
          </h4>
          <ul className="list-disc flex flex-col gap-3 ml-3">
            <li>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Duis
              tempor id mi id auctor. Morbi quis lacus consectetur elit suscipit
              accumsan nec sed massa
            </li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Page;
