export type ResponseType<T> = {
  status: "success" | "error";
  code:
    | 100
    | 101
    | 200
    | 201
    | 202
    | 204
    | 300
    | 301
    | 302
    | 304
    | 400
    | 401
    | 403
    | 404
    | 500
    | 501
    | 502
    | 503;
  message: string;
  data: T;
};
