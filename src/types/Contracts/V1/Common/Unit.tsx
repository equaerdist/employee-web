import { BaseEmployee } from "./BaseEmployee";

export interface Unit {
  id: number;
  name: string;
  parent_id: number | null;
  leader_full_name: string;
  participants: BaseEmployee[];
  units: Unit[];
}
