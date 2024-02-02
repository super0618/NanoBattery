import TwitterIcon from "../assets/images/twitter.svg";
import InstagramIcon from "../assets/images/instagram.svg";
import LinkedinIcon from "../assets/images/linkedin.svg";
import FacebookIcon from "../assets/images/facebook.svg";
import EmailIcon from "../assets/images/email.svg";

export const menuDList = [
  { title: "Technology", to: "/technology", key: "technology" },
  { title: "Mission", to: "/mission", key: "mission" },
  { title: "Careers", to: "/careers", key: "careers" },
  { title: "FAQ", to: "/faq", key: "faq" },
];
export const menuList = [
  { title: "Home", to: "/" },
  { title: "Technology", to: "/technology" },
  { title: "Mission", to: "/mission" },
  { title: "Careers", to: "/careers" },
  { title: "FAQ", to: "/faq" },
];
export const linkList = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/company/nanodiamondbattery",
    img: (
      <img src={LinkedinIcon} alt="icon" className=" h-select-none h-[17px]" />
    ),
  },
  {
    title: "Twitter",
    link: "https://twitter.com/nanodbattery",
    img: (
      <img src={TwitterIcon} alt="icon" className=" h-select-none h-[17px]" />
    ),
  },
    {
    title: "Instagram",
    link: "https://www.instagram.com/nanodbattery",
    img: (
      <img src={InstagramIcon} alt="icon" className=" h-select-none h-[17px]" />
    ),
  },
  {
    title: "Facebook",
    link: "https://facebook.com/nanodiamondbattery",
    img: (
      <img src={FacebookIcon} alt="icon" className=" h-select-none h-[17px]" />
    ),
  },
  {
    title: "Contact",
    link: "https://api.ndb.technology/widget/form/YMVYyrCTzUwUk8eULfQu",
    img: <img src={EmailIcon} alt="icon" className=" h-select-none h-[17px]" />,
  },
];
