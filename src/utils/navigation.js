import HomeIcon from "@mui/icons-material/Home";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import CallIcon from "@mui/icons-material/Call";
import GroupsIcon from "@mui/icons-material/Groups";
export const navigation = [
  {
    text: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },

  {
    text: "Landlord",
    icon: <HolidayVillageIcon />,
    link: "/landlord",
  },
  {
    text: "Tenants",
    icon: <GroupsIcon />,
    link: "/tenants",
  },
  {
    text: "Contact Us",
    icon: <CallIcon />,
    link: "/contact",
  },
];
