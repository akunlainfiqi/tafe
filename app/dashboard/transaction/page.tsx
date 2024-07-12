"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrganizationContext } from "@/providers/OrganizationProvider";
import useOrganizationTransaction from "@/hooks/useOrganizationTransaction";

export default function TransactionsHome() {
  const { selectedOrganization } = useContext(OrganizationContext);
  const {
    transaction: data,
    mutate,
    isLoading,
  } = useOrganizationTransaction(selectedOrganization?.organizationId || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}
