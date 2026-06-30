import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "@/pages/dashboard/DashboardPage";
import PartnerPage from "@/pages/partner/PartnerPage";
import ReportPage from "@/pages/report/ReportPage";
import AppLayout from "@/layouts/AppLayout";
import TransactionListPage from "@/pages/transactions/TransactionListPage";
import TransactionFormPage from "@/pages/transactions/TransactionFormPage";
import TransactionDetailPage from "@/pages/transactions/TransactionDetailPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />

          <Route path="/transactions" element={<TransactionListPage />} />
          <Route
            path="/transactions/create"
            element={<TransactionFormPage />}
          />
          <Route path="/transactions/:id" element={<TransactionDetailPage />} />
          <Route
            path="/transactions/:id/edit"
            element={<TransactionFormPage />}
          />

          <Route path="/partners" element={<PartnerPage />} />
          <Route path="/reports" element={<ReportPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
