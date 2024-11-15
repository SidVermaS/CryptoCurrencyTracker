export type PathParamsI = Record<string, unknown>
export type QueryParamsI = Record<string, unknown>
export type PayloadI = Record<string, unknown>
export type APIParamsI = {
  url: string;
}

export type GetParamsI = APIParamsI & {
  pathParams?: PathParamsI,
  queryParams?: QueryParamsI,
}
export type PostParamsI = APIParamsI & PathParamsI & {
  pathParams?: PathParamsI,
  queryParams?: QueryParamsI,
  payload?: PayloadI,
}
export type PatchParamsI = PostParamsI
export type PutParamsI = PostParamsI
export type DeleteParamsI = APIParamsI & {
  pathParams: PathParamsI,
}
export type ConfigParamsI = {

  queryParams?: QueryParamsI,
  payload?: PayloadI,
}
export type ApiResponseI = {
  error?: unknown | null
  data?: unknown | null
  status?: number | null
}
export type ApiHookI<T> = (params: T) => Promise<ApiResponseI>