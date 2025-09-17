import React, { useState, useEffect } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = scrolling
    ? "mb-8 fixed w-full z-50 lg:py-4 bg-violet-950\t "
    : "mb-8 lg:fixed lg:py-4 w-full z-50 ";

  return (
    <header className={headerClasses}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="home" smooth={true}>
            <img
              src={Logo}
              className="w-20 cursor-pointer lg:ml-20 lg:absolute lg:left-20  lg:top-4"
              alt=""
            />
          </Link>
          <ul className="lg:flex hidden ml-14 gap-x-12">
            <Link
              className="hover:text-accent transition-all duration-300 cursor-pointer "
              to="home"
              smooth={true}
            >
              Home
            </Link>

            <Link
              className="hover:text-accent transition-all duration-300 cursor-pointer "
              to="about"
              smooth={true}
            >
              About
            </Link>
            <Link
              className="hover:text-accent transition-all duration-300 cursor-pointer "
              to="scills"
              smooth={true}
            >
              My Skills
            </Link>
            <Link
              className="hover:text-accent transition-all duration-300 cursor-pointer "
              to="portfolio"
              smooth={true}
            >
              Portfolio
            </Link>
            <Link
              className="hover:text-accent transition-all duration-300 cursor-pointer "
              to="contact"
              smooth={true}
            >
              Contact
            </Link>
          </ul>
          <Link
            className="hover:text-accent transition-all duration-300 cursor-pointer "
            to="contact"
          >
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
