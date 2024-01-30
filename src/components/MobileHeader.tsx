import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { ReactComponent as MenuToggler } from "../svgs/menu-toggler.svg";
import { ReactComponent as NotificationIcon } from "../svgs/notification-icon.svg";

interface IProps {
  openRetractableMenu: () => void;
}

const MobileHeader: React.FC<IProps> = ({ openRetractableMenu }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const location = useLocation();

  const getHeaderTitle = () => {
    if (location.pathname === "/dashboard") {
      return "Dashboard";
    }

    if (location.pathname.includes("requests")) {
      return "Requests";
    }

    if (location.pathname.includes("shipments")) {
      return "Shipments";
    }

    if (location.pathname.includes("logistics")) {
      return "Logistics";
    }
    if (location.pathname.includes("workplans")) {
      return "Workplans";
    }
    if (location.pathname.includes("analytics")) {
      return "Analytics";
    }
    if (location.pathname.includes("settings")) {
      return "Settings";
    }
    if (location.pathname.includes("help")) {
      return "Help";
    }
  };

  return (
    <div className="flex justify-between px-3 lg:hidden bg-white w-full h-[100px] items-center top-0 z-10 relative m-auto mt-0 shadow-md">
      <button
        type="button"
        className="cursor-pointer border-none outline-none"
        onClick={openRetractableMenu}
      >
        <MenuToggler />
      </button>
      <p className="font-semibold text-sm text-[#141921]">{getHeaderTitle()}</p>
      <button
        className="relative"
        onClick={handleClick}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <NotificationIcon />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="w-[250px] h-[300px] p-3">
          <p className="w-full border-b border-[#ddd]">Notifications</p>
          <div className="text-center mt-4 w-full h-full m-auto">
            <p>Noting to see!</p>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default MobileHeader;
