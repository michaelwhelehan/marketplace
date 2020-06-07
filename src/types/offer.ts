import { Currency } from './currency'
import { UserType } from './user'

export type OfferType = {
  creator: UserType
  amount: number
  currency: Currency
  coverLetter: string
}
