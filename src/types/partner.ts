export type PartnerStatus = "Aktif" | "Nonaktif";

export interface PartnerHistory {
  id: number;
  date: string;
  transaction_number: string;
  quantity: number;
  profit: number;
  status: "Berjalan" | "Selesai" | "Batal";
}

export interface Partner {
  id: number;
  partner_name: string;
  phone_number: string;
  address: string;
  status: PartnerStatus;

  total_transaction: number;
  total_quantity: number;
  total_capital: number;
  total_profit: number;
  average_profit: number;

  created_at: string;
  updated_at: string;
}

export interface PartnerDetail extends Partner {
  histories: PartnerHistory[];
}

export interface PartnerPayload {
  partner_name: string;
  phone_number: string;
  address: string;
  status: PartnerStatus;
}
