import React from "react";
import profilepImg from "../../assets/profilefb.jpg";
import TypeWriter from "typewriter-effect";
import CV from "../../assets/resume.pdf";

const About = () => {
  const myself =
    "<ul>" +
    "<li>Dedicated <strong>Full Stack JavaScript Developer</strong> with <strong>3+ years </strong>" +
    "professional experience, renowned for <strong>delivering innovative solutions</strong>" +
    " across a spectrum of projects.</li>" +
    "<li>Proficient in a multitude of modern technologies, including <strong>ReactJS, Angular, " +
    "Tailwind CSS, Ant Design, NodeJS, TypeScript, Express, RESTful API, MongoDB, Amazon Web Services.</strong></li>" +
    "<li>Leveraging tools such as <strong>Webpack, Module Federation, Babel, Docker, and Kubernetes </strong>" +
    "to optimize system architecture.</li>" +
    "<li>Well-versed in testing methodologies, having utilized <strong>React Testing Library and Jest</strong>" +
    " to ensure the <srtong>reliability</srong> of applications under development. </li>" +
    "<li>Strong knowledge of <strong>Agile and Scrum</strong> methodologies, ensuring <strong>efficient</strong> and " +
    "<strong>collaborative</strong> project management.</li>" +
    "<li>Passion for <strong>problem-solving</strong>, coupled with ability to thrive under high-pressure situations" +
    " and deliver<strong>high-quality solutions</strong>.</li> " +
    "<li>Approach every challenge with a <strong>lifelong learning mindset</strong>," +
    " constantly seeking opportunities to expand skill set and stay current with the rapidly evolving tech landscape.</li>";

  // const greeting = `<h1 className="greeting">Hi, I'm Duyen Tran</h1>`;
  return (
    <section id="about" className="mt-36 scroll-mt-36 ">
      {/* About container */}

      <div className="flex flex-col items-center md:flex-row md:items-start justify-start  space-y-10 md:space-y-0 md:space-x-14 p-10">
        {/* Image */}
        <div className="md:w-1/3">
          <div className="flex flex-col items-end">
            <img
              src={profilepImg}
              alt=""
              className="w-60 h-60 rounded-full ring-1 ring-darkViolet dark:ring-gray-300 object-cover"
            />
          </div>
          <div></div>
        </div>
        {/* Content */}
        <div className="md:w-2/3 max-w-2xl">
          <div className="flex flex-col space-y-6 justify-start items-center md:items-start  text-darkViolet dark:text-white ">
            {/* Introduction */}
            <div className="text-2xl font-semibold text-center md:text-start">
              Hello, I'm Duyen Tran.
              <br /> Full Stack JavaScript Developer
            </div>
            <div className=" text-center md:text-start">
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter.typeString(myself).pauseFor().start();
                }}
                options={{
                  delay: 10,
                  // loop: true,
                }}
              />
            </div>
            {/* Buttons */}
            <div className="flex space-x-4 md:space-x-6 justify-center items-start">
              <a
                href={CV}
                download="DuyenTran_CV"
                className="rounded-lg px-6 py-2 md:px-6 md:py-3 shadow-xl ring-1 ring-accentCyan bg-accentCyan text-white hover:bg-gray-50 hover:text-darkViolet hover:scale-105 font-semibold tracking-widest"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="rounded-lg px-6 py-2 md:px-6 md:py-3 shadow-xl ring-1 ring-accentCyan bg-accentCyan text-white hover:bg-gray-50 hover:text-darkViolet hover:scale-105 font-semibold tracking-widest"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
