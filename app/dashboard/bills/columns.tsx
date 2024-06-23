"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

export type Bills = {
  id: string;
  organizationId: string;
  tenantId: string;
  tenantName: string;
  amount: number;
  status: "waiting_payment" | "paid" | "overdue" | "cancelled";
  dueDate: number;
  createdAt: number;
};

export const columns: ColumnDef<Bills>[] = [
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
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    accessorFn: (row) => new Date(row.dueDate).toLocaleDateString(),
  },
  {
    accessorKey: "createdAt",
    header: "Invoice Date",
    accessorFn: (row) => new Date(row.createdAt).toLocaleDateString(),
  },
  {
    id: "actions",
    header: "Actions",
    cell: () => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => {}}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
