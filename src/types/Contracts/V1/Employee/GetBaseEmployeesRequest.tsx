import { Pagination } from "../Common/Pagination";

export interface GetBaseEmployeesRequest {
  full_name: string | null;
  unit: string | null;
  project: string | null;
  role: string | null;
  position: string | null;
  city: string | null;
  pagination: Pagination;
}
