import { Location } from "@/types/location";

export interface Tour {
  id?: string;
  name: string;
  locations?: Location[];
  price?: number;
}
