import { Search, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import PageHeader from "@/components/shared/PageHeader";
import PartnerCard from "@/components/partner/PartnerCard";
import PartnerFormModal from "@/components/partner/PartnerFormModal";
import PartnerDetailModal from "@/components/partner/PartnerDetailModal";
import type { Partner, PartnerPayload } from "@/types";
import {
  createPartner,
  deletePartner,
  getPartnerById,
  getPartners,
  updatePartner,
} from "@/services/partner.service";
import ConfirmDialog from "@/components/shared/ConfirmDialog";
import { toast } from "sonner";
import { Toaster } from "sonner";
import PartnerCardSkeleton from "@/components/partner/PartnerCardSkeleton";
import EmptyState from "@/components/shared/EmptyState";

export default function PartnerPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const loadPartners = async () => {
    try {
      setLoading(true);

      const data = await getPartners();

      setPartners(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPartners();
  }, []);

  const handleSavePartner = async (payload: PartnerPayload) => {
    try {
      if (selectedPartner) {
        await updatePartner(selectedPartner.id, payload);

        toast.success("Mitra berhasil diperbarui.");
      } else {
        await createPartner(payload);

        toast.success("Mitra berhasil ditambahkan.");
      }

      await loadPartners();

      setShowFormModal(false);

      setSelectedPartner(null);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Terjadi kesalahan.",
      );
    }
  };

  const handleOpenDetail = async (id: number) => {
    try {
      const partner = await getPartnerById(id);

      if (!partner) {
        toast.error("Data mitra tidak ditemukan.");
        return;
      }

      setSelectedPartner(partner);

      setShowDetailModal(true);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Terjadi kesalahan.",
      );
    }
  };

  const handleDeletePartner = async () => {
    if (!selectedPartner) return;

    try {
      setDeleting(true);

      await deletePartner(selectedPartner.id);

      toast.success("Mitra berhasil dihapus.");

      setShowDeleteDialog(false);

      setShowDetailModal(false);

      setSelectedPartner(null);

      await loadPartners();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Terjadi kesalahan.",
      );
    } finally {
      setDeleting(false);
    }
  };

  const filteredPartners = partners.filter((partner) =>
    partner.partner_name.toLowerCase().includes(search.toLowerCase()),
  );

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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

        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <PartnerCardSkeleton key={index} />
            ))}
          </div>
        ) : filteredPartners.length === 0 ? (
          <EmptyState
            title="Belum Ada Mitra"
            description="Tambahkan mitra pertama untuk mulai mencatat transaksi."
          />
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPartners.map((partner) => (
              <PartnerCard
                key={partner.id}
                partner={partner}
                onClick={() => handleOpenDetail(partner.id)}
              />
            ))}
          </div>
        )}
      </section>

      <PartnerFormModal
        open={showFormModal}
        partner={selectedPartner}
        onSave={handleSavePartner}
        onClose={() => {
          setShowFormModal(false);
        }}
      />

      <PartnerDetailModal
        open={showDetailModal}
        partner={selectedPartner}
        onClose={() => setShowDetailModal(false)}
        onDelete={() => {
          setShowDeleteDialog(true);
        }}
        onEdit={() => {
          setShowDetailModal(false);
          setShowFormModal(true);
        }}
      />

      <ConfirmDialog
        open={showDeleteDialog}
        title="Hapus Mitra"
        description={`Apakah Anda yakin ingin menghapus mitra "${selectedPartner?.partner_name}"? Tindakan ini tidak dapat dibatalkan.`}
        loading={deleting}
        onClose={() => setShowDeleteDialog(false)}
        onConfirm={handleDeletePartner}
      />

      <Toaster position="bottom-right" richColors closeButton />
    </>
  );
}
