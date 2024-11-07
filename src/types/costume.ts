import { GetCostumesResponse } from "@/reducers/appsApi/injections/costumesApi";

export type Costume = {
  name: string;
  height: number;
  width: number;
  image: string;
};

export type DndData = Costume;
