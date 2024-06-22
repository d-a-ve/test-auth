import { queryOptions } from "@tanstack/react-query";
import { ErrorResponse, SuccessResponse } from "../http";
import { AppwriteModels } from "../lib/appwrite/config";
import { getCurrentSession } from "../lib/appwrite/session";

export const sessionQuery = queryOptions<
  SuccessResponse<AppwriteModels.Session>,
  ErrorResponse
>({
  queryKey: ["auth"],
  queryFn: async () => {
    return getCurrentSession();
  },
  retry: 0,
  retryOnMount: false,
  refetchOnWindowFocus: false,
  refetchInterval: 1000 * 60 * 15,
  refetchIntervalInBackground: true,
});
