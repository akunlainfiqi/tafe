import { Organization } from "@/types/organization";
import fetcher from "@/lib/fetcher";
import useSWR from "swr";

const useOrganizationDetail = (organizationId: string) => {
  type OrganizationDto = {
    status: string;
    data: Organization;
  };

  const url = `${process.env.NEXT_PUBLIC_API}/v1/jwt/organizations/${organizationId}`;

  const {
    data: organization,
    mutate,
    isLoading,
  } = useSWR<OrganizationDto>(organizationId ? url : null, fetcher);

  return {
    organization: organization?.data || ({} as Organization),
    mutate,
    isLoading,
  };
};

export default useOrganizationDetail;
