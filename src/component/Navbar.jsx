import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div>
      <nav className={`navbar ${scrollDirection === "down" ? "hidden" : ""}`}>
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:underline">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
