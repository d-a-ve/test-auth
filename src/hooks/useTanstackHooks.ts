import {
  DefaultError,
  QueryClient,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

export function useCustomQuery<
  TQueryFnData = unknown,
  TError = DefaultError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryOptions: UndefinedInitialDataOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  >,
  queryClient?: QueryClient,
) {
  return useQuery(queryOptions, queryClient);
}

export function useCustomMutation<
  TData = unknown,
  TError = DefaultError,
  TVariables = void,
  TContext = unknown,
>(
  mutationOptions: UseMutationOptions<TData, TError, TVariables, TContext>,
  queryClient?: QueryClient,
) {
  return useMutation(mutationOptions, queryClient);
}
