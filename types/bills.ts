export type Bills = {
  id: string;
  organizationId: string;
  tenantId: string;
  tenant_name: string;
  amount: number;
  status: "waiting_payment" | "paid" | "overdue" | "cancelled";
  due_date: number;
  created_at: number;
};
