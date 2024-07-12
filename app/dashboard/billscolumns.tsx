"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bills } from "@/types/bills";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export const billscolumns: ColumnDef<Bills>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "tenant_name",
    header: "Application",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      var res: String;
      res = row.getValue("status");
      switch (res) {
        case "waiting_payment":
          res = "Waiting Payment";
          break;
        case "paid":
          res = "Paid";
          break;
        case "overdue":
          res = "Overdue";
          break;
        case "cancelled":
          res = "Cancelled";
          break;
        default:
          res = "Unknown";
          break;
      }

      return (
        <Badge variant="default" className="capitalize">
          {res}
        </Badge>
      );
    },
  },
  {
    accessorKey: "due_date",
    header: "Due Date",
    accessorFn: (row) =>
      new Date(row.due_date * 1000).toLocaleDateString("id-ID"),
  },
];
