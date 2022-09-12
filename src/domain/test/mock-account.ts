import { faker } from '@faker-js/faker'
import { AccountModel } from '../models'
import { AuthenticationParams } from '../usecases'

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
