/* eslint-disable react/no-children-prop */
"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { useContext } from "react";
import React from "react";
import Spinner from "@/components/ui/spinner";
import { OrganizationContext } from "@/providers/OrganizationProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { tenantsColumns } from "./tenantscolumns";
import useOrganizationTenants from "@/hooks/useOrganizationTenants";
import useOrganizationBills from "@/hooks/useOrganizationBills";
import { billscolumns } from "./billscolumns";

export default function Dashboard() {
  const { userInfo } = useContext(AuthContext);
  const { selectedOrganization, organizations } =
    useContext(OrganizationContext);

  const {
    tenants: tenantsdata,
    mutate,
    isLoading: tenantIslLoading,
  } = useOrganizationTenants(selectedOrganization?.organizationId || "");
  const {
    bills: billsData,
    mutate: billsMutate,
    isLoading: billsIsLoading,
  } = useOrganizationBills(selectedOrganization?.organizationId || "");
  if (!userInfo) {
    return (
      <div className="flex flex-col min-h-[80vh] items-center justify-center gap-6">
        <Spinner />
      </div>
    );
  }

  if (organizations.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">No Organization</h3>
          <p className="text-sm text-muted-foreground">
            It seems you aren&apos;t affiliated with any organization yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex flex-col gap-4 h-[80vh] ">
      <div className="flex-col md:flex gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex-1 space-y-4">
              <h3 className="text-lg font-semibold">
                Welcome back, {userInfo.name}
              </h3>
              <p className="text-sm">
                Your current organization is {selectedOrganization?.name}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tenants</CardTitle>
          </CardHeader>
          <CardContent>
            {tenantIslLoading && <Spinner />}
            <DataTable columns={tenantsColumns} data={tenantsdata} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bills</CardTitle>
          </CardHeader>
          <CardContent>
            {billsIsLoading && <Spinner />}
            <DataTable columns={billscolumns} data={billsData} />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
