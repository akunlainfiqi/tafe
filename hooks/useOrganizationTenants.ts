import { Tenants } from "@/types/tenant";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useOrganizationTenants = (organizationId: string) => {
  type BillsDto = {
    status: string;
    data: Tenants[];
  };

  const url = `${process.env.NEXT_PUBLIC_API}/v1/jwt/organizations/${organizationId}/tenants`;

  const {
    data: res,
    mutate,
    isLoading,
  } = useSWR<BillsDto>(organizationId ? url : null, fetcher);

  return { tenants: res?.data || [], mutate, isLoading };
};

export default useOrganizationTenants;
