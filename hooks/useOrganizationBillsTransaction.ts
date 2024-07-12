import fetcher from "@/lib/fetcher";
import useSWR from "swr";
import { Transaction } from "@/types/transaction";

const useOrganizationBillsTransaction = (
  organizationId: string,
  billsId: string
) => {
  type Dto = {
    status: string;
    data: Transaction;
  };

  const url = `${process.env.NEXT_PUBLIC_API}/v1/jwt/organizations/${organizationId}/bills/${billsId}/transaction`;

  const {
    data: res,
    mutate,
    isLoading,
  } = useSWR<Dto>(billsId ? url : null, fetcher);

  return {
    transaction: res?.data || ({} as Transaction),
    mutate,
    isLoading,
  };
};

export default useOrganizationBillsTransaction;
