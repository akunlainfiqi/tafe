"use client";

import { Tenants } from "@/types/tenant";
import { ColumnDef } from "@tanstack/react-table";

export const tenantsColumns: ColumnDef<Tenants>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "active_until",
    header: "Active Until",
    accessorFn: (data) => {
      if (data.active_until == 0) {
        return "Inactive";
      }
      return new Date(data.active_until * 1000).toLocaleDateString();
    },
  },
];
