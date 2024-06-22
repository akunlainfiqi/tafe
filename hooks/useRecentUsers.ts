import fetcher from "@/lib/fetcher";
import { User } from "@/types/user";
import useSWR from "swr";

const useRecentUsers = ({
  organizationId,
}: {
  organizationId: string | undefined;
}) => {
  const url = `${process.env.NEXT_PUBLIC_IAM_HOST}/organization/recent-users?organization_id=${organizationId}`;

  const {
    data: users,
    mutate,
    isLoading,
  } = useSWR<User[]>(organizationId ? url : null, fetcher);

  return { users: users || [], mutate, isLoading };
};

export default useRecentUsers;
