import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import clsx from "clsx";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { ReactComponent as CloseIcon } from "../svgs/close-icon.svg";
import MenuItem from "./MenuItem";
import LogoutModal from "./LogoutModal";

interface IProps {
  isMenuOpen: boolean;
  dismiss: () => void;
}

const RetractibleSidebar: React.FC<IProps> = ({ isMenuOpen, dismiss }) => {
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (path: string) => {
    navigate(`${path}`);
  };
  const menuItems = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: <GridViewIcon />,
      activeIcon: <GridViewIcon />,
    },
    {
      path: "/requests",
      label: "Requests",
      icon: <ShoppingCartIcon stroke="#fff" />,
      activeIcon: <ShoppingCartIcon stroke="#fff" />,
    },
    {
      path: "/shipments",
      label: "Shipments",
      icon: <CardTravelIcon stroke="#fff" />,
      activeIcon: <CardTravelIcon stroke="#fff" />,
    },
    {
      path: "/logistics",
      label: "Logistics",
      icon: <LocalShippingIcon stroke="#fff" />,
      activeIcon: <LocalShippingIcon stroke="#fff" />,
    },
    {
      path: "/workplans",
      label: "Workplans",
      icon: <PlaylistAddCheckIcon stroke="#fff" />,
      activeIcon: <PlaylistAddCheckIcon stroke="#fff" />,
    },
    {
      path: "/analytics",
      label: "Analytics",
      icon: <BarChartIcon stroke="#fff" />,
      activeIcon: <BarChartIcon stroke="#fff" />,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: <SettingsIcon stroke="#fff" />,
      activeIcon: <SettingsIcon stroke="#fff" />,
    },
    {
      path: "/help",
      label: "Help",
      icon: <HelpIcon stroke="#fff" />,
      activeIcon: <HelpIcon stroke="#fff" />,
    },
  ];

  const bottomMenus = [
    {
      path: "",
      label: "Log out",
      icon: <LogoutIcon stroke="#fff" />,
      activeIcon: <LogoutIcon stroke="#fff" />,
    },
  ];
  return (
    <aside
      className={clsx({
        "sidebar2 z-9999 w-full h-screen fixed left-0 ease-in-out duration-500 block lg:hidden bg-black bg-opacity-50":
          true,
        "-translate-x-0": isMenuOpen,
        "-translate-x-full": !isMenuOpen,
      })}
    >
      <div className="w-1/2 h-full bg-[#3884B6] relative pt-[47px] text-sm font-semibold border border-t-0 border-[#d1d2d4]-500 shadow shadow-[4px 4px 15px 4px rgba(51, 51, 51, 0.05)] content-center lg:content-start text-left flex flex-col justify-between overflow-y-auto min-h-[100vh]">
        <div className="w-full flex items-center justify-between px-4 mb-4 lg:mb-0">
          <div className="flex flex-col justify-start">
            <div className="font-[600] text-[#fff] text-[28px] flex justify-start items-center pb-0 w-full">
              JetVision
            </div>
            <p className="w-full text-xs font-normal text-white px-[20px] pl-8 mx-auto text-left">
              By JetStreams
            </p>
          </div>
          <div>
            <button
              type="button"
              className=" border-none outline-none cursor-pointer"
              onClick={dismiss}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
        <div className="h-[50px]" />
        <div className="h-[100vh] flex flex-col justify-between">
          <div>
            {menuItems.map((item) => (
              <MenuItem
                key={item.label}
                isActive={location.pathname.startsWith(item.path)}
                icon={
                  location.pathname === item.path ? item.activeIcon : item.icon
                }
                label={item.label}
                onClick={() => {
                  handleMenuClick(item.path);
                }}
              />
            ))}
            <div className="my-8 w-full border border-[#7393B3]" />
            {bottomMenus.map((item) => (
              <MenuItem
                key={item.label}
                isActive={location.pathname === item.path}
                icon={
                  location.pathname === item.path ? item.activeIcon : item.icon
                }
                label={item.label}
                onClick={() => {
                  setIsLogoutModal(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <LogoutModal
        isVisible={isLogoutModal}
        closeModal={() => setIsLogoutModal(false)}
      />
    </aside>
  );
};

export default RetractibleSidebar;
