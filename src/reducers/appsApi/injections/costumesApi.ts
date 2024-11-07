import { baseApi } from "../baseApi";

export type GetCostumesResponse = {
  name: string;
  height: number;
  width: number;
  image: string;
}[];

export const costumesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCostumes: builder.query<GetCostumesResponse, void>({
      query: () => ({
        url: "costumes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCostumesQuery } = costumesApi;
