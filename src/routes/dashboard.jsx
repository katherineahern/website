import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Icons from "views/Icons/Icons.jsx";
import SongRoulette from "views/SongRoulette/SongRoulette";
import DJ from "views/DJ/DJ";
import HYA from "views/HYA/HYA";

import {
  Speaker,
  Album,
  SettingsVoice,
  MusicNote,
  Face
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Home",
    navbarName: "Katherine Ahern",
    icon: Album,
    component: DashboardPage
  },
  {
    path: "/roulette",
    sidebarName: "Song Roulette",
    navbarName: "Song Roulette",
    icon: SettingsVoice,
    component: SongRoulette
  },  
  {
    path: "/DJ",
    sidebarName: "You're the DJ",
    navbarName: "You're the DJ",
    icon: Speaker,
    component: DJ
  },
  {
    path: "/hya",
    sidebarName: "HYA",
    navbarName: "HYA",
    icon: Face,
    component: HYA
  },
  {
    path: "/user",
    sidebarName: "About Me",
    navbarName: "About Me",
    icon: MusicNote,
    component: UserProfile
  },
  
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
