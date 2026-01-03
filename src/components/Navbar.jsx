import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavDetails } from "../services/NavData";
import { ChevronDown, ChevronRight, MenuIcon } from "lucide-react";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const data = NavDetails;
  const [activeMenu, setActiveMenu] = useState(null);
  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveMenu(null);
      setShowNav(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [showNav]);

  return (
    <nav className="flex md:w-full w-full py-3 fixed justify-between items-center top-0 left-0 z-50 lg:pr-5 gap-5 bg-white sm:px-auto px-4">
      <div className="lg:w-64 md:w-52 w-48 h-auto flex-shrink-0">
        <img
          src="Logo.png"
          alt="Saveetha Engineering College"
          className="w-full"
        />
      </div>
      <div className="text-white lato-regular flex-col hidden lg:flex lg:text-base">
        <div className="bg-white text-black w-full flex items-center md:gap-10 gap-5 py-2">
          <div
            className="mr-5"
            onClick={(e) => {
              e.stopPropagation();
              setShowNav(false);
              toggleMenu(null);
            }}
          >
            <Link to={"/"} className="font-bold">
              Home
            </Link>
          </div>
          {data.map((obj) => {
            return obj.subLinks ? (
              <div
                className="relative font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNav(false);
                  toggleMenu(obj.linkName);
                }}
                key={obj.linkName}
              >
                <span className="inline-block h-full cursor-pointer">
                  {
                    <div className="flex gap-2">
                      <span>{obj.linkName}</span>
                      {activeMenu === obj.linkName ? (
                        <ChevronDown />
                      ) : (
                        <ChevronRight />
                      )}
                    </div>
                  }
                </span>
                {activeMenu === obj.linkName && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenu(null);
                    }}
                    className="flex flex-col gap-6 absolute top-12 -left-1 right-full bg-yellow-600 text-white p-3 transition-all duration-200 z-50 min-w-max max-w-1/2 rounded-xl"
                  >
                    {obj.subLinks.map((vals, i) => (
                      <Link key={vals} to={obj.path[i]}>
                        {vals}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div
                className="relative font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowNav(false);
                  toggleMenu(obj.linkName);
                }}
                key={obj.linkName}
              >
                <span className="inline-block h-full cursor-pointer">
                  <div className="flex gap-2">
                    <Link to={obj.path} className="font-bold">
                      {obj.linkName}
                    </Link>
                  </div>
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:py-5 lato-bold text-sm lg:text-base md:pr-3 flex items-center justify-end w-auto">
        <div
          className="relative cursor-pointer self-end"
          onClick={(e) => {
            e.stopPropagation();
            setActiveMenu(null);
            setShowNav((prev) => !prev);
          }}
        >
          <MenuIcon className="font-extrabold h-full" />
          {showNav && (
            <div
              onClick={(e) => e.stopPropagation()}
              className="fixed top-16 sm:top-16 md:top-20 lg:top-20 lg:left-auto lg:right-10 left-0 right-0 h-[calc(100vh-4rem)] overflow-y-auto flex flex-col gap-5 backdrop-blur-md bg-yellow-700/70 lg:bg-yellow-600 lg:h-auto lg:overflow-visible text-white font-bold lato-regular lg:p-3 lg:rounded-2xl p-7 z-[999] lato-bold overflow-x-auto"
            >
              <div className="flex flex-col gap-5 lg:hidden">
                <div className="flex gap-2 pb-3">
                  <Link
                    to={"/"}
                    className="font-bold"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowNav(false);
                      toggleMenu(null);
                    }}
                  >
                    Home
                  </Link>
                </div>
                {data.map((obj) => {
                  return obj.subLinks ? (
                    <div
                      key={obj.linkName}
                      onClick={() => toggleMenu(obj.linkName)}
                      className="relative"
                    >
                      <div className="flex gap-2 justify-between">
                        <span>{obj.linkName}</span>
                        {activeMenu === obj.linkName ? (
                          <ChevronDown />
                        ) : (
                          <ChevronRight />
                        )}
                      </div>
                      <div className="flex flex-col mt-2">
                        {activeMenu === obj.linkName && (
                          <div className="pl-4 py-2 bg-yellow-500/50 backdrop-blur-md flex flex-col gap-5">
                            {obj.subLinks.map((val, ind) => (
                              <Link
                                key={ind}
                                to={obj.path[ind]}
                                onClick={() => setShowNav(false)}
                              >
                                {val}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="relative font-bold"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowNav(false);
                        toggleMenu(obj.linkName);
                      }}
                      key={obj.linkName}
                    >
                      <span className="inline-block h-full cursor-pointer">
                        <div className="flex gap-2">
                          <Link to={obj.path} className="font-bold">
                            {obj.linkName}
                          </Link>
                        </div>
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col gap-6">
                <Link
                  to={"/travels"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNav(false);
                    toggleMenu(null);
                  }}
                >
                  Travels & Visa
                </Link>
                <Link
                  to={"/contact"}
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowNav(false);
                    toggleMenu(null);
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
