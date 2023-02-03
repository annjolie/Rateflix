export type PaginationResponseType<Type> = {
  page: number;
  results: Type[];
  total_pages: number;
  total_results: number;
};
