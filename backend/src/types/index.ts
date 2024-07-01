export type RequestError = {
  field: string;
  message: string;
};

export type PaginatedItems<T> = {
  totalPages: number;
  currentPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  items: T[];
};
