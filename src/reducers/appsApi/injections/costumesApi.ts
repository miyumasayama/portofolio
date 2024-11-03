import { baseApi } from "../baseApi";

type GetCostumesResponse = {
  name: string;
  url: string;
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
