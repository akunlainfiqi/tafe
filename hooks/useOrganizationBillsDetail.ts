import { Bills } from "@/types/bills";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useOrganizationBillsDetails = (
  organizationId: string,
  billsId: string
) => {
  type BillsDto = {
    status: string;
    data: Bills;
  };

  const url = `${process.env.NEXT_PUBLIC_API}/v1/jwt/organizations/${organizationId}/bills/${billsId}`;

  const {
    data: bills,
    mutate,
    isLoading,
  } = useSWR<BillsDto>(billsId ? url : null, fetcher);

  return { bills: bills?.data || ({} as Bills), mutate, isLoading };
};

export default useOrganizationBillsDetails;
