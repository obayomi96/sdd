import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuItem from "./MenuItem";
import LogoutModal from "./LogoutModal";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const location = useLocation();

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
      label: "Sign out",
      icon: <LogoutIcon stroke="#fff" />,
      activeIcon: <LogoutIcon stroke="#fff" />,
    },
  ];

  return (
    <div className="hidden lg:block relative w-full bg-[#3884B6] min-h-[100vh] text-sm font-semibold  border-t-0 border-[#d1d2d4]-500 min-w-[1024px]:left-0 lg:top-0 content-center lg:content-start text-center justify-center ml-0 pl-0 mx-auto">
      <div className="font-[600] text-[#fff] text-[28px] flex justify-center pl-8  items-center pt-[50px] pb-0 px-[20px] w-full text-center mx-auto">
        Jetvision
      </div>
      <p className="w-full text-xs font-normal text-white px-[20px] pl-8 mx-auto">
        By JetStreams
      </p>
      <div className="h-[50px]" />
      <div className=" flex flex-col justify-between items-center">
        <div className="w-auto px-5 mx-auto flex flex-col items-center justify-center">
          {menuItems.map((item) => (
            <MenuItem
              key={item.label}
              isActive={location.pathname.startsWith(item.path)}
              icon={
                location.pathname === item.path ? item.activeIcon : item.icon
              }
              label={item.label}
              onClick={() => {
                if (item.label === "Sign out") {
                  setIsLogoutModal(true);
                } else {
                  handleMenuClick(item.path);
                }
              }}
            />
          ))}
          <div className="my-8 w-full border border-[#7393B3]" />
          {bottomMenus.map((item) => (
            <MenuItem
              key={item.label}
              isActive={location.pathname === item.path}
              icon={item.icon}
              label={item.label}
              onClick={() => {
                setIsLogoutModal(true);
              }}
            />
          ))}
        </div>
      </div>
      <LogoutModal
        isVisible={isLogoutModal}
        closeModal={() => setIsLogoutModal(false)}
      />
    </div>
  );
};

export default Sidebar;
