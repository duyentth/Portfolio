import React from "react";
import profilepImg from "../../assets/fb.jpg";
import TypeWriter from "typewriter-effect";
import CV from "../../assets/resume.pdf";

const About = () => {
  const myself =
    "<ul class='list-inside list-disc'>" +
    "<li>Detail-oriented and technically proficient Full Stack Developer with a Master’s degree in Software Engineering" +
    " from Maharishi International University and a solid foundation in modern web technologies.</li>" +
    "<li>Recently trained in key technologies including React, TypeScript, JavaScript, Java, Node.js, Express, RESTful APIs," + 
    " GraphQL, MongoDB and more.</li>" +
    "<li> Proven ability to design and develop responsive, user-centric web applications. </li>" +
    "<li>Highly motivated and eager to leverage current skills and continuous learning mindset to contribute effectively as " +
    "a Full Stack Developer. </li>" +
  "<li>Strong communicator and team player, committed to delivering high-quality work and staying updated with industry trends.</li> </ul>";
  return (
    <section id="about" className="mt-36 scroll-mt-36 ">
      {/* About container */}

      <div className="flex flex-col items-center md:flex-row md:items-start justify-center  space-y-10 md:space-y-0 md:space-x-14 p-10">
        {/* Image */}
        <div className="md:w-1/3">
          <div className="flex flex-col items-center md:items-end">
            <img
              src={profilepImg}
              alt=""
              className="w-10/12 h-full ring-1 ring-darkViolet dark:ring-gray-300 object-contain md:skew-y-3"
            />
          </div>
          <div></div>
        </div>
        {/* Content */}
        <div className="md:w-2/3 max-w-xl">
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
