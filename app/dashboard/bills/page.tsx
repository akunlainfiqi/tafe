"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useOrganizationBills from "@/hooks/useOrganizationBills";
import { OrganizationContext } from "@/providers/OrganizationProvider";

export default async function BillsHome() {
  const { selectedOrganization } = useContext(OrganizationContext);
  const {
    bills: data,
    mutate,
    isLoading,
  } = useOrganizationBills(selectedOrganization?.organizationId || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Bills</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}
