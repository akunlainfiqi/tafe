"use client";
import { Transaction } from "@/types/transaction";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "transaction_type",
    header: "Transaction Type",
  },
  {
    header: "Transaction Date",
    accessorFn: (row) =>
      new Date(row.transaction_timestamp * 1000).toLocaleDateString("id-ID"),
  },
];
