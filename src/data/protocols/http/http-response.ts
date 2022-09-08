export enum HttpStatusCode {
  unathorized = 401,
  ok = 200,
  noContent = 204,
}

export type HttpResponse = {
  statusCode: HttpStatusCode
  body?: any
}
