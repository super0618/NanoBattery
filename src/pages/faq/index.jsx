import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import early_background from "../../assets/video/nanodiamondbattery4.webm";

import early_background_img from "../../assets/images/nanoImage_04.svg";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  position: `relative`,
  borderBottom: `1px solid grey`,
  padding: `64px 80px 64px 0px`,
  "@media (min-width: 431px)": {
    padding: `64px 80px 64px 0px`,
  },
  "@media (min-width: 856px)": {
    padding: `64px 84px 64px 0px`,
  },
  "@media (min-width: 1241px)": {
    padding: `64px 88px 64px 0px`,
  },
  "&:not(:last-child)": {},
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <div className=" flex p-[16px] flex-col items-center rounded-[100px] border border-solid border-[#A0A0A0]">
        <AiOutlinePlus className="AccordionSummaryIconPlus text-[#D81AC5] text-[12px] table:text-[16px] display:text-[20px]" />
        <AiOutlineMinus className="AccordionSummaryIconMinus hidden text-[#D81AC5] text-[12px] table:text-[16px] display:text-[20px]" />
      </div>
    }
    {...props}
  />
))(({ theme }) => ({
  width: `100%`,
  padding: `0px`,
  position: `unset`,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.MuiAccordionSummary-expandIconWrapper":
    {
      position: `absolute`,
      top: `calc(50% - 27px)`,
      right: `0px`,
    },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded .AccordionSummaryIconPlus":
    {
      display: `none`,
    },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded .AccordionSummaryIconMinus":
    {
      display: `block`,
    },
  "& .MuiAccordionSummary-content": {
    width: `100%`,
    display: `flex`,
    gap: `32px`,
    justifyContent: `space-between`,
    margin: theme.spacing(0),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  paddingTop: `36px`,
}));

const FAQ = () => {
  const [expanded, setExpanded] = useState("panel6");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    AOS.init();
  }, []);

  return (
    <div className="flex w-full flex-col">
      <div className="w-full bg-white">
        <div className=" flex display:px-[86px] display:py-[128px] table:px-[81px] table:py-[108px]  phone:px-[76px] phone:py-[90px] p-[72px] flex-col items-start self-stretch">
          <p
            className=" text-p-72-30 text-black"
            data-aos="fade-down"
            data-aos-offset="70"
            data-aos-easing="linear"
            data-aos-duration="550"
          >
            Frequently Asked Questions
          </p>
        </div>
      </div>
      {/*  */}
      <div className="w-full bg-white">
        <div className=" m-auto max-w-[1728px]">
          <div
            className=" display:p-[86px] table:p-[81px] phone:p-[76px] px-[72px] pb-[72px] flex flex-col items-start self-stretch"
            data-aos="fade-up"
            data-aos-offset="70"
            data-aos-easing="linear"
            data-aos-duration="550"
          >
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="border-t border-t-[grey]"
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className="text-p-36-18 text-[#000] !font-[nanoLightFont]">
                  What is NANO Diamond Battery?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-p-36-18-400 text-[#000]">
                The Nano Diamond Battery is an innovative, long-lasting, 
                and eco-friendly power source that operates without the need for recharging. 
                This revolutionary battery is constructed using isotopes or recycled nuclear waste.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className="text-p-36-18 text-[#000] !font-[nanoLightFont]">
                How does the Nano Diamond Battery work?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-p-36-18-400 text-[#000]">
                The Nano Diamond Battery harnesses the unique properties of its semiconductor to 
                generate electricity through a self-sustaining process. As the battery's isotopic 
                or nuclear waste components naturally decay, they release energy, which
                 is captured and converted into electrical power, ensuring a continuous and self-renewing energy supply.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className="text-p-36-18 text-[#000] !font-[nanoLightFont]">
                What are the key advantages of the Nano Diamond Battery?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-p-36-18-400 text-[#000]">
                The Nano Diamond Battery offers several significant advantages:
                <li>Lifetime Operation: With its never-ending power generation capabilities, 
                  the Nano Diamond Battery can function throughout its entire lifetime, eliminating the need for replacements or recharging.</li>{"\n"}
                <li>Environmentally Friendly: By utilizing isotopes or recycled nuclear waste, the battery contributes to reducing nuclear waste and offers a clean and sustainable energy solution.</li>{"\n"}
                <li>Safe and Secure: The battery is designed with utmost safety in mind, ensuring that it poses no risk of nuclear reactions or emissions.</li>{"\n"}
                <li>Compact and Versatile: The Nano Diamond Battery boasts a compact design, making it suitable for various applications ranging from personal devices to industrial use.</li>
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className="text-p-36-18 text-[#000] !font-[nanoLightFont]">
                  Is the Nano Diamond Battery safe for everyday use?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-p-36-18-400 text-[#000]">
                Yes, the Nano Diamond Battery is engineered with safety as a top priority. 
                It produces electricity through a completely passive process, 
                without any risk of chain reactions or hazardous emissions. Rest assured 
                that it is safe for everyday use and poses no harm to users or the environment.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className="text-p-36-18 text-[#000] !font-[nanoLightFont]">
                Can the Nano Diamond Battery be recycled?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-p-36-18-400 text-[#000]">
                Absolutely. The Nano Diamond Battery is environmentally conscious from its production to its disposal. 
                It contains recycled nuclear waste or isotopes, and at the end of its life cycle, it 
                can undergo recycling to extract valuable materials and further reduce environmental impact.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className="text-p-36-18 text-[#000] !font-[nanoLightFont]">
                How can I get the Nano Diamond Battery for my devices?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-p-36-18-400 text-[#000]">
                As of now, the Nano Diamond Battery is still in its development and commercialization stage. 
                Engineers are actively working on bringing this technology to the market. Please stay tuned for updates on its availability and distribution.
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <p className="text-p-36-18 text-[#000] !font-[nanoLightFont]">
                What makes the Nano Diamond Battery a better choice than conventional batteries?
                </p>
              </AccordionSummary>
              <AccordionDetails>
                <p className="text-p-36-18-400 text-[#000]">
                Unlike conventional batteries that require frequent recharging or replacements, the Nano Diamond Battery
                 stands out with its exceptional longevity, sustainability, and minimal environmental impact. 
                 Its capacity to generate power autonomously sets it apart as a cleaner and more efficient alternative to traditional battery technologies.
                </p>
              </AccordionDetails>
            </Accordion>
            <div className="flex flex-col items-start self-stretch"></div>
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
    </div>
  );
};

export default FAQ;
