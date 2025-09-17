import React from "react";
// motion
import { motion } from "framer-motion";
//  variants
import { fadeIn } from "../variants";
import { BsPhone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <section className=" py-16 lg:section">
      <div className="container mx-auto" id="contact">
        <motion.h2
          variants={fadeIn("down", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="h2 text-accent  text-center mb-12 focus:ring-offset-0 items-center justify-center"
        >
          Contact Me{" "}
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-1/2"
          >
            <form className="w-full">
              <input
                className="w-full mb-10 bg-transparent border-b outline-none placeholder:text-accent focus:outline-none "
                placeholder="Your Name"
                type="text"
              />
              <input
                required
                className="w-full  mb-10 bg-transparent border-b  placeholder:text-accent focus:outline-none "
                placeholder="Your Email"
                type="text"
              />
              <textarea
                className="w-full mb-10 outline-none bg-transparent border-b placeholder:text-accent focus:outline-none "
                placeholder="Your Message"
              />
              <button className="btn btn-lg" type="reset">
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="md:w-1/2 hidden lg:flex relative "
          >
            <div className="md:w-1/2 flex -top-32 right-12 absolute ">
              <button className="btn btn-sm">
                <SlLocationPin className="text-xl" />
              </button>{" "}
              <span
                className="h4 font-semibold
                 font-secondary text-accent  mx-2"
              >
                <h2 className="text-white ">Location</h2> Tbilisi, Georgia
              </span>
            </div>
            <div className="md:w-1/2 flex right-12 top-10 absolute ">
              <button className="btn btn-sm">
                <FiMail className="text-xl" />
              </button>{" "}
              <span
                className="h4 font-semibold
                 font-secondary text-accent mx-2"
              >
                <h2 className="text-white">Email</h2> eldenizmakmudov@gmail.com
              </span>
            </div>
            <div className="md:w-1/2 flex right-12 -top-11 absolute ">
              <button className="btn btn-sm">
                <BsPhone className="text-xl" />
              </button>{" "}
              <span
                className="h4 font-semibold
                 font-secondary text-accent mx-2"
              >
                <h2 className="text-white">Phone</h2> + 995 568 932 757
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
