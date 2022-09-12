import { UnexpectedError, InvalidCredentialsError } from '../../../domain/errors'
import { AccountModel } from '../../../domain/models'
import { Authentication, AuthenticationParams } from '../../../domain/usecases'
import { HttpPostClient, HttpStatusCode } from '../../protocols/http'

export class RemoteAuthentication implements Authentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
  ) {}

  async auth (params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({ url: this.url, body: params })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      case HttpStatusCode.ok:{
        const account: AccountModel = httpResponse.body ?? {} as AccountModel
        return account
      }
      default:
        throw new UnexpectedError()
    }
  }
}
