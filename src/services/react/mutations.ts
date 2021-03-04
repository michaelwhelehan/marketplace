import { mutationFactory } from './useMutation'

// User mutations
export const usePasswordChange = mutationFactory('setPasswordChange')
export const useAccountUpdate = mutationFactory('setAccountUpdate')
export const useAccountNotificationsUpdate = mutationFactory(
  'setAccountNotificationsUpdate',
)
export const useSetPassword = mutationFactory('setPassword')
