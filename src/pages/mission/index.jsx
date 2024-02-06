import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Button from "@mui/material/Button";

import missionBg_1 from "../../assets/video/nanodiamondbattery11.webm";
import missionBg_2 from "../../assets/video/nanodiamondbattery12.webm";
import missionBg_4 from "../../assets/video/nanodiamondbattery13.webm";

import missionBg_1_img from "../../assets/images/nanoImage_11.svg";
import missionBg_2_img from "../../assets/images/nanoImage_12.svg";
import missionBg_4_img from "../../assets/images/nanoImage_13.svg";

const Mission = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    AOS.init();
  }, []);

  return (
    <div className="flex w-full flex-col">
      <div className="w-full bg-white">
        <div className=" flex display:px-[86px] display:py-[128px] table:px-[81px] table:py-[108px]  phone:px-[76px] phone:py-[90px] p-[72px] flex-col items-start self-stretch">
          <p
            className=" text-p-128-48 text-black"
            data-aos="fade-down"
            data-aos-offset="70"
            data-aos-easing="linear"
            data-aos-duration="550"
          >
            Advancing sustainable innovation to achieve a&nbsp;
            <span className="phone:inline-block hidden ">
              decarbonized&nbsp;
            </span>
            <span className="inline-block phone:hidden">decarbon-</span>
            <span className="inline-block phone:hidden">ized&nbsp;</span>
            planet
          </p>
        </div>
      </div>
      {/*  */}
      <video
        autoPlay
        loop
        muted
        src={missionBg_1}
        poster={missionBg_1_img}
        data-aos="fade-up"
        data-aos-offset="70"
        data-aos-easing="linear"
        data-aos-duration="550"
        className="object-cover object-center w-full bg-cover bg-center display:h-[900px] table:h-[768px] phone:h-[368px] h-[287px] p-0"
      ></video>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex flex-col justify-center items-start display:px-[340px] display:py-[256px] table:px-[216px] table:py-[192px] phone:px-[128px] phone:py-[168px] px-[72px] py-[128px] gap-[32px]">
            <p
              className=" text-p-72-30 text-[#000] !font-[nanoLightFont]"
              data-aos="fade-down"
              data-aos-offset="70"
              data-aos-easing="linear"
              data-aos-duration="550"
            >
              Our mission extends beyond mere words —we are determined to
              protect our environment
            </p>
            <p
              className="text-p-36-18 text-[#141414] !font-[nanoLightFont]"
              data-aos="zoom-in"
              data-aos-offset="10"
              data-aos-easing="linear"
              data-aos-duration="650"
            >
              At NANO, our commitment to sustainable innovation is at the heart
              of our operations. Our sustainability strategy is ingrained in
              every aspect of our business, from our relationships with our
              communities to our dedication to the environment and our emphasis
              on creating social value.
              <br />
              <br /> We strive to engineer advanced and innovative clean
              solutions that not only benefit our immediate environment but also
              have a lasting, positive impact on society as a whole. We envision
              ourselves as the vanguard of sustainable innovation, fostering a
              culture of environmental consciousness across different societies
              and industries.
              <br />
              <br /> Acknowledging the urgency and the myriad impacts of climate
              change, NANO stands ready to act.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex flex-col justify-center items-start display:px-[86px] display:pb-[86px] table:px-[81px] table:pb-[81px] phone:px-[76px] phone:pb-[76px] px-[72px] pb-[72px] gap-[32px] relative">
            <div className="relative block table:hidden top-0 bottom-0 left-0 right-0 pt-[100%] h-[calc(100vw-144px)] phone:h-[calc(100vw-152px)] leading-[100%] w-full ">
              <video
                autoPlay
                loop
                muted
                src={missionBg_2}
                poster={missionBg_2_img}
                data-aos="fade-up"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
                style={{ clipPath: "inset(6% 0 6% 0)" }}
                className="object-cover object-center absolute top-0 left-0 w-full h-full p-0"
              ></video>
            </div>
            <video
              autoPlay
              loop
              muted
              src={missionBg_2}
              poster={missionBg_2_img}
              data-aos="fade-up"
              data-aos-offset="70"
              data-aos-easing="linear"
              data-aos-duration="550"
              style={{ clipPath: "inset(6% 0 6% 0)" }}
              className="table:block hidden w-full object-cover object-center h-[600px]"
            ></video>
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
                NANO paves the way to a sustainable future
              </p>
              <p
                className="text-p-36-18 text-[#141414] !font-[nanoLightFont]"
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-easing="linear"
                data-aos-duration="650"
              >
                We are confronted with climate change, arguably the most
                critical and intricate issue that our society has ever
                encountered. Years of indifference and inaction have led to
                consequences that could be irreversible. However, the most
                prevalent pollutant on our planet could potentially become its
                greatest defender.
                <br />
                <br />
                Our products are envisioned to pave the way for liberating us
                from reliance on Li-ion batteries. With the swift and focused
                progression of our offerings, we possess the capability to
                significantly mitigate environmental damage and contribute
                tangibly to the battle against climate change.
              </p>
            </div>
            <div className=" w-full flex table:flex-col flex-row justify-center items-start gap-[32px] display:w-[363px] table:w-[180px]">
              <div className=" table:hidden block flex-1 pt-[calc(50%-16px)] relative">
                <div
                  className="display:h-[314px] flex w-full bg-cover bg-center absolute leading-[100%] h-full top-0 left-0 right-0 bottom-0"
                  style={{
                    backgroundImage:
                      "url('https://storage.googleapis.com/nano-diamond-battery/radiation-hazard-sign-in-the-red-forest-chernoby.jpg')",
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
                      "url('https://storage.googleapis.com/nano-diamond-battery/close-up-of-female-hands-in-cotton-protection-glov.jpg')",
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
                    "url('https://storage.googleapis.com/nano-diamond-battery/radiation-hazard-sign-in-the-red-forest-chernoby.jpg')",
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
                    "url('https://storage.googleapis.com/nano-diamond-battery/close-up-of-female-hands-in-cotton-protection-glov.jpg')",
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
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex flex-col justify-center items-start display:p-[86px] table:p-[81px] phone:p-[76px] px-[72px] pb-[72px] gap-[32px] relative">
            <div
              className=" block table:hidden top-0 bottom-0 left-0 right-0 pt-[100%] h-[calc(100vw-144px)] phone:h-[calc(100vw-152px)] leading-[100%] w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/nano-diamond-battery/hands-holding-earth-paper-and-water-paint-concept.jpg')",
              }}
              data-aos="fade-up"
              data-aos-offset="70"
              data-aos-easing="linear"
              data-aos-duration="550"
            ></div>
            <div
              className=" table:block hidden w-full bg-cover bg-center h-[600px]"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/nano-diamond-battery/hands-holding-earth-paper-and-water-paint-concept.jpg')",
              }}
              data-aos="fade-up"
              data-aos-offset="70"
              data-aos-easing="linear"
              data-aos-duration="550"
            ></div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex flex-col items-center gap-[10px] self-stretch display:px-[86px] display:pb-[86px] table:px-[81px] table:pb-[100px] phone:px-[76px] phone:pb-[114px] px-[72px] pb-[128px]">
            <div className="flex table:flex-row flex-col items-start self-stretch display:gap-[150px] table:gap-[75px] phone:gap-[128px] gap-[64px] display:px-[86px] display:py-[128px] table:px-[42px] table:py-[90px] phone:px-[20px] phone:py-[44px] p-0">
              <div className=" flex flex-col justify-center items-start gap-[32px] display:w-2/5 table:w-2/5 w-full">
                <p
                  className="text-p-72-30 text-[#141414]"
                  data-aos="fade-down"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                >
                  Leading a global decarbonization transition
                </p>
              </div>
              <div className="flex flex-col gap-[64px] items-start mr-[10px] flex-1">
                <p
                  className="text-p-36-18 text-[#141414] !font-[nanoLightFont]"
                  data-aos="zoom-in"
                  data-aos-offset="10"
                  data-aos-easing="linear"
                  data-aos-duration="650"
                >
                  The escalating energy crisis reverberates globally, posing
                  significant challenges to individuals and businesses alike.
                  The quest to resolve climate change impacts is a pressing
                  concern for all nations. The limited supply of energy
                  resources has exacerbated the crisis, especially with the
                  recent resurgence of coal energy. Dependable alternatives like
                  renewable energy sources are falling short due to their
                  reliance on climate conditions.
                  <br />
                  <br />
                  NANO steps in to address this issue by offering an efficient
                  energy source that caters to championing environmental
                  sustainability. If existing phones and watches are supplanted
                  with NDB, we would witness a reduction in Li-ion consumption.
                </p>
                <a href="/technology">
                <Button
                  className=" !normal-case w-auto table:!px-[32px] table:!py-[12px] !px-[24px] !py-[6px] text-p-30-14 !bg-[#000] !text-[#FFF] !rounded-[200px]"
                  data-aos="fade-up"
                  data-aos-offset="20"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                >
                  View our technology
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <video
        autoPlay
        loop
        muted
        src={missionBg_4}
        poster={missionBg_4_img}
        data-aos="fade-up"
        data-aos-offset="70"
        data-aos-easing="linear"
        data-aos-duration="550"
        className="object-cover object-center w-full p-0 display:h-[900px] table:h-[768px] phone:h-[368px] h-[287px]"
      ></video>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex flex-col items-center self-stretch display:px-[86px] display:pt-[128px] table:px-[80px] table:pt-[108px] phone:px-[76px] phone:pt-[90px] px-[72px] pt-[72px] display:gap-[64px] table:gap-[52px] phone:gap-[42px] gap-[32px]">
            <div
              className=" flex w-full flex-col justify-center items-start gap-[32px]"
              data-aos="fade-down"
              data-aos-offset="70"
              data-aos-easing="linear"
              data-aos-duration="550"
            >
              <p className="text-p-72-30 text-[#141414]">
                Carbon Utilization at Scale
              </p>
              <p className="text-p-60-24 text-[#141414] !font-[nanoLightFont]">
                By expanding the application of our technology across various
                sectors, we aim to significantly reduce global CO2 emissions.
              </p>
            </div>
            <div className=" flex flex-col table:flex-row gap-[32px] table:gap-[64px] self-stretch items-end ">
              <div className=" flex flex-1  h-auto sticky bottom-0">
                <p
                  className="justify-end flex-col self-stretch text-p-36-18 text-[#141414] !font-[nanoLightFont] relative"
                  data-aos="zoom-in"
                >
                  As we expand our global footprint, we are commercializing our
                  technology and products. At the same time, we aim to ensure
                  fair distribution of our systems to communities that are
                  disproportionately impacted by climate change.
                </p>
              </div>
              <div className="w-full relative flex-1">
                <div
                  className="display:h-[1000px] table:h-[750px] table:flex hidden w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://storage.googleapis.com/nano-diamond-battery/hand-holding-earth-sign-up-with-natural-environmen.jpg')",
                  }}
                  data-aos="fade-up"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                ></div>
                <div
                  className="flex table:hidden h-[calc(100vw-144px)] phone:h-[calc(100vw-152px)] w-full bg-cover bg-center leading-[100%] top-0 left-0 right-0 bottom-0 pt-[100%]"
                  style={{
                    backgroundImage:
                      "url('https://storage.googleapis.com/nano-diamond-battery/hand-holding-earth-sign-up-with-natural-environmen.jpg')",
                  }}
                  data-aos="fade-up"
                  data-aos-offset="70"
                  data-aos-easing="linear"
                  data-aos-duration="550"
                ></div>
              </div>
            </div>
            <div className="flex h-[1px] p-[10px] items-center gap-[10px] self-stretch border-b border-b-solid border-b-[#000]"></div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div className=" flex flex-col table:flex-row justify-center items-start display:p-[86px] table:p-[42px] phone:p-[21px] py-[72px] display:gap-[86px] table:gap-[64px] phone:gap-[44px] gap-[36px] self-stretch">
            <div className=" items-center w-full flex-col flex p-[72px] phone:p-[68px]  table:p-[66px] display:p-[64px] gap-[64px]">
              <div
                className=" flex-1 flex items-center gap-[10px] self-stretch"
                data-aos="fade-down"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              >
                <p className="flex-1 text-black text-p-36-18-500 !font-[nanoMediumFont]">
                  NANO Phone
                </p>
                <div className=" flex table:w-[24px] table:h-[24px] h-[12px] w-[12px]  flex-col items-center gap-[10px] rounded-full bg-black"></div>
                <p className="text-p-30-14 text-black underline !font-[nanoRegularFont]">
                  Reserve
                </p>
              </div>
              <div
                className="w-full flex flex-col justify-center items-center gap-[64px]"
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-easing="linear"
                data-aos-duration="650"
              >
                <div className="w-full flex flex-col justify-center gap-[32px] relative">
                  <div className="flex display:h-[448px] table:h-[377px] phone:h-[calc(100vw-178px)] h-[calc(100vw-144px)] top-0 bottom-0 left-0 right-0 bg-black flex-col justify-center items-center gap-[10px]">
                    <p className="text-p-36 text-white !font-[nanoMediumFont] text-center">
                      Coming Soon
                    </p>
                  </div>
                  <div className=" flex-start flex gap-[32px] self-stretch">
                    <div className=" flex h-[4px] flex-1 items-start rounded-[100px] bg-mainColor"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                  </div>
                </div>
              </div>
              <a href="/technology">
              <Button
                variant="contained"
                className="button-30-14-3 !text-white !bg-black"
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-easing="linear"
                data-aos-duration="1000"
              >
                Learn more
              </Button>
              </a>
            </div>
            <div className=" items-center w-full flex-col flex p-[72px] phone:p-[68px]  table:p-[66px] display:p-[64px] gap-[64px]">
              <div
                className=" flex-1 flex items-center gap-[10px] self-stretch"
                data-aos="fade-down"
                data-aos-offset="70"
                data-aos-easing="linear"
                data-aos-duration="550"
              >
                <p className="flex-1 text-black text-p-36-18-500 !font-[nanoMediumFont]">
                  NANO Watch
                </p>
                <div className=" flex table:w-[24px] table:h-[24px] h-[12px] w-[12px]  flex-col items-center gap-[10px] rounded-full bg-black"></div>
                <p className="text-p-30-14 text-black underline !font-[nanoRegularFont]">
                  Reserve
                </p>
              </div>
              <div
                className="w-full flex flex-col justify-center items-center gap-[64px]"
                data-aos="zoom-in"
                data-aos-offset="10"
                data-aos-easing="linear"
                data-aos-duration="650"
              >
                <div className="w-full flex flex-col justify-center gap-[32px] relative">
                  <div className="flex display:h-[448px] table:h-[377px] phone:h-[calc(100vw-178px)] h-[calc(100vw-144px)] top-0 bottom-0 left-0 right-0 bg-black flex-col justify-center items-center gap-[10px]">
                    <p className="text-p-36 text-white !font-[nanoMediumFont] text-center">
                      Coming Soon
                    </p>
                  </div>
                  <div className=" flex-start flex gap-[32px] self-stretch">
                    <div className=" flex h-[4px] flex-1 items-start rounded-[100px] bg-mainColor"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                    <div className="flex h-[4px] flex-1 items-start rounded-[100px] bg-[#A0A0A0]"></div>
                  </div>
                </div>
              </div>
              <a href="/technology">
              <Button
                variant="contained"
                className="button-30-14-3 !text-white !bg-black"
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
    </div>
  );
};

export default Mission;
