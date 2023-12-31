import React from "react";

import { Icon } from "@chakra-ui/react";
import {
	MdBarChart,
	MdPerson,
	MdHome,
	MdLock,
	MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports
// import MainDashboard from "views/admin/default";
// import NFTMarketplace from "views/admin/marketplace";
// import Profile from "views/admin/profile";
// import DataTables from "views/admin/dataTables";
// import RTL from "views/admin/rtl";

// Auth Imports
// import SignInCentered from "views/auth/signIn";
// import CreateQuestions from "views/admin/createQuestions/index.js";
import CreateTest from "views/admin/test/createTest/index.js";
import alltest from "views/admin/subject/test/sub_test.js";
import ApprovalTable from "views/admin/approval/approval";


const routes = [
	// {
	//   name: "Main Dashboard",
	//   layout: "/admin",
	//   path: "/default",
	//   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
	//   component: MainDashboard,
	// },
	// {
	// 	name: "Create Questions",
	// 	layout: "/admin",
	// 	path: "/createquestions",
	// 	icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
	// 	component: CreateQuestions,
	// },

	{
		name: "Subject Tests",
		layout: "/admin",
		path: "/createTest",
		icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
		component: CreateTest,
	},
	{
		name: "All Tests",
		layout: "/admin",
		path: "/subject/test/:subjectId",
		icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
		component: alltest,
		secondary: true,
	},

	{
		name: "Approval",
		layout: "/admin",
		path: "/approval",
		icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
		component: ApprovalTable,
		// secondary:true
	},
	// {
	//   name: "NFT Marketplace",
	//   layout: "/admin",
	//   path: "/nft-marketplace",
	//   icon: (
	//     <Icon
	//       as={MdOutlineShoppingCart}
	//       width='20px'
	//       height='20px'
	//       color='inherit'
	//     />
	//   ),
	//   component: NFTMarketplace,
	//   secondary: true,
	// },
	// {
	//   name: "Data Tables",
	//   layout: "/admin",
	//   icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
	//   path: "/data-tables",
	//   component: DataTables,
	// },
	// {
	//   name: "Profile",
	//   layout: "/admin",
	//   path: "/profile",
	//   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
	//   component: Profile,
	// },
	// {
	//   name: "Sign In",
	//   layout: "/auth",
	//   path: "/sign-in",
	//   icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
	//   component: SignInCentered,
	// },
	// {
	//   name: "RTL Admin",
	//   layout: "/rtl",
	//   path: "/rtl-default",
	//   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
	//   component: RTL,
	// },
];

export default routes;
