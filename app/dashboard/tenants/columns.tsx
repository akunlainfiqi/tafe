"use client";

import { Tenants } from "@/types/tenant";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Tenants>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Tenant Name",
  },
  {
    accessorKey: "app_name",
    header: "App Name",
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
