import { Route, Routes } from "react-router-dom";
import UserAccountList from "../pages/AllUserAccounts/userAccountList";

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/all-users" element={<UserAccountList />} />
    </Routes>
  );
}

export default AdminRoutes;
