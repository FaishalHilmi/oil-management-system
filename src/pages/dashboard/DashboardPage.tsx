import TransactionStatus from "@/components/dashboard/TransactionStatus";
import DashboardFilter from "@/components/dashboard/DashboardFilter";
import KPISection from "@/components/dashboard/KPISection";
import ProfitRevenueChart from "@/components/dashboard/ProfitRevenueChart";
import PageHeader from "@/components/shared/PageHeader";

export default function DashboardPage() {
  return (
    <section className="space-y-6">
      <PageHeader
        title="Dashboard Ringkasan"
        description="Ringkasan performa investasi minyak."
      />

      <DashboardFilter />

      <KPISection />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <TransactionStatus />

        <ProfitRevenueChart />
      </div>
    </section>
  );
}
