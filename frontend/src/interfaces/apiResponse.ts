export interface IApiResponse<T> {
  data: T;
  message?: string;
  succeed:boolean;
}
    