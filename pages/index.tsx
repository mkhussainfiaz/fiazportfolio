import { NextPage } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

import Bar from "../components/Bar";
import { languages } from "../data";

const About: NextPage = () => {
  // console.log(services);

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "75vh" }}>
      <div className="flex flex-col flex-grow px-6 pt-1 ">
        <h4 className="my-2 text-xl font-semibold tracking-wide">
          About Me
        </h4>
        <p className="my-3 text-base font-medium">
          I am a web developer, with two year of experience in
          development. I am capable of overcoming complex issues by
          consistently identifying and providing the technological needs
          of companies through innovation. I am able to create user
          interfaces, write and test codes, make APIs/RestAPIs, create
          databases, troubleshoot issues, and implement new features
          based on user feedback
        </p>

      </div>

      {/* //! Experience */}
      <div className="flex flex-col flex-grow px-6 pt-1 bg-gray-400 dark:bg-dark-100 mt-5 py-5">
        <div>
          <h4 className="my-3 text-2xl font-bold">Experience</h4>

          <h5 className="my-2 text-xl font-bold">Frontend Developer</h5>
          <p className="font-semibold">Dynamic Developers, Rahim Yar Khan, Punjab, Pakistan</p>
          <p className="mb-3">2021-2022</p>

          <ul className="list-disc list-inside">
            <li>Design front-end UI using HTML5, CSS3, and modern JavaScript library React</li>
            <li>Produced stunning visual elements of web applications by translating design into code</li>
            <li>Producing high quality optimized images and code by following industry best practices.</li>
            <li>Delivered responsive, cross browser, accessible and optimized websites with fast response time.</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col flex-grow px-6 pt-1 ">
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-2 text-xl font-semibold tracking-wide">
            What I am Doing
          </h4>

          <div className="grid gap-6 my-3 md:grid-cols-2">
            {/* children's initial and animate property should be same as the parent during a stagger effect  */}
            {services.map((service) => (
              <div
                className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1 "
                key={service.title}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Education & Certificate */}
      <div className="grid gap-9 lg:grid-cols-2 mt-5">
        <div className="flex flex-col flex-grow px-6 pt-1 bg-gray-400 dark:bg-dark-100 py-5">
          <h4 className="my-3 text-2xl font-bold">Education</h4>
          <h5 className="my-2 text-xl font-bold">
            BS in Software Engineering
          </h5>
          <p className="font-semibold">KFUEIT, Rahim Yar Khan, Punjab, Pakistan</p>
          <p className="mb-3">2018-2022</p>
          <ul className="list-disc list-inside">
            <li>Graduated with good academic remarks</li>
            <li>3.0 CGPA out of 4.0</li>
            <li>Work as a Teacher Assistance</li>
            <li>Part of difference societies</li>
          </ul>
        </div>

        <div className="flex flex-col flex-grow px-6 pt-1 bg-gray-400 dark:bg-dark-100 py-5">
          <h4 className="my-3 text-2xl font-bold">Certificate</h4>
          <div className="mb-5">
            <p className="font-semibold">Full-Stack Web Development with React (Specialization)</p>
            <p>
              Offered by The Hong Kong University of Science and Technology through Coursera
            </p>
          </div>
          <div className="mb-5">
            <p className="font-semibold">HTML, CSS, and JavaScript for Web Developers</p>
            <p>
              Offered by Johns Hopkins University through Coursera
            </p>
          </div>
        </div>
      </div>



      {/*Languages & Tools */}
      <div className="flex flex-col flex-grow px-6 pt-1 ">
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-2 text-xl font-semibold tracking-wide">
            Language & Framework
          </h4>

          <div className="grid gap-6 mt-3 lg:grid-cols-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
      </div>

    </div >
  );
};


export default About;
