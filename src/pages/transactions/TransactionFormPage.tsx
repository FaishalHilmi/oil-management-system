import PageHeader from "@/components/shared/PageHeader";
import TransactionForm from "@/components/transaction/TransactionForm";

export default function TransactionFormPage() {
  return (
    <>
      <PageHeader
        title="Tambah Transaksi"
        description="Lengkapi data transaksi investasi."
      />

      <section className="mt-10">
        <TransactionForm />
      </section>
    </>
  );
}
