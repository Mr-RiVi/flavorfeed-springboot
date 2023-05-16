import { Route, Routes } from "react-router-dom";
import UserAccountList from "../pages/AllUserAccounts/userAccountList";
import UpdateAdminAcc from "../pages/UpdateAdminAcc/updateAdminAcc";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/all-users" element={<UserAccountList />} />
      <Route path="/update-admin-account" element={<UpdateAdminAcc />} />
    </Routes>
  );
}

export default AdminRoutes;
