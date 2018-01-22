import Dashboard from '../views/Dashboard/Dashboard';
import UserProfile from '../views/UserProfile/UserProfile';
import Typography from '../views/Typography/Typography';
import TableIndex from '../views/Table/Index';
import Icons from '../views/Icons/Icons';
// import Maps from '../views/Maps/Maps';
import Notifications from '../views/Notifications/Notifications';
import Upgrade from '../views/Upgrade/Upgrade';

const appRoutes = [
    { path: "/ho/dashboard", name: "Dashboard", icon: "pe-7s-graph", component: Dashboard },
    { path: "/ho/user", name: "User Profile", icon: "pe-7s-user", component: UserProfile },
    { path: "/ho/typography", name: "Typography", icon: "pe-7s-news-paper", component: Typography },
    { path: "/ho/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
    // { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
    { path: "/ho/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    { path: "/ho/tables", name:"Tables", icon: "pe-7s-note2",component: TableIndex},
    { upgrade: true, path: "/ho/upgrade", name: "Upgrade to PRO", icon: "pe-7s-rocket", component: Upgrade },
    { redirect: true, path:"/ho", to:"/ho/dashboard", name: "Dashboard" }
];

export default appRoutes;
