import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

type Camelcase<S extends string> = S extends `${infer X}_${infer Y}${infer Z}`
  ? `${Lowercase<X>}${Uppercase<Y>}${Camelcase<Z>}`
  : Lowercase<S>;

// MEMO: 配列に対して適応できないので注意が必要
export type KeysToCamelcase<T> = {
  [K in keyof T as Camelcase<string & K>]: T[K] extends Record<string, unknown>
    ? KeysToCamelcase<T[K]>
    : T[K];
};
//指定されたkeyの型を配列に変換する
export type Arrayable<T, K extends keyof T> = {
  [key in keyof T]: key extends K ? NonNullable<T[key]>[] : T[key];
};

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const baseQuery = fetchBaseQuery({
  baseUrl,
  paramsSerializer: (params) => {
    return Object.keys(params)
      .filter((k) => {
        if (typeof params[k] === "number" && params[k] >= 0) return true;
        return params[k];
      })
      .flatMap((k) => {
        if (params[k] instanceof Array) {
          return params[k].map(
            (v: string) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`
          );
        }
        return `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`;
      })
      .join("&");
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export const baseApi = createApi({
  reducerPath: "appsApi",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
