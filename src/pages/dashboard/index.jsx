import { useEffect, useState, useRef } from "react";
import AOS from "aos";

import Button from "@mui/material/Button";

import hero_background from "../../assets/video/nanodiamondbattery1.webm";
import ndb_generate_background from "../../assets/video/nanodiamondbattery2.webm";
import technology_background from "../../assets/video/nanodiamondbattery3.webm";
import early_background from "../../assets/video/nanodiamondbattery4.webm";
import mission_Background from "../../assets/video/nanodiamondbattery5.webm";

import hero_background_img from "../../assets/images/nanoImage_01.svg";
import ndb_generate_background_img from "../../assets/images/nanoImage_02.svg";
import technology_background_img from "../../assets/images/nanoImage_03.svg";
import early_background_img from "../../assets/images/nanoImage_04.svg";
import mission_Background_img from "../../assets/images/nanoImage_05.svg";

const Dashboard = () => {
  const divRef = useRef();
  const changeRef = useRef();
  const videoRef = useRef();
  const buttonRef = useRef();
  const varRef = useRef();
  const [radioNano, setRadioNano] = useState("nano-phone");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    AOS.init();
  }, []);

  const handleScroll = () => {
    const height = window.innerHeight;
    const position = window.pageYOffset;
    let header = 128;
    if (window.innerWidth - 1241 < 0) {
      header = 112;
    }
    if (window.innerWidth - 856 < 0) {
      header = 96;
    }
    if (window.innerWidth - 531 < 0) {
      header = 84;
    }
    if (divRef.current.offsetTop - position < height) {
      videoRef.current.style.width = "50%";
    }
    if (divRef.current.offsetTop - position < height / 2) {
      videoRef.current.style.width = "100%";
    } else {
      let result =
        50 + (100 * (height - divRef.current.offsetTop + position)) / height;
      videoRef.current.style.width = result + "%";
    }

    if (
      position + header - divRef.current.offsetTop <=
      (videoRef.current.clientHeight - divRef.current.clientHeight) / 2 + header
    ) {
      let result = position - divRef.current.offsetTop + header;
      changeRef.current.style.top = result + "px";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="flex w-full flex-col">
      {/* hero section */}
      <div className=" relative w-full h-[calc(100vh-84px)] phone:h-[calc(100vh-96px)] table:h-[calc(100vh-112px)] display:h-[calc(100vh-128px)]">
        <video
          autoPlay
          loop
          muted
          src={hero_background}
          poster={hero_background_img}
          className="object-cover object-center absolute top-0 left-0 w-full h-full p-0"
        ></video>
        <div className="  m-auto h-full max-w-[1728px] items-center justify-start flex p-[64px] phone:px-[75px] phone:py-[64px] table:px-[150px] table:py-[128px] display:px-[300px] display:py-[256px] ">
          <div className="left-0 top-0 flex w-full flex-col items-start gap-[16px] phone:gap-[32px] table:gap-[48px] display:gap-[64px]">
            <p
              className=" text-p-72-30 text-[#FFF]"
              data-aos="zoom-in"
              data-aos-offset="10"
              data-aos-easing="linear"
              data-aos-duration="650"
              data-aos-anchor-placement="bottom-bottom"
            >
              Transforming nuclear waste into
              <br /> never-recharge
              <br /> cell phones and watches
            </p>
            <a href="/technology">
            <Button
              variant="contained"
              className="button-30-14-1 !bg-white/10 hover:!bg-white/25"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Read more
            </Button>
            </a>
          </div>
        </div>
      </div>
      {/* NDB Generate section */}
      <div className="w-full bg-white h-[calc(100vh-84px)] table:h-[120vh] ">
        <div className=" m-auto max-w-[1728px] h-full p-[24px] phone:p-[32px] table:p-[64px] display:p-[86px]">
          <div className=" h-full relative flex items-start justify-end bg-cover bg-center px-[36px] py-[72px]  phone:p-[72px] table:p-[92px] display:p-[128px] left-0 top-0 w-full flex-col  gap-[16px] phone:gap-[32px] table:gap-[48px] display:gap-[64px]">
            <video
              autoPlay
              loop
              muted
              src={ndb_generate_background}
              poster={ndb_generate_background_img}
              className="object-cover object-center absolute top-0 left-0 w-full h-full p-0"
            ></video>
            <div className="flex flex-col">
              <p
                className="text-p-72-30 text-[#FFF] text-[30px]"
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-easing="linear"
                data-aos-duration="650"
                data-aos-anchor-placement="bottom-bottom"
              >
                NDB generates electricity similar <br />
                to a solar cell
              </p>
              <p
                className=" text-p-60-24 w-full text-[24px] text-[#A0A0A0] !font-[nanoLightFont]"
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              >
                But using radiation from decay
                <br /> instead of sunlight
              </p>
            </div>
            <a href="/technology">
            <Button
              variant="contained"
              className=" button-30-14-1 !bg-white/10 hover:!bg-white/25"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Learn more
            </Button>
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full">
        <div className="w-full bg-transparent sticky top-[84px] phone:top-[96px] table:top-[112px] display:top-[128px]">
          <div className=" m-auto max-w-[1728px]">
            <div
              ref={varRef}
              className=" relative flex items-center justify-start px-[72px] py-[72px] phone:py-[136px] phone:px-[136px] table:py-[196px] table:px-[186px] display:py-[256px] display:px-[340px]"
            >
              <div className="left-0 top-0 flex w-full flex-col items-start justify-start table:justify-center gap-[16px] phone:gap-[32px] table:gap-[48px] display:gap-[64px]">
                <div className="flex flex-col gap-4 phone:gap-8">
                  <p className=" text-p-72-30 text-[30px] text-[#000]">
                    Our Technology
                  </p>
                  <p className="  !font-[nanoLightFont] text-[#141414] self-stretch text-[18px] font-light leading-[28px] phone:text-[24px] phone:leading-[32px] table:text-[30px] table:leading-[36px] display:text-[36px] display:leading-[40px]">
                    Incorporating a spherical Silicon Carbide (SiC)
                    semiconductor into cell design provides unique opportunities
                    for optimizing energy conversion and enhancing the
                    cell&apos;s durability. This innovative form factor
                    represents a significant evolution from traditional
                    flat-surface semiconductor wafers.
                  </p>
                </div>
                <a href="/technology">
                <Button
                  variant="contained"
                  className=" button-30-14-2 !bg-black !text-white"
                  ref={buttonRef}
                >
                  Learn more
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-max relative overflow-hidden" ref={divRef}>
          <div
            className="w-full flex flex-col absolute z-10 top-[-300px]"
            ref={changeRef}
          >
            <div className=" m-auto max-w-[1728px]">
              <div className=" relative flex items-center justify-start px-[72px] py-[72px] phone:py-[136px] phone:px-[136px] table:py-[196px] table:px-[186px] display:py-[256px] display:px-[340px]">
                <div className="left-0 top-0 flex w-full flex-col items-start justify-start table:justify-center gap-[16px] phone:gap-[32px] table:gap-[48px] display:gap-[64px]">
                  <div className="flex flex-col gap-4 phone:gap-8">
                    <p className=" text-p-72-30 text-[30px] text-[#FFF]">
                      Our Technology
                    </p>
                    <p className="  !font-[nanoLightFont] text-[#FFF] self-stretch text-[18px] font-light leading-[28px] phone:text-[24px] phone:leading-[32px] table:text-[30px] table:leading-[36px] display:text-[36px] display:leading-[40px]">
                      Incorporating a spherical Silicon Carbide (SiC)
                      semiconductor into cell design provides unique
                      opportunities for optimizing energy conversion and
                      enhancing the cell&apos;s durability. This innovative form
                      factor represents a significant evolution from traditional
                      flat-surface semiconductor wafers.
                    </p>
                  </div>
                  <a href="/technology">
                  <Button
                    variant="contained"
                    className=" button-30-14-2 !bg-white !text-black"
                  >
                    Learn more
                  </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full items-center justify-center object-center text-center">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              src={technology_background}
              poster={technology_background_img}
              className=" m-auto object-cover object-center w-full h-[calc(100vh-84px)] phone:h-[100vh] table:h-[120vh] relative p-0"
            ></video>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex shrink-0 flex-col items-center self-stretch py-[24px] phone:gap-[10px] phone:py-[46px] table:py-[66px] display:py-[86px]">
            <div className=" flex-between item-start flex flex-col gap-[72px] self-stretch bg-[#FAFAFA] p-[72px] phone:gap-[32px] phone:p-[70px] table:p-[68px] display:p-[64px]">
              <div className="phone:[7px] flex items-center justify-center gap-[6px] self-stretch table:gap-[8px] display:gap-[10px] ">
                <p className=" flex-1 text-[18px] leading-[28px] text-black phone:text-[24px] phone:leading-[32px] table:text-[30px] table:leading-[36px] display:text-[36px] display:leading-[40px] !font-[nanoMediumFont]">
                  NANO Products
                </p>
                <div className="flex h-[6px] w-[6px] flex-col items-center rounded-[500px] bg-mainColor p- phone:h-[8px] phone:w-[8px] table:h-[12px] table:w-[12px] display:h-[12px] display:w-[12px]"></div>
                <p className="text-[18px] !font-[nanoLightFont] leading-[20px] text-black underline phone:text-[22px] phone:leading-[25px] table:text-[30px] table:leading-[36px] display:text-[30px] display:leading-[36px]">
                  Reserve
                </p>
              </div>
              <div className="hidden items-center justify-between self-stretch table:flex gap-[10px]">
                <div
                  className={`flex display:flex-1 flex-col items-start justify-center gap-[32px] self-stretch `}
                >
                  <div
                    className=" item-center flex display:gap-[32px] gap-[calc(1px+(100vw-870px)*50/870)] hover:cursor-pointer"
                    onClick={() => {
                      setRadioNano("nano-phone");
                    }}
                  >
                    <div
                      className={`flex h-[32px] w-[32px] flex-col items-center gap-[10px] rounded-[500px] p-[10px] bg-transparent ${
                        radioNano === "nano-phone" ? " !bg-mainColor" : ""
                      }`}
                    ></div>
                    <p
                      className={`text-[#A0A0A0] text-p-36-18-400 !font-[nanoRegularFont] ${
                        radioNano === "nano-phone" ? " !text-black" : ""
                      }`}
                    >
                      NANO Phone
                    </p>
                  </div>
                  <div
                    className=" item-center flex display:gap-[32px] gap-[calc(1px+(100vw-870px)*50/870)] hover:cursor-pointer"
                    onClick={() => {
                      setRadioNano("nano-watch");
                    }}
                  >
                    <div
                      className={`flex h-[32px] w-[32px] flex-col items-center gap-[10px] rounded-[500px] p-[10px] bg-transparent ${
                        radioNano === "nano-watch" ? " !bg-mainColor" : ""
                      }`}
                    ></div>
                    <p
                      className={`text-[#A0A0A0] text-p-36-18-400 !font-[nanoRegularFont] ${
                        radioNano === "nano-watch" ? " !text-black" : ""
                      }`}
                    >
                      NANO Watch
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col items-center justify-center gap-[64px]">
                  <div className="flex flex-col items-center justify-center gap-[32px] self-stretch">
                    <div className=" flex w-[535px] h-[448px] flex-col items-center justify-center gap-[10px] self-stretch bg-mainColor p-[10px]">
                      <p className=" text-[36px] font-medium leading-[40px] text-[#FFF]">
                        Coming Soon
                      </p>
                    </div>
                    <div className=" flex-start flex gap-[32px] self-stretch">
                      <div className=" flex h-[4px] flex-1 items-start rounded-[100px] bg-mainColor"></div>
                      <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                      <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    </div>
                  </div>
                  <a href="/technology">
                  <Button
                    variant="contained"
                    className="button-30-14-3 !text-white !bg-black"
                  >
                    Learn more
                  </Button>
                  </a>
                </div>
                <div className=" flex flex-1 flex-col items-center justify-center gap-[80px] self-stretch"></div>
              </div>
              <div className=" flex flex-col items-center justify-center gap-[32px] self-stretch table:hidden">
                <div className="flex flex-col items-center gap-[6px] self-stretch">
                  <div
                    className=" flex items-center gap-[12px] hover:cursor-pointer"
                    onClick={() => {
                      setRadioNano("nano-phone");
                    }}
                  >
                    <div
                      className={`flex h-[16px] w-[16px] flex-col items-center gap-[10px] rounded-[500px] bg-transparent p-[10px] ${
                        radioNano === "nano-phone" ? " !bg-mainColor" : ""
                      }`}
                    ></div>
                    <p
                      className={`text-p-36-18-400 text-[#A0A0A0] ${
                        radioNano === "nano-phone" ? " !text-black" : ""
                      }`}
                    >
                      NANO Phone
                    </p>
                  </div>
                  <div
                    className=" flex items-center gap-[12px] hover:cursor-pointer"
                    onClick={() => {
                      setRadioNano("nano-watch");
                    }}
                  >
                    <div
                      className={`flex h-[16px] w-[16px] flex-col items-center gap-[10px] rounded-[500px] bg-transparent p-[10px] ${
                        radioNano === "nano-watch" ? " !bg-mainColor" : ""
                      }`}
                    ></div>
                    <p
                      className={`text-p-36-18-400 text-[#A0A0A0] ${
                        radioNano === "nano-watch" ? " !text-black" : ""
                      }`}
                    >
                      NANO Watch
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[32px] self-stretch relative">
                  <div className=" flex table:h-[448px] flex-col gap-[10px] self-stretch bg-mainColor p-[10px] top-0 bottom-0 left-0 right-0 leading-[100%] h-[calc(100vw-144px)] phone:h-[calc(100vw-140px)] text-center items-center justify-center">
                    <p className=" text-[36px] font-medium leading-[40px] text-[#FFF] !font-[nanoMediumFont]">
                      Coming Soon
                    </p>
                  </div>
                  <div className=" flex-start flex gap-[32px] self-stretch">
                    <div className=" flex h-[4px] flex-1 items-start rounded-[100px] bg-mainColor"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                  </div>
                </div>
                <a href="/technology">
                <Button
                  variant="contained"
                  className="button-30-14-4 !bg-black !text-white"
                >
                  Learn more
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px] px-[24px] pb-[24px] pt-0 phone:p-[44px] table:p-[64px] display:p-[86px]">
          <div className=" relative flex flex-col items-start gap-[64px] self-stretch bg-cover bg-center px-[72px] py-[64px] phone:p-[72px] table:p-[96px] display:p-[128px]">
            <video
              autoPlay
              loop
              muted
              src={early_background}
              poster={early_background_img}
              className="object-cover object-center absolute top-0 left-0 w-full h-full p-0"
            ></video>
            <p
              className="p-0 font-mainFont text-[18px] font-light leading-[28px] text-[#FFF] phone:text-[24px] phone:leading-[32px] table:pb-[32px] table:text-[30px] table:leading-[36px] display:pb-[64px] display:text-[36px] display:leading-[40px] "
              data-aos="fade-down"
              data-aos-offset="70"
              data-aos-easing="linear"
              data-aos-duration="550"
            >
              Investments
            </p>
            <div className="flex flex-col items-start justify-center self-stretch ">
              <p
                className=" text-p-72-30 text-[30px] text-[#FFF]"
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-easing="linear"
                data-aos-duration="650"
                data-aos-anchor-placement="bottom-bottom"
              >
                For early investors
                <span>it could be lead to exciting times</span>
              </p>
              <p
                className="  !font-[nanoLightFont] w-full text-[30px] !font-light leading-[36px] text-[#A0A0A0] phone:text-[40px] phone:leading-[44px] table:text-[50px] table:leading-[52px] display:text-[60px]  display:leading-[60px]"
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              >
                Whatever the future holds, this is just the beginning of an
                exciting new technology.
              </p>
            </div>
            <Button
              variant="contained"
              className="button-30-14-1 !bg-white/5 hover:!bg-white/15 !text-white"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Invest now
            </Button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" relative mb-[32px] w-full bg-cover bg-center phone:mb-[55px] table:mb-[70px] display:mb-[86px] display:h-[calc(95vh-128px)] table:h-[calc(90vh-128px)] phone:h-[calc(80vh-128px)]">
        <video
          autoPlay
          loop
          muted
          src={mission_Background}
          poster={mission_Background_img}
          className="object-cover object-center absolute top-0 left-0 w-full h-full p-0"
        ></video>
        <div className="h-full m-auto max-w-[1728px]">
          <div className=" h-full flex flex-col items-start justify-between gap-[128px] self-stretch p-[64px]">
            <div className=" flex items-center gap-[10px] self-stretch">
              <p
                className="text-p-36-18 text-[#FFF] !font-[nanoLightFont]"
                data-aos="fade-down"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              >
                Sustainability
              </p>
            </div>
            <div className="flex flex-col items-start justify-center self-stretch">
              <p
                className=" text-p-72-30 text-[30px] text-[#FFF]"
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-easing="linear"
                data-aos-duration="650"
                data-aos-anchor-placement="bottom-bottom"
              >
                Our mission extends beyond mere words
              </p>
              <p
                className="!font-[nanoLightFont] w-full text-[30px] !font-light leading-[36px] text-[#A0A0A0] phone:text-[40px] phone:leading-[44px] table:text-[50px] table:leading-[52px] display:text-[60px]  display:leading-[60px]"
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              >
                We are determined to protect our environment
              </p>
            </div>
            <a href="/mission">
            <Button
              variant="contained"
              className=" button-30-14-1 !bg-white/10 hover:!bg-white/25 !text-white"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Learn more
            </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
