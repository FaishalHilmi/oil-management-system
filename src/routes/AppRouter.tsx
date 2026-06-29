import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "@/pages/DashboardPage";
import TransactionPage from "@/pages/TransactionPage";
import PartnerPage from "@/pages/PartnerPage";
import ReportPage from "@/pages/ReportPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/partners" element={<PartnerPage />} />
        <Route path="/reports" element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}
