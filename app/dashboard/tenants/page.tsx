"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { OrganizationContext } from "@/providers/OrganizationProvider";
import useOrganizationTenants from "@/hooks/useOrganizationTenants";

export default function TenantsHome() {
  const { selectedOrganization } = useContext(OrganizationContext);
  const {
    tenants: data,
    mutate,
    isLoading,
  } = useOrganizationTenants(selectedOrganization?.organizationId || "");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tenants</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={data} />
        </CardContent>
      </Card>
    </div>
  );
}
