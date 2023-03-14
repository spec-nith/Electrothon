import {
  faCalendarDay,
  faHandshake,
  // faHome,
  faIdCardAlt,
  faSearch,
  // faUsers,
  faWindowRestore,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const navItems = [
  // {
  //   name: "Home",
  //   id: "home",
  //   icon: faHome,
  // },
  // {
  //   name: "About Us",
  //   id: "general-content",
  //   icon: faUsers,
  // },
  {
    name: "Schedule",
    id: "schedule",
    icon: faCalendarDay,
  },
  {
    name: "Prev. Sponsors",
    id: "sponsors",
    icon: faHandshake,
  },
  {
    name: "Themes",
    id: "themes",
    icon: faWindowRestore,
  },
  {
    name: "Prizes",
    id: "prizes",
    icon: faTrophy,
  },
  {
    name: "FAQ",
    id: "faq",
    icon: faSearch,
  },
  {
    name: "Contact Us",
    id: "contact",
    icon: faIdCardAlt,
    hide: true,
  },
];

export default navItems;
