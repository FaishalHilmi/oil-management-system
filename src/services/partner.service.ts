import { supabase } from "@/lib/supabase";

import type {
  Partner,
  PartnerDetail,
  PartnerPayload,
  PartnerHistory,
} from "@/types";

export async function getPartners(): Promise<Partner[]> {
  const { data, error } = await supabase
    .from("partner_statistics")
    .select("*")
    .order("partner_name");

  if (error) throw error;

  return data ?? [];
}

export async function getPartnerById(id: number): Promise<Partner | null> {
  const { data, error } = await supabase
    .from("partner_statistics")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return data;
}

export async function createPartner(payload: PartnerPayload) {
  const { data, error } = await supabase
    .from("partners")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function updatePartner(id: number, payload: PartnerPayload) {
  const { data, error } = await supabase
    .from("partners")
    .update({
      ...payload,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function deletePartner(id: number) {
  const partner = await getPartnerById(id);

  if (!partner) {
    throw new Error("Partner tidak ditemukan.");
  }

  if (partner.total_transaction > 0) {
    throw new Error("Partner yang memiliki transaksi tidak dapat dihapus.");
  }

  const { error } = await supabase.from("partners").delete().eq("id", id);

  if (error) throw error;
}
