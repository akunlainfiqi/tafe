import { Bills } from "@/app/dashboard/bills/columns";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useOrganizationBills = (organizationId: string) => {
  type BillsDto = {
    status: string;
    data: Bills[];
  };

  const url = `${process.env.NEXT_PUBLIC_API}/v1/jwt/organizations/${organizationId}/bills`;

  const {
    data: bills,
    mutate,
    isLoading,
  } = useSWR<BillsDto>(organizationId ? url : null, fetcher);

  return { bills: bills?.data || [], mutate, isLoading };
};

export default useOrganizationBills;
