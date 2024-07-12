"use client";
import { useContext } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useOrganizationBills from "@/hooks/useOrganizationBills";
import { OrganizationContext } from "@/providers/OrganizationProvider";
import useOrganizationBillsDetails from "@/hooks/useOrganizationBillsDetail";
import useOrganizationBillsTransaction from "@/hooks/useOrganizationBillsTransaction";

export default function BillsHome({ params }: { params: { id: string } }) {
  const { selectedOrganization } = useContext(OrganizationContext);
  const {
    bills: billsdata,
    mutate: mutateBills,
    isLoading: billsIsLoading,
  } = useOrganizationBillsDetails(
    selectedOrganization?.organizationId || "",
    params.id
  );

  const {
    transaction: transactionData,
    mutate: mutateTransaction,
    isLoading: isLoadingTransaction,
  } = useOrganizationBillsTransaction(
    selectedOrganization?.organizationId || "",
    params.id
  );

  if (billsIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Bills</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p>Bill ID: {billsdata.id}</p>
            <p>Tenant Name: {billsdata.tenant_name}</p>
            <p>Amount: {billsdata.amount}</p>
            <p>
              Due Date:{" "}
              {new Date(billsdata.due_date * 1000).toLocaleDateString()}
            </p>
            <p>Status: {billsdata.status}</p>
          </div>
        </CardContent>
      </Card>
      {billsdata.status == "paid" ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p>Transaction ID: {transactionData.id}</p>
              <p>Amount: {transactionData.amount}</p>
              <p>Transaction Type: {transactionData.transaction_type}</p>
              <p>
                Transaction Date:{" "}
                {new Date(
                  transactionData.transaction_timestamp * 1000
                ).toLocaleDateString()}
              </p>
            </div>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
