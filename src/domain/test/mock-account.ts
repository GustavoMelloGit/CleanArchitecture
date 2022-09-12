import { faker } from '@faker-js/faker'
import { AccountModel } from '../models/account-model'
import { AuthenticationParams } from '../usecases/authentication'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}

export const mockAccountModel = (): AccountModel => {
  return {
    accessToken: faker.datatype.uuid()
  }
}
