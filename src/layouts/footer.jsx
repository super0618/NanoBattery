import { useEffect, useState } from "react";
import AOS from "aos";

import { menuList, linkList } from "./menu";

import FooterNanoLogo from "../assets/images/FooterNanoLogo.svg";
import NorthArrow from "../assets/images/gisNorthArrow0.svg";
import crossImg from "../assets/images/cross.svg";

import { FaArrowRightLong } from "react-icons/fa6";

import Button from "@mui/material/Button";

const Footer = () => {
  const [emailDrawerFlag, setEmailDrawerFlag] = useState(
    !JSON.parse(localStorage.getItem("emailDrawer"))
  );
  const [selectionFlag, setSelectionFlag] = useState(
    !JSON.parse(localStorage.getItem("selectionDrawer"))
  );
  const [radioNano, setRadioNano] = useState(true);

  useEffect(() => {
    AOS.init();
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-white ">
      <div className=" m-auto max-w-[1728px]">
        <div className=" hidden flex-col items-start gap-[32px] p-[64px] table:flex">
          <div className="flex items-start gap-[10px] self-stretch">
            <div className=" flex flex-1 flex-col items-start gap-[32px]">
              <p className="!font-[nanoMediumFont] text-[24px] font-medium leading-[32px] text-[#A0A0A0]">
                Menu
              </p>
              <div className="gpa-[10px] flex flex-col items-start">
                {menuList.map((element) => (
                  <a
                    key={element.title}
                    href={element.to}
                    className="!px-0 !font-mainFont !text-[24px] !font-normal !normal-case !leading-9 !text-black"
                  >
                    {element.title}
                  </a>
                ))}
              </div>
            </div>
            <div className=" flex flex-1 flex-col items-start gap-[32px]">
              <p className="!font-[nanoMediumFont] text-[24px] font-medium leading-[32px] text-[#A0A0A0]">
                Legal
              </p>
              <div className="gpa-[10px] flex flex-col items-start">
                {["Terms of Use", "Privacy Policy"].map((text, index) => (
                  <Button
                    key={index}
                    className="!px-0 !font-mainFont !text-[24px] !font-normal !normal-case !leading-9 !text-black"
                  >
                    {text}
                  </Button>
                ))}
              </div>
            </div>
            <div className=" flex flex-1 flex-col items-start gap-[32px]">
              <p className="!font-[nanoMediumFont] text-[24px] font-medium leading-[32px] text-[#A0A0A0]">
                Connect
              </p>
              <div className="gpa-[10px] flex flex-col items-start">
                {linkList.map((element) => (
                  <a
                    key={element.title}
                    target="_blank"
                    href={element.link}
                    rel="noreferrer"
                    className="!px-0 !font-mainFont !text-[24px] !font-normal !normal-case !leading-9 !text-black"
                  >
                    {element.title}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-between self-stretch ">
              <div className=" flex flex-col items-start gap-[32px] self-stretch">
                <p className="!font-[nanoMediumFont] text-[24px] font-medium leading-[32px] text-[#A0A0A0]">
                  Newsletter
                </p>
                <div className="w-full items-start !rounded-[200px] !bg-[#C4C4C4] !px-[32px] !py-[12px] !normal-case relative">
                  <input
                    placeholder="Email Address"
                    className="flex w-full items-center justify-between text-start font-mainFont text-[24px] font-medium leading-[32px] text-[#000] bg-transparent   focus:!outline-none"
                  ></input>
                  <Button className=" !absolute right-0 top-0 h-[100%] !rounded-[200px]">
                    <FaArrowRightLong className="text-[#9ca6b6]" />
                  </Button>
                </div>
              </div>
              <div className=" bottom-0 flex flex-col items-end gap-[10px] self-stretch">
                <img
                  src={FooterNanoLogo}
                  alt="logo"
                  className=" h-select-none h-[64px]"
                />
              </div>
            </div>
          </div>
          <div className=" flex content-end items-end gap-[10px] self-stretch py-[16px]">
            <div className="flex flex-1 items-center ">
              <img
                src={NorthArrow}
                alt="logo"
                className=" h-select-none h-[32px] hover:cursor-pointer"
                onClick={scrollToTop}
              />
            </div>
            <div className="flex flex-1 flex-col items-end justify-center gap-[32px] self-stretch">
              <div className=" flex flex-col content-end gap-[10px] self-stretch">
                <p className="text-end font-mainFont text-[20px] font-normal leading-[28px] text-[#000]">
                  © NANO DIAMOND BATTERY INC.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-[64px] bg-[#FAFAFA] p-[72px] table:hidden">
          <div className=" flex flex-col items-start gap-[32px] self-stretch">
            <div className="w-full items-start !rounded-[200px] !bg-[#C4C4C4] !px-[32px] !py-[12px] !normal-case relative">
              <input
                placeholder="Email Address"
                className="flex w-full items-center justify-between text-start font-mainFont text-[14px] font-medium leading-[20px] text-[#000] bg-transparent   focus:!outline-none"
              ></input>
              <Button className=" !absolute right-0 top-0 h-[100%] !rounded-[200px]">
                <FaArrowRightLong className="text-[#9ca6b6]" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[32px] self-stretch">
            <div className=" flex flex-col items-center gap-[16px] self-stretch">
              <p className=" text-center font-mainFont text-[14px] font-medium leading-[20px] text-[#A0A0A0]">
                Menu
              </p>
              <div className="flex w-full flex-col items-center justify-center gap-[10px]">
                {menuList.map((element) => (
                  <a
                    key={element.title}
                    href={element.to}
                    className=" !w-full !px-0 !font-mainFont !text-[14px] !text-center !font-normal !normal-case !leading-[20px] !text-black"
                  >
                    {element.title}
                  </a>
                ))}
              </div>
            </div>
            <div className=" flex flex-col items-center gap-[16px] self-stretch">
              <p className=" text-center font-mainFont text-[14px] font-medium leading-[20px] text-[#A0A0A0]">
                Legal
              </p>
              <div className=" flex w-full flex-col items-center justify-center gap-[10px]">
                {["Terms of Use", "Privacy Policy"].map((text, index) => (
                  <Button
                    key={index}
                    className=" !w-full !px-0 !font-mainFont !text-[14px] !font-normal !normal-case !leading-[20px] !text-black"
                  >
                    {text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start justify-center gap-[64px] self-stretch">
            <div className=" flex items-start justify-center gap-[24px] self-stretch">
              {linkList.map((element) => (
                <a
                  key={element.title}
                  target="_blank"
                  href={element.link}
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-[10px] px-[2px] py-[3px] hover:cursor-pointer"
                >
                  {element.img}
                </a>
              ))}
            </div>
          </div>
          <div className=" flex flex-col items-start gap-[12px] self-stretch">
            <div className=" bottom-0 flex  flex-col items-center gap-[10px] self-stretch">
              <img
                src={FooterNanoLogo}
                alt="logo"
                className=" h-select-none h-[32px]"
              />
            </div>
            <div className=" flex flex-col content-end items-end gap-[10px] self-stretch">
              <div className=" flex flex-col items-center justify-center gap-[32px] self-stretch">
                <div className="flex flex-col items-center justify-center gap-[10px] self-stretch">
                  <p className="self-stretch text-center font-mainFont text-[12px] font-normal leading-[16px] text-[#000]">
                    © NANO DIAMOND BATTERY INC.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center self-stretch ">
            <img
              src={NorthArrow}
              alt="logo"
              className=" h-select-none h-[32px] hover:cursor-pointer"
              onClick={scrollToTop}
            />
          </div>
        </div>
      </div>
      <div className="table:min-w-[568px] flex-col items-start fixed bottom-0 right-0 z-50">
        <div
          className={`flex w-full flex-col items-start gap-[32px] bg-[#FFF] p-[32px] ${
            emailDrawerFlag ? "block" : "hidden"
          }`}
        >
          <div className=" flex w-full items-start gap-[10px]">
            <div className=" flex flex-1 items-start gap-[10px]">
              <p className=" font-mainFont phone:text-[36px] font-light phone:leading-[40px] text-[20px] leading-[24px] text-[#000]">
                Be the first to know
                <br />
                NANO&apos;s next steps
              </p>
            </div>
            <img
              onClick={() => {
                setEmailDrawerFlag(false);
                localStorage.setItem("emailDrawer", JSON.stringify(true));
              }}
              className=" flex flex-col items-start h-[18px] w-[18px] phone:h-[24px] phone:w-[24px] self-stretch bg-cover bg-center hover:!cursor-pointer"
              src={crossImg}
            ></img>
          </div>
          <div className="flex w-full items-center gap-[16px] phone:py-[12px] p-0">
            <div className="w-full items-start !rounded-[200px] !bg-[#C4C4C4] !px-[32px] !py-[12px] !normal-case relative">
              <input
                placeholder="Email Address"
                className="flex w-full items-center justify-between text-start font-mainFont text-[24px] font-medium leading-[32px] text-[#000] bg-transparent   focus:!outline-none"
              ></input>
              <Button className=" !absolute right-0 top-0 h-[100%] !rounded-[200px]">
                <FaArrowRightLong className="text-[#9ca6b6]" />
              </Button>
            </div>
          </div>
        </div>
        <div
          className={`w-full border-t-1 border-t-solid flex items-start justify-between gap-[32px] self-stretch border border-t-[#000] bg-[#FFF] px-[32px] py-[16px] ${
            selectionFlag ? "block" : "hidden"
          }`}
        >
          <p className="font-mainFont text-[18px] font-light leading-[28px] text-[#000]">
            We use cookies to make things better
          </p>
          <div className="flex phone:flex-row flex-col items-center gap-[12px]">
            <div
              className=" flex items-center gap-[12px] hover:cursor-pointer"
              onClick={() => {
                setRadioNano(true);
                setSelectionFlag(false);
                localStorage.setItem("selectionDrawer", JSON.stringify(true));
              }}
            >
              <div
                className={`flex h-[16px] w-[16px] flex-col items-center gap-[10px] rounded-[500px] bg-[#A0A0A0] p-[10px] ${
                  radioNano === true ? " !bg-mainColor" : ""
                }`}
              ></div>
              <p
                className={`font-mainFont text-[20px] font-normal leading-[28px] text-[#A0A0A0] ${
                  radioNano === "nano-phone" ? " !text-black" : ""
                }`}
              >
                Accept
              </p>
            </div>
            <div
              className=" flex items-center gap-[12px] hover:cursor-pointer"
              onClick={() => {
                setRadioNano(false);
                setSelectionFlag(false);
                localStorage.setItem("selectionDrawer", JSON.stringify(true));
              }}
            >
              <div
                className={`flex h-[16px] w-[16px] flex-col items-center gap-[10px] rounded-[500px] bg-[#A0A0A0] p-[10px] ${
                  radioNano === false ? " !bg-mainColor" : ""
                }`}
              ></div>

              <p
                className={`font-mainFont text-[20px] font-normal leading-[28px] text-[#A0A0A0] ${
                  radioNano === "nano-phone" ? " !text-black" : ""
                }`}
              >
                Decline
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
