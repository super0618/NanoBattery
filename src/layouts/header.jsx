import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AOS from "aos";

import Logo from "../assets/images/logo.svg";
import NanoLogo from "../assets/images/NanoLogo.svg";

import { menuList, menuDList } from "./menu";

import { FaBars } from "react-icons/fa";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import crossImg from "../assets/images/cross.svg";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  });

  const toggleDrawer = (open) => {
    setMenuState(open);
  };

  const list = () => (
    <div className="flex w-full flex-col gap-[72px] p-6">
      <div className="flex justify-between ">
        <div>
          <img
            onClick={() => toggleDrawer(false)}
            className=" flex flex-col items-start h-6 w-6 self-stretch bg-cover bg-center hover:!cursor-pointer"
            src={crossImg}
          ></img>
        </div>
        <div>
          <img src={NanoLogo} alt="logo" className=" h-select-none h-6" />
        </div>
      </div>
      <div>
        <List>
          <Divider />
          {menuList.map((element) => (
            <Link to={element.to} key={element.title}>
              <ListItem
                disablePadding
                onClick={() => {
                  toggleDrawer(false);
                }}
              >
                <ListItemButton className="!py-4 !pl-0 ">
                  <p className="!font-mainFont !text-[30px] !font-normal !normal-case !leading-9 text-black">
                    {element.title}
                  </p>
                </ListItemButton>
              </ListItem>
              <Divider />
            </Link>
          ))}
        </List>
      </div>
      <div>
        <Button className=" css-selector flex w-full items-center !gap-4 !rounded-none !border !border-solid !border-[#FFF] !bg-gradient-to-r from-[#F89B7D] from-[-30%] to-[#761785]  to-80% !object-center !p-4 !text-start !normal-case !table:h-16">
          <p className="w-full !font-mainFont !text-[30px] !font-normal !leading-9 text-white">
            Invest Now
          </p>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-black sticky top-0 z-50">
      <div className="m-auto flex h-[84px] max-w-[1728px] items-center gap-8 self-stretch p-6 phone:h-24 table:h-28 table:gap-2 display:h-32 display:gap-8 display:px-[86px] display:py-8">
        <div className="flex flex-1 flex-col items-start">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="h-select-none h-9 w-auto items-start phone:h-12 table:h-14 display:h-16"
            />
          </Link>
        </div>
        {menuDList.map((element) => (
          <div
            className={`hidden items-start gap-[10px] p-[10px] table:flex`}
            key={element.title}
          >
            <Link to={element.to}>
              <Button
                className={`hover:!text-[#5E444B] !text-[#fff] ${
                  location.pathname.includes(element.key)
                    ? "mainMenuAction"
                    : ""
                }`}
              >
                <p className=" normal-case font-[Suisse BP Int'l] text-sm font-semibold  phone:text-base table:text-xl display:text-[24px] display:leading-8">
                  {element.title}
                </p>
              </Button>
            </Link>
          </div>
        ))}
        <div className="">
          <Button className="css-selector flex !items-center !gap-4 !rounded-none !border !border-solid !border-[#FFF] !bg-gradient-to-r from-[#F89B7D] from-[-30%] to-[#761785] to-80%  !object-center !p-2 !text-center !normal-case !table:h-16 !table:p-4">
            <p className="  font-[Suisse BP Int'l] text-sm font-semibold text-[#fff] phone:text-base table:text-xl display:text-[24px] display:leading-8">
              Invest Now
            </p>
          </Button>
        </div>
        <div className="change_theme_btn float-right mr-4 flex w-9 items-center table:hidden">
          <span className="sr-only">Open main menu</span>
          <Button
            variant="contained"
            className="!w-full !text-4xl !text-white !bg-transparent"
            onClick={() => {
              toggleDrawer(true);
            }}
          >
            <FaBars />
          </Button>
        </div>
      </div>
      <Drawer anchor="top" open={menuState} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
};

export default Header;
