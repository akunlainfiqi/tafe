import { Transaction } from "@/types/transaction";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useOrganizationTransaction = (organizationId: string) => {
  type Dto = {
    status: string;
    data: Transaction[];
  };

  const url = `${process.env.NEXT_PUBLIC_API}/v1/jwt/organizations/${organizationId}/transactions`;

  const {
    data: res,
    mutate,
    isLoading,
  } = useSWR<Dto>(organizationId ? url : null, fetcher);

  return { transaction: res?.data || [], mutate, isLoading };
};

export default useOrganizationTransaction;
