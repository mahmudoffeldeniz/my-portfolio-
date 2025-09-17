import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import image from "../assets/img/services.webp";

const services = [
  {
    name: "Creation of Websites",
    description:
      "The creation of websites involves designing and developing web pages that are responsive and accessible on a wide range of devices.",
    link: "https://en.wikipedia.org/wiki/Web_design",
  },
  {
    name: "Responsive design",
    description:
      "Using relative units like percentages for layout elements, so they can adjust to different screen sizes.",
    link: "https://en.wikipedia.org/wiki/Responsive_web_design",
  },
  {
    name: "Optimization",
    description:
      "\n" +
      "Front-end developers enhance website performance by optimizing load times, image sizes, and overall speed.",
    link: "https://en.wikipedia.org/wiki/Mathematical_optimization",
  },
];

const Services = () => {
  return (
    <section className="section mt-10" id="service">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="flex-1  bg-no-repeat lg:bg-bottom mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a Front-end Developer
            </h3>
            <img src={image} alt="" />
          </motion.div>
          <div>
            <div className="flex-1">
              {services.map((service, index) => {
                const { name, description, link } = service;

                return (
                  <motion.div
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.1 }}
                    key={index}
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <a
                        href={link}
                        target="_blank"
                        className="btn w-9 h-9 mb-[49px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a
                        href={link}
                        target="_blank"
                        className="text-gradient text-sm"
                      >
                        Visit {name}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
