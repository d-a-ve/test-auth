import {
  QueryClient,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { ErrorResponse } from "../http";

export function useCustomQuery<
  TQueryFnData = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryOptions: UndefinedInitialDataOptions<
    TQueryFnData,
    ErrorResponse,
    TData,
    TQueryKey
  >,
  queryClient?: QueryClient,
) {
  return useQuery(queryOptions, queryClient);
}

export function useCustomMutation<
  TData = unknown,
  TVariables = void,
  TContext = unknown,
>(
  mutationOptions: UseMutationOptions<
    TData,
    ErrorResponse,
    TVariables,
    TContext
  >,
  queryClient?: QueryClient,
) {
  return useMutation(mutationOptions, queryClient);
}
