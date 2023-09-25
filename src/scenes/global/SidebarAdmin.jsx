import { Box, useTheme, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const SidebarAdmin = ({isSideBarCollapsed, toggleSideBar}) => {
  const sideMenuList = {
    constant: [
      {
        title: "Dashboard",
        link: "/",
        icon: <HomeOutlinedIcon />,
      },
    ],
    data: [
      {
        title: "Manage Team",
        link: "/team",
        icon: <PeopleOutlinedIcon />,
      },
      {
        title: "Contacts Information",
        link: "/",
        icon: <ContactsOutlinedIcon />,
      },
      {
        title: "Invoices Balances",
        link: "/",
        icon: <ReceiptOutlinedIcon />,
      },
    ],
    pages: [
      {
        title: "Profile Form",
        link: "/",
        icon: <PersonOutlinedIcon />,
      },
      {
        title: "Calendar",
        link: "/",
        icon: <CalendarTodayOutlinedIcon />,
      },
      {
        title: "FAQ Page",
        link: "/",
        icon: <HelpOutlineOutlinedIcon />,
      },
    ],
    charts: [
      {
        title: "Bar Chart",
        link: "/",
        icon: <BarChartOutlinedIcon />,
      },
      {
        title: "Pie Chart",
        link: "/",
        icon: <PieChartOutlineOutlinedIcon />,
      },
      {
        title: "Line Chart",
        link: "/",
        icon: <TimelineOutlinedIcon />,
      },
      {
        title: "Geography Chart",
        link: "/",
        icon: <MapOutlinedIcon />,
      },
    ],
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      className= {isSideBarCollapsed ? "sideBarCollapsed" : "sideBarUncollapsed"}
      sx={{
        "& .ps-sidebar-root": {
          background: `${colors.primary[400]} !important`,
          height: "100%",
          // display:"flex"
        },
        "& .ps-sidebar-container": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button": {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar collapsed={isSideBarCollapsed}>
        <Menu>
          <MenuItem>
            <Box display="flex" justifyContent="space-between">
              {!isSideBarCollapsed && <Typography variant="h3">ADMINS</Typography>}
              <IconButton onClick={() => toggleSideBar()}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          </MenuItem>
          {!isSideBarCollapsed && (
            <MenuItem>
              <Box>
                {/* TODO: Add profile photo */}
                {/* <div>Profile Photo</div> */}
                <Box textAlign="center">
                  <Typography variant="h2" fontWeight="bold">
                    Ed Roh
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[400]}>
                    VP Admin
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
          )}
          {Object.keys(sideMenuList).map((menuItem) => {
            return (
              <Box
                paddingLeft={isSideBarCollapsed ? undefined : "10%"}
                sx={{
                  "& .ps-menuitem-root :hover": {
                    color: `${colors.blueAccent[400]}`,
                    "& .ps-menu-button": {
                      color: "inherit",
                    },
                    "& .MuiIconButton-root": {
                      color: "inherit",
                      backgroundColor: "transparent",
                    },
                  },
                }}
              >
                {menuItem !== "constant" && (
                  <Typography
                    sx={{ m: "15px 0 5px 20px" }}
                  >{`${menuItem[0].toUpperCase()}${menuItem.slice(
                    1
                  )}`}</Typography>
                )}

                {sideMenuList[menuItem].map((subMenu) => {
                  return (
                    <MenuItem
                      icon={<IconButton>{subMenu?.icon}</IconButton>}
                      component={<Link to={subMenu?.link} />}
                    >
                      {subMenu?.title}
                    </MenuItem>
                  );
                })}
              </Box>
            );
          })}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarAdmin;
