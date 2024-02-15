import React from "react";
import BookMarkImg from "../../assets/bookmark.png";
import ClipboardImg from "../../assets/clipboard.png";
import FyloImg from "../../assets/fylo.png";
import LoopstudiosImg from "../../assets/loopstudios.png";
import ShortlyImg from "../../assets/shortly.png";
import TestimonialImg from "../../assets/testimonial-grid.png";
import GithubImg from "../../assets/github.png";
import RefurbishedGoodImg from "../../assets/RefurbishedGood.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: `Refurbished Good Marketplace (MERN Stack App)`,
      technologies: [
        "HTML",
        "Tailwind CSS",
        "Ant Design",
        "React JS",
        "Node JS",
        "Express JS",
        "Multer",
        "Mongoose",
        "Cloudinary",
        "Stripe",
      ],
      features: [
        "Fully Responsive Website",
        "Upload and access files to/from Cloudinary",
        "Manage all products, users, bids with CRUD",
        "Secure payment with Stripe",
        "Send notificaton for each change of status on products, users, bids",
        "Secure user signing up and logging in with jsonwebtoken(JWT)",
      ],
      image: RefurbishedGoodImg,
      liveDemoLink: "https://refurbished-goods-marketplace-app.onrender.com/",
      codeLink: "https://github.com/duyentth/RefurbishedGoodsMarketForDeploy",
    },

    {
      id: 2,
      name: "Clipboard Website",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      features: [
        "Fully Responsive Website",
        "Flex Box Model",
        "Transform behaviour",
      ],
      image: ClipboardImg,
      liveDemoLink: "https://clipboard-tv80.onrender.com/",
      codeLink:
        "https://github.com/duyentth/Tailwind-CSS-Projects/blob/main/README.md",
    },
    {
      id: 3,
      name: "Fylo Website",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      features: [
        "Fully Responsive Website",
        "Flex Box Model",
        "Transform behaviour",
        "Light/Dark Mode",
      ],
      image: FyloImg,
      liveDemoLink: "https://fylo-p03y.onrender.com/",
      codeLink:
        "https://github.com/duyentth/Tailwind-CSS-Projects/blob/main/README.md",
    },
    {
      id: 4,
      name: "Loopstudios Website",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      features: [
        "Fully Responsive Website",
        "Flex Box Model",
        "Transform behaviour",
      ],
      image: LoopstudiosImg,
      liveDemoLink: "https://loopstudios-ytbl.onrender.com/",
      codeLink:
        "https://github.com/duyentth/Tailwind-CSS-Projects/blob/main/README.md",
    },
    {
      id: 5,
      name: "Shortly Website",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      features: [
        "Fully Responsive Website",
        "Flex Box Model",
        "Transform behaviour",
      ],
      image: ShortlyImg,
      liveDemoLink: "https://shortly-rfjt.onrender.com/",
      codeLink:
        "https://github.com/duyentth/Tailwind-CSS-Projects/blob/main/README.md",
    },
    {
      id: 6,
      name: "Testimonial-Grid Website",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      features: ["Fully Responsive Website", "Grid Box Model"],
      image: TestimonialImg,
      liveDemoLink: "https://testimonial-grid-mvml.onrender.com/",
      codeLink:
        "https://github.com/duyentth/Tailwind-CSS-Projects/blob/main/README.md",
    },
    {
      id: 7,
      name: "Bookmark Website",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      features: [
        "Fully Responsive Website",
        "Flex Box Model",
        "Transform behaviour",
      ],
      image: BookMarkImg,
      liveDemoLink: "https://bookmark-ytz5.onrender.com/",
      codeLink:
        "https://github.com/duyentth/Tailwind-CSS-Projects/blob/main/README.md",
    },
  ];
  return (
    <section id="projects" className="mt-20 scroll-mt-20">
      <div className="flex flex-col space-y-10 p-10">
        {/* Title */}
        <div className=" text-3xl md:text-4xl font-semibold underline">
          Projects
        </div>
        {/* Projects container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-10">
          {projects &&
            projects.map((project) => {
              return (
                //Project Card container
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-y-10 p-6 md:gap-x-4 md:gap-y-0 bg-gray-100 dark:bg-darkBlue3 rounded-xl shadow-xl  justify-items-center md:justify-items-start hover:bg-violet-300 hover:dark:bg-orange-400  duration-300"
                  key={project.id}
                >
                  <div className="flex flex-col space-y-3 items-center justify-center text-center text-white font-semibold tracking-widest">
                    {/* Project Image */}
                    <img
                      src={project.image}
                      alt=""
                      className="w-64 h-full object-contain"
                    />
                    {/* Buttons */}
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      className="rounded-lg px-4 py-2 w-full shadow-xl ring-1 ring-accentCyan bg-accentCyan text-white hover:bg-gray-50 hover:text-darkViolet hover:scale-105"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      className="flex  px-4 py-2 justify-center items-center rounded-lg shadow-xl ring-1 ring-accentCyan bg-accentCyan text-white hover:bg-gray-50 hover:text-darkViolet hover:scale-105 w-full"
                    >
                      <img src={GithubImg} alt="" className="w-6 h-6 mr-2 " />
                      Code
                    </a>
                  </div>

                  {/* Project Description */}
                  <div className="md:col-span-2">
                    {/* <!--Accordion container--> */}
                    <div className="flex flex-col overflow-hidden">
                      {/* Project name */}
                      <div className="text-xl font-semibold mb-4">
                        {project.name}
                      </div>
                      {/* <!-- Tab 1 --> */}
                      <div
                        className="border-b pb-6 outline-none group"
                        tabIndex="1"
                      >
                        {/* <!-- Tab flex container --> */}
                        <div className="flex justify-between items-center space-x-6 group transition duration-500 cursor-pointer">
                          {/* <!-- Tab title --> */}
                          <div className="transition duration-500 group-hover:text-accentCyan">
                            What are technologies used?
                          </div>
                          {/* <!-- Arrow --> */}

                          <div className="transition duration-500 group-focus:-rotate-180 group-focus:text-accentCyan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="12"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                d="M1 1l8 8 8-8"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* <!-- Tab content --> */}
                        <div className=" overflow-hidden group-focus:max-h-screen max-h-0 transition duration-500 ">
                          <ul className=" list-disc list-inside p-4">
                            {project.technologies.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* <!-- Tab 2 --> */}
                      <div
                        className="border-b pb-6 outline-none group"
                        tabIndex="1"
                      >
                        {/* <!-- Tab flex container --> */}
                        <div className="flex justify-between items-center group transition duration-500 cursor-pointer">
                          {/* <!-- Tab title --> */}
                          <div className="transition duration-500 group-hover:text-accentCyan">
                            What are features created?
                          </div>
                          {/* <!-- Arrow --> */}

                          <div className="transition duration-500 group-focus:-rotate-180 group-focus:text-accentCyan">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="12"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                d="M1 1l8 8 8-8"
                              />
                            </svg>
                          </div>
                        </div>

                        {/* <!-- Tab content --> */}
                        <div className=" overflow-hidden group-focus:max-h-screen max-h-0 transition duration-500 ">
                          <ul className=" list-disc list-inside p-4">
                            {project.features.map((tech, index) => (
                              <li key={index}>{tech}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
