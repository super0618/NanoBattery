/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

import Button from "@mui/material/Button";

import pageCareersHeader from "../../assets/video/nanodiamondbattery14.webm";
import careerBg_1 from "../../assets/video/nanodiamondbattery15.webm";

import pageCareersHeader_img from "../../assets/images/nanoImage_14.svg";
import careerBg_1_img from "../../assets/images/nanoImage_15.svg";

const Careers = () => {
  const [scrollPosition, setScrollPosition] = useState(-272);
  const [, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    AOS.init();
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    setScrollPosition(-272);
    if (window.innerWidth - 1241 <= 0) {
      setScrollPosition(-216);
    }
    if (window.innerWidth - 856 <= 0) {
      setScrollPosition(-182);
    }
    if (window.innerWidth - 531 <= 0) {
      setScrollPosition(-162);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="flex w-full flex-col">
      <div className="w-full bg-cover bg-center mt-[-1px] relative">
        <video
          autoPlay
          loop
          muted
          src={pageCareersHeader}
          poster={pageCareersHeader_img}
          className="object-cover object-center absolute top-0 left-0 w-full h-full p-0"
        ></video>
        <div className=" display:px-[300px] display:py-[256px] table:px-[224px] table:py-[198px] phone:px-[148px] phone:py-[120px] px-[72px] py-[32px]">
          <div className=" items-start self-stretch flex flex-col gap-[32px] phone:gap-[42px] table:gap-[52px] display:gap-[64px] display:py-[128px] table:py-[99px] phone:py-[60px] py-[16px]">
            <p
              className=" text-p-72-30 text-[#FFF]"
              data-aos="zoom-in"
              data-aos-offset="10"
              data-aos-easing="linear"
              data-aos-duration="650"
              data-aos-anchor-placement="bottom-bottom"
            >
              Working at NDB is the occasion that you can’t miss.
            </p>
            <a href="/mission">
            <Button
              variant="contained"
              className="button-30-14-1 !bg-white/10 hover:!bg-white/25 w-auto"
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
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex flex-col table:flex-row items-center justify-start display:px-[172px] display:py-[128px] table:px-[132px] table:py-[108px] phone:px-[102px] phone:py-[90px] px-[72px] py-[72px] display:gap-[200px] table:gap-[20px] phone:gap-[64px] gap-[32px]">
            <div className="flex flex-col justify-center items-start gap-[32px] flex-1">
              <p
                className="text-[#000] text-p-72-30"
                data-aos="fade-down"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              >
                Mission-driven
              </p>
              <div className="flex-1 flex flex-col justify-between gap-[28px]">
                <p
                  className=" text-p-60-24 text-[#141414] !font-[nanoLightFont]"
                  data-aos="zoom-in"
                  data-aos-offset="10"
                  data-aos-easing="linear"
                  data-aos-duration="650"
                >
                  Our mission is to build the world&apos;s first NDB powered
                  products, enabling a future with clean electricity.
                </p>
                <p
                  className="text-p-36-18 text-[#141414] !font-[nanoLightFont]"
                  data-aos="fade-up"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  We believe we can make a tangible impact in our fight against
                  climate change, while making electricity abundant for
                  everyone.
                  <br />
                  <br />
                  At NANO, every team member contributes to building a world
                  where carbon-free electricity costs are low, raising the
                  standard of living for every person on the planet.
                </p>
              </div>
            </div>
            <div className=" w-full flex table:flex-col flex-row justify-center items-start gap-[32px] display:w-[363px] table:w-[180px]">
              <div className=" table:hidden block flex-1 pt-[calc(50%-16px)] relative">
                <div
                  className="display:h-[314px] flex w-full bg-cover bg-center absolute leading-[100%] h-full top-0 left-0 right-0 bottom-0"
                  style={{
                    backgroundImage:
                      "url('https://storage.googleapis.com/nano-diamond-battery/technology-engineer.jpg')",
                  }}
                  data-aos="fade-up"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                ></div>
              </div>
              <div className=" table:hidden block flex-1 pt-[calc(50%-16px)] relative">
                <div
                  className="display:h-[314px] flex w-full bg-cover bg-center absolute leading-[100%] h-full top-0 left-0 right-0 bottom-0"
                  style={{
                    backgroundImage:
                      "url('https://storage.googleapis.com/nano-diamond-battery/robotics-engineer-fitting-sensors-to-traditional-e.jpg')",
                  }}
                  data-aos="fade-up"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                ></div>
              </div>
              <div
                className="hidden table:block w-full h-[314px] bg-cover bg-center "
                style={{
                  backgroundImage:
                    "url('https://storage.googleapis.com/nano-diamond-battery/technology-engineer.jpg')",
                }}
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              ></div>
              <div
                className="hidden table:block w-full h-[314px] bg-cover bg-center "
                style={{
                  backgroundImage:
                    "url('https://storage.googleapis.com/nano-diamond-battery/robotics-engineer-fitting-sensors-to-traditional-e.jpg')",
                }}
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px] display:px-[86px] table:px-[81px] phone:px-[76px] px-[72px] display:pb-[86px] table:pb-[81px] phone:pb-[76px] pb-[72px]">
          <div className="flex flex-col relative items-center gap-[32px] self-stretch display:p-[128px] table:p-[64px] phone:p-[32px] py-[128px] px-0 bg-cover bg-center">
            <video
              autoPlay
              loop
              muted
              src={careerBg_1}
              poster={careerBg_1_img}
              className="object-cover object-center absolute top-0 left-0 w-full h-full p-0"
            ></video>
            <div className=" hidden phone:flex flex-col items-start display:gap-[64px] table:gap-[32px] phone:gap-[16px] display:pt-[382px] table:pt-[161px] phone:pt-[82px]">
              <div className=" flex flex-col">
                <p
                  className="text-[#FFF] text-p-72-30"
                  data-aos="zoom-in"
                  data-aos-offset="10"
                  data-aos-easing="linear"
                  data-aos-duration="650"
                >
                  Values-oriented
                </p>
                <p
                  className=" text-[#A0A0A0] text-p-60-24 !font-[nanoLightFont]"
                  data-aos="fade-up"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  We embrace a set of core values that guide every decision we
                  make and every challenge we pursue.
                </p>
              </div>
              <Button
                className="!normal-case button-30-14-1 !bg-white/20 hover:!bg-white/25 w-auto !text-white"
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Apply now
              </Button>
            </div>
            <p
              className="phone:hidden absolute top-0 text-[#A0A0A0] text-[30px] font-light leading-9"
              data-aos="fade-down"
              data-aos-offset="70"
              data-aos-easing="linear"
              data-aos-duration="550"
            >
              we pursue
            </p>
            <Button
              className="!normal-case phone:!hidden top-[calc(50%-30px)] left-[calc(-64px+25vw)] !px-[64px] !py-[12px] items-start !rounded-[200px] !bg-white/20 hover:!bg-white/25 w-max !text-white !text-[30px] !font-normal !leading-[36px]"
              data-aos="fade-up"
              data-aos-offset="20"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              Apply now
            </Button>
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className="w-full">
        <div className="w-full border-t-2 border-t-black bg-white sticky top-[84px] phone:top-[96px] table:top-[112px] display:top-[128px] z-40">
          <div className=" m-auto max-w-[1728px]">
            <div className="scrollMenu item-start flex self-stretch px-[24px] py-[12px] phone:px-[46px] phone:py-[18px] table:px-[66px] table:py-[24px] gap-[8px] display:px-[86px] display:py-[32px] justify-between">
              <Link
                activeClass="active"
                smooth
                spy
                offset={scrollPosition}
                to="01"
                className="tech-menu"
              >
                <div className="flex items-center gap-[8px]">
                  <div className="flex flex-col items-start self-stretch gap-[8px]">
                    <div className="flex flex-1 items-center gap-[10px]">
                      <div className="selection flex h-[6px] w-[6px] flex-col items-center justify-center rounded-[500px] phone:h-[9px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                    </div>
                    <div className=" flex flex-[2] flex-col items-center"></div>
                  </div>
                  <div className="justify-content flex flex-col items-start gap-[8px] ">
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      01
                    </p>
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      Benefits
                      <br />
                      package
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                activeClass="active"
                smooth
                spy
                offset={scrollPosition}
                to="02"
                className="tech-menu"
              >
                <div className=" flex  items-center gap-[8px]">
                  <div className=" flex flex-col items-start self-stretch gap-[8px]">
                    <div className="flex flex-1 items-center gap-[10px]">
                      <div className="selection flex h-[6px] w-[6px] flex-col items-center justify-center rounded-[500px] phone:h-[9px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                    </div>
                    <div className=" flex flex-[2] flex-col items-center"></div>
                  </div>
                  <div className="justify-content flex flex-col items-start gap-[8px] ">
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      02
                    </p>
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      Extended <br />
                      Family leave
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                activeClass="active"
                smooth
                spy
                offset={scrollPosition}
                to="03"
                className="tech-menu"
              >
                <div className=" flex  items-center gap-[8px]">
                  <div className=" flex flex-col items-start self-stretch gap-[8px]">
                    <div className="flex flex-1 items-center gap-[10px]">
                      <div className="selection flex h-[6px] w-[6px] flex-col items-center justify-center rounded-[500px] phone:h-[9px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                    </div>
                    <div className=" flex flex-[2] flex-col items-center"></div>
                  </div>
                  <div className="justify-content flex flex-col items-start gap-[8px] ">
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      03
                    </p>
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      Equity for <br />
                      employee
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                activeClass="active"
                smooth
                spy
                offset={scrollPosition}
                to="04"
                className="tech-menu"
              >
                <div className=" flex  items-center gap-[8px]">
                  <div className=" flex flex-col items-start self-stretch gap-[8px]">
                    <div className="flex flex-1 items-center gap-[10px]">
                      <div className="selection flex h-[6px] w-[6px] flex-col items-center justify-center rounded-[500px] phone:h-[9px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                    </div>
                    <div className=" flex flex-[2] flex-col items-center"></div>
                  </div>
                  <div className="justify-content flex flex-col items-start gap-[8px] ">
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      04
                    </p>
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      Competitive
                      <br />
                      compensation
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                activeClass="active"
                smooth
                spy
                offset={scrollPosition}
                to="05"
                className="tech-menu"
              >
                <div className=" flex flex-1 items-center gap-[8px]">
                  <div className=" flex flex-col items-start self-stretch gap-[8px]">
                    <div className="flex flex-1 items-center gap-[10px]">
                      <div className="selection flex h-[6px] w-[6px] flex-col items-center justify-center rounded-[500px] phone:h-[9px] phone:w-[9px] table:h-[12px] table:w-[12px] display:h-[16px] display:w-[16px]"></div>
                    </div>
                    <div className=" flex flex-[2] flex-col items-center"></div>
                  </div>
                  <div className="justify-content flex flex-col items-start gap-[8px]">
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      05
                    </p>
                    <p className="text-p-30-12 text-[12px] text-[#A0A0A0] !font-[nanoLightFont]">
                      Work-life <br />
                      balance
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* 01 */}
        <div className="w-full bg-white" id="01">
          <div className=" m-auto max-w-[1728px]">
            <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[64px] display:px-[86px]">
              <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
                <p
                  className="text-[#141414] text-p-128-72 text-[72px]"
                  data-aos="fade-right"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  01
                </p>
                <div className="flex flex-col items-start justify-center gap-[32px]">
                  <p
                    className=" text-[#141414] text-p-72-30 self-stretch text-[30px]"
                    data-aos="fade-down"
                    data-aos-offset="70"
                    data-aos-easing="linear"
                    data-aos-duration="550"
                  >
                    Benefits package
                  </p>
                  <p
                    className=" text-[#141414] text-p-36-18 self-stretch text-[18px] !font-[nanoLightFont]"
                    data-aos="zoom-in"
                    data-aos-offset="10"
                    data-aos-easing="linear"
                    data-aos-duration="650"
                  >
                    We offer a generous benefits package that covers all
                    employees with top-notch medical, vision, and dental
                    insurance, as well as life, AD&D, and disability benefits.
                  </p>
                </div>
              </div>
              <div
                className="flex h-[287px] w-full bg-cover bg-center phone:h-[457px] table:h-[627px] display:h-[800px]"
                style={{
                  backgroundImage:
                    "url('https://storage.googleapis.com/nano-diamond-battery/calculator-magnifying-glass-pen-and-alarm-clock.jpg')",
                }}
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              ></div>
              <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
            </div>
          </div>
        </div>
        {/* 02 */}
        <div className="w-full bg-white" id="02">
          <div className=" m-auto max-w-[1728px]">
            <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[64px] display:px-[86px]">
              <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
                <p
                  className="text-[#141414] text-p-128-72 text-[72px]"
                  data-aos="fade-right"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  02
                </p>
                <div className="flex flex-col items-start justify-center gap-[32px]">
                  <p
                    className=" text-[#141414] text-p-72-30 self-stretch text-[30px]"
                    data-aos="fade-down"
                    data-aos-offset="70"
                    data-aos-easing="linear"
                    data-aos-duration="550"
                  >
                    Extended family leave
                  </p>
                  <p
                    className=" text-[#141414] text-p-36-18 self-stretch text-[18px] !font-[nanoLightFont]"
                    data-aos="zoom-in"
                    data-aos-offset="10"
                    data-aos-easing="linear"
                    data-aos-duration="650"
                  >
                    We support your family and medical needs with up to 16 weeks
                    of paid leave, including 12 weeks of PFML matching and 4+
                    weeks of extra bonding and care leave. We also cover up to
                    $6,000 per child for adoption and fostering expenses.
                  </p>
                </div>
              </div>
              <div
                className="flex h-[287px] w-full bg-cover bg-center phone:h-[457px] table:h-[627px] display:h-[800px]"
                style={{
                  backgroundImage:
                    "url('https://storage.googleapis.com/nano-diamond-battery/airline-employee-assisting-family-with-baggage-car.jpg')",
                }}
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              ></div>
              <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
            </div>
          </div>
        </div>
        {/* 03 */}
        <div className="w-full bg-white" id="03">
          <div className=" m-auto max-w-[1728px]">
            <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[64px] display:px-[86px]">
              <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
                <p
                  className="text-[#141414] text-p-128-72 text-[72px]"
                  data-aos="fade-right"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  03
                </p>
                <div className="flex flex-col items-start justify-center gap-[32px]">
                  <p
                    className=" text-[#141414] text-p-72-30 self-stretch text-[30px]"
                    data-aos="fade-down"
                    data-aos-offset="70"
                    data-aos-easing="linear"
                    data-aos-duration="550"
                  >
                    Equity for every employee
                  </p>
                  <p
                    className=" text-[#141414] text-p-36-18 self-stretch text-[18px] !font-[nanoLightFont]"
                    data-aos="zoom-in"
                    data-aos-offset="10"
                    data-aos-easing="linear"
                    data-aos-duration="650"
                  >
                    We reward our team members with NANO stock options, which
                    are exclusive to our company. This means you can have a
                    stake in NANO and share in our success.
                  </p>
                </div>
              </div>
              <div
                className="flex h-[287px] w-full bg-cover bg-center phone:h-[457px] table:h-[627px] display:h-[800px]"
                style={{
                  backgroundImage:
                    "url('https://storage.googleapis.com/nano-diamond-battery/online-stock-exchange-team.jpg')",
                }}
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              ></div>
              <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
            </div>
          </div>
        </div>
        {/* 04 */}
        <div className="w-full bg-white" id="04">
          <div className=" m-auto max-w-[1728px]">
            <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[64px] display:px-[86px]">
              <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
                <p
                  className="text-[#141414] text-p-128-72 text-[72px]"
                  data-aos="fade-right"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  04
                </p>
                <div className="flex flex-col items-start justify-center gap-[32px]">
                  <p
                    className=" text-[#141414] text-p-72-30 self-stretch text-[30px]"
                    data-aos="fade-down"
                    data-aos-offset="70"
                    data-aos-easing="linear"
                    data-aos-duration="550"
                  >
                    Competitive compensation
                  </p>
                  <p
                    className=" text-[#141414] text-p-36-18 self-stretch text-[18px] !font-[nanoLightFont]"
                    data-aos="zoom-in"
                    data-aos-offset="10"
                    data-aos-easing="linear"
                    data-aos-duration="650"
                  >
                    We pay our team members well and give them a share in the
                    company. We also contribute up to 4% to their 401(k) plans.
                  </p>
                </div>
              </div>
              <div
                className="flex h-[287px] w-full bg-cover bg-center phone:h-[457px] table:h-[627px] display:h-[800px]"
                style={{
                  backgroundImage:
                    "url('https://storage.googleapis.com/nano-diamond-battery/text-401k-written-on-white-paper.jpg')",
                }}
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              ></div>
              <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
            </div>
          </div>
        </div>
        {/* 05 */}
        <div className="w-full bg-white" id="05">
          <div className=" m-auto max-w-[1728px]">
            <div className="flex flex-col items-center gap-[32px] self-stretch px-[72px] pt-[128px] phone:gap-[42px] phone:px-[78px] table:gap-[52px] table:px-[82px] display:gap-[64px] display:px-[86px]">
              <div className=" flex flex-col items-start gap-[24px] self-stretch table:flex-row table:items-center table:gap-[128px] display:gap-[256px]">
                <p
                  className="text-[#141414] text-p-128-72 text-[72px]"
                  data-aos="fade-right"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  05
                </p>
                <div className="flex flex-col items-start justify-center gap-[32px]">
                  <p
                    className=" text-[#141414] text-p-72-30 self-stretch text-[30px]"
                    data-aos="fade-down"
                    data-aos-offset="70"
                    data-aos-easing="linear"
                    data-aos-duration="550"
                  >
                    Work-life balance
                  </p>
                  <p
                    className=" text-[#141414] text-p-36-18 self-stretch text-[18px] !font-[nanoLightFont]"
                    data-aos="zoom-in"
                    data-aos-offset="10"
                    data-aos-easing="linear"
                    data-aos-duration="650"
                  >
                    We value your work-life balance and offer you 21 vacation
                    days, 10 sick days, 10 holidays, and a winter break (Dec. 24
                    - Jan. 1) to recharge and relax.
                  </p>
                </div>
              </div>
              <div
                className="flex h-[287px] w-full bg-cover bg-center phone:h-[457px] table:h-[627px] display:h-[800px]"
                style={{
                  backgroundImage:
                    "url('https://storage.googleapis.com/nano-diamond-battery/work-life-balance-choices.jpg')",
                }}
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              ></div>
              <div className=" flex h-[1px] items-center gap-[10px] self-stretch border-b-2 border-b-[#000] p-[10px]"></div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        className="w-full bg-white display: table:h-[100vh] h-[750px] bg-cover bg-center mt-[-2px]"
        style={{
          backgroundImage:
            "url('https://storage.googleapis.com/nano-diamond-battery/plasma-ball-dark-background.jpg')",
        }}
      >
        <div className="h-full m-auto max-w-[1728px]">
          <div className="h-full flex display:p-[64px] table:p-[66px] phone:p-[69px] p-[72px] gap-[12px] flex-col justify-between items-start self-stretch ">
            <p
              className="text-p-30-14 text-[#FFF]"
              data-aos="fade-down"
              data-aos-offset="70"
              data-aos-easing="linear"
              data-aos-duration="550"
            >
              Apply
            </p>
            <div className=" flex flex-col gap-[32px] display:pr-[calc(512px-(1782px-100vw)/2)] table:pr-[128px] phone:pr-[32px] p-0">
              <p
                className="text-p-72-30 text-[#FFF]"
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-easing="linear"
                data-aos-duration="650"
                data-aos-anchor-placement="bottom-bottom"
              >
                Join us in our mission
              </p>
              <p
                className="text-p-60-18 text-[#A0A0A0] !font-[nanoLightFont]"
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              >
                We are on a mission to create the world’s first NDB power
                product company and revolutionize clean energy. Join us with
                your talents, insights, and passion. Together, we can make a
                future of unlimited and affordable clean energy possible.
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
              Apply now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
