import { Globe, MapPinIcon, PhoneCall } from "lucide-react";
import {} from "react-icons/fa";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    { linkName: "Conference", path: "/conference" },
    { linkName: "Tracks", path: "/tracks" },
    { linkName: "International Advisory", path: "/international-advisory" },
    { linkName: "National Advisory", path: "/national-advisory" },
  ];
  const quickLinks = [
    { linkName: "About SEC", path: "/institution" },
    { linkName: "About SCoFT", path: "/department" },
    { linkName: "Travel & Visa", path: "/travels" },
    { linkName: "Contact Us", path: "/contact" },
  ];
  const contacts = [
    {
      linkName: "Instagram",
      Logo: FaInstagram,
      path: "https://www.instagram.com/saveethaengineeringcollege/",
    },
    {
      linkName: "LinkedIn",
      Logo: FaLinkedin,
      path: "https://www.linkedin.com/school/saveetha-engineering-college",
    },
    {
      linkName: "X",
      Logo: FaXTwitter,
      path: "https://twitter.com/SaveethaSEC",
    },
    {
      linkName: "YouTube",
      Logo: FaYoutube,
      path: "https://www.youtube.com/@saveethaengineeringcollege1624",
    },
  ];
  return (
    <footer className="bg-black w-full flex justify-between p-10">
      <div className="lg:flex grid grid-cols-1 xs:grid-cols-2 w-full gap-10 justify-start">
        <div className="lg:w-1/4 w-full flex flex-col gap-3">
          <p className="font-bold text-yellow-600 text-2xl">Venue</p>
          <div className="flex flex-col gap-4 text-white lato-regular">
            <div className="flex gap-3 items-center ">
              <div className="flex items-center justify-center">
                <MapPinIcon className="h-4 w-4" />
              </div>{" "}
              Saveetha Engineering College, Thandalam, Chennai - 602105,
              Tamilnadu, India
            </div>
            <p className="flex gap-3 items-center ">
              <PhoneCall className="h-4 w-4" /> +91 8939902737
            </p>
            <p className="flex gap-3 items-center ">
              <Globe className="h-4 w-4" />{" "}
              <a href="https://saveetha.ac.in/">saveetha.ac.in</a>
            </p>
          </div>
        </div>
        <div className="lg:w-1/4 w-full flex flex-col gap-3 text-white">
          <p className="font-bold text-yellow-600 text-2xl">Links</p>
          <div className="flex flex-col gap-3 lato-regular">
            {links.map((val) => {
              return (
                <div className="flex gap-3 items-center" key={val.linkName}>
                  <Link to={val.path} className="flex gap-3 items-center">
                    {val.linkName}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/4 w-full flex flex-col gap-3">
          <p className="font-bold text-yellow-600 text-2xl">Quick Links</p>
          <div className="flex flex-col gap-3 text-white lato-regular">
            {quickLinks.map((val) => {
              return (
                <div className="flex gap-3 items-center" key={val.linkName}>
                  <Link to={val.path} className="flex gap-3 items-center">
                    {val.linkName}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/4 w-full flex flex-col gap-3 text-white lato-regular">
          <p className="font-bold text-yellow-600 text-2xl">
            Contacts and Socials
          </p>
          <div className="flex flex-col gap-5">
            <a href="mailto:conference@saveetha.ac.in">
              conference@saveetha.ac.in
            </a>
            <div className="grid grid-cols-4 gap-3">
              {contacts.map((obj) => {
                const Logo = obj.Logo;
                return (
                  <div key={obj.linkName}>
                    <a href={obj.path}>
                      {typeof Logo === "string" ? (
                        <img
                          src={obj.Logo}
                          alt={obj.linkName}
                          className="bg-white h-10 w-10"
                        />
                      ) : (
                        <Logo className="h-6 w-6" />
                      )}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
