export type Transaction = {
  id: string;
  organization_id: string;
  bills_id: string;
  amount: number;
  transaction_type: string;
  transaction_timestamp: number;
};
