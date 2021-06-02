import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";

import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import ManageFiles from "views/examples/ManageFiles.js";
import EmployeeReg from "views/examples/EmployeeReg.js";
import EmployeeList from "views/examples/EmployeeList.js";
import AttendanceLogs from "views/examples/AttendanceLogs";
import LeavesMng from "views/examples/LeavesMng.js";
import ManageRec from "views/examples/ManageRec.js";
import MemoList from "views/examples/MemoList.js";
import AttendanceArchive from "views/examples/AttendanceArchive.js";
import UploadFiles from "views/examples/UploadFiles.js";
import GovDeduct from "views/examples/GovDeduct.js"
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/AttendanceArchive",
    name: "Attendance Logs Archive",
    icon: "ni ni-planet text-blue",
    component: AttendanceArchive,
    layout: "/admin",
  },
 
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },

  {
    path: "/managefiles",
    name: "Manage Files",
    component: ManageFiles,
    layout: "/admin",
  },
  {
    path: "/employeereg",
    name: "Employee Registration",
    component: EmployeeReg,
    layout: "/admin",
  },
  {
    path: "/employeelist",
    name: "Employee List",
    component: EmployeeList,
    layout: "/admin",
  },
  {
    path: "/attendancelogs",
    name: "Attendance Logs",
    component: AttendanceLogs,
    layout: "/admin",
  },
  {
    path: "/leavesmng",
    name: "Leaves Management",
    component: LeavesMng,
    layout: "/admin",
  },
  {
    path: "/managerec",
    name: "Manage Records",
    component: ManageRec,
    layout: "/admin",
  },
  {
    path: "/memolist",
    name: "Announcements and Memos",
    component: MemoList,
    layout: "/admin",
  },
  {
    path: "/UploadFiles",
    name: "Upload Files",
    component: UploadFiles,
    layout: "/admin",
  },
  {
    path: "/GovDeduct",
    name: "Government Deductions",
    component: GovDeduct,
    layout: "/admin",
  },
  

];
export default routes;
