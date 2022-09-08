import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error'
import { AuthenticationParams } from '../../../domain/usecases/authentication'
import { HttpPostClient } from '../../protocols/http/http-post-client'
import { HttpStatusCode } from '../../protocols/http/http-response'

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpPostClient
  ) {}

  async auth (params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpClient.post({ url: this.url, body: params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError()
      case HttpStatusCode.ok:
        return await Promise.resolve()
      default:
        return await Promise.resolve()
    }
  }
}
