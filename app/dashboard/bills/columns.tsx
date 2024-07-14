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
import fetcher from "@/lib/fetcher";
import { Bills } from "@/types/bills";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";

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
    accessorKey: "due_date",
    header: "Due Date",
    accessorFn: (row) =>
      new Date(row.due_date * 1000).toLocaleDateString("id-ID"),
  },
  {
    accessorKey: "created_at",
    header: "Invoice Date",
    accessorFn: (row) =>
      new Date(row.created_at * 1000).toLocaleDateString("id-ID"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
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
            {row.original.status === "waiting_payment" && (
              <DropdownMenuItem
                onClick={() => {
                  fetcher(
                    `${process.env.NEXT_PUBLIC_API}/v1/jwt/organizations/${row.original.organization_id}/bills/${row.original.id}/payment`,
                    "GET"
                  ).then((res) => {
                    // console.log(res.data.redirect_url);
                    window.open(res.data.redirect_url);
                  });
                }}>
                Pay
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
