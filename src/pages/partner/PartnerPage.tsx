import { Search, UserPlus } from "lucide-react";
import { useState } from "react";

import PageHeader from "@/components/shared/PageHeader";
import PartnerCard from "@/components/partner/PartnerCard";
import PartnerFormModal from "@/components/partner/PartnerFormModal";
import PartnerDetailModal from "@/components/partner/PartnerDetailModal";

export type PartnerStatus = "Aktif" | "Nonaktif";

export type Partner = {
  id: number;
  name: string;
  phone: string;
  address: string;
  status: PartnerStatus;

  totalTransaction: number;
  totalBox: number;
  totalCapital: number;
  totalProfit: number;
  averageProfit: number;

  histories: {
    id: number;
    date: string;
    transactionNumber: string;
    quantity: number;
    profit: number;
    status: "Berjalan" | "Selesai";
  }[];
};

export default function PartnerPage() {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const partners: Partner[] = [
    {
      id: 1,
      name: "Andi Wijaya",
      phone: "081234567890",
      address: "Medan",
      status: "Aktif",

      totalTransaction: 12,
      totalBox: 450,
      totalCapital: 69800000,
      totalProfit: 5200000,
      averageProfit: 433333,

      histories: [
        {
          id: 1,
          date: "30 Jun 2026",
          transactionNumber: "TRX-202606-001",
          quantity: 120,
          profit: 2450000,
          status: "Selesai",
        },
        {
          id: 2,
          date: "27 Jun 2026",
          transactionNumber: "TRX-202606-002",
          quantity: 90,
          profit: 1750000,
          status: "Selesai",
        },
        {
          id: 3,
          date: "25 Jun 2026",
          transactionNumber: "TRX-202606-003",
          quantity: 75,
          profit: 0,
          status: "Berjalan",
        },
      ],
    },
    {
      id: 2,
      name: "Budi Santoso",
      phone: "081298765432",
      address: "Binjai",
      status: "Aktif",

      totalTransaction: 8,
      totalBox: 280,
      totalCapital: 42300000,
      totalProfit: 3150000,
      averageProfit: 393750,

      histories: [],
    },
    {
      id: 3,
      name: "Rizky Pratama",
      phone: "081312341234",
      address: "Deli Serdang",
      status: "Nonaktif",

      totalTransaction: 3,
      totalBox: 95,
      totalCapital: 14700000,
      totalProfit: 850000,
      averageProfit: 283333,

      histories: [],
    },
  ];

  return (
    <>
      <PageHeader
        title="Mitra Saya"
        description="Kelola seluruh mitra operasional."
      />

      <section className="mt-10 space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />

            <input
              type="text"
              placeholder="Cari nama mitra..."
              className="h-9 w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 text-sm focus:outline-none"
            />
          </div>

          <button
            onClick={() => {
              setSelectedPartner(null);
              setShowFormModal(true);
            }}
            className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 sm:w-auto"
          >
            <UserPlus className="h-4 w-4" />
            Tambah Mitra Baru
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.id}
              partner={partner}
              onClick={() => {
                setSelectedPartner(partner);
                setShowDetailModal(true);
              }}
            />
          ))}
        </div>
      </section>

      <PartnerFormModal
        open={showFormModal}
        partner={selectedPartner}
        onClose={() => {
          setShowFormModal(false);
        }}
      />

      <PartnerDetailModal
        open={showDetailModal}
        partner={selectedPartner}
        onClose={() => setShowDetailModal(false)}
        onEdit={() => {
          setShowDetailModal(false);
          setShowFormModal(true);
        }}
      />
    </>
  );
}
