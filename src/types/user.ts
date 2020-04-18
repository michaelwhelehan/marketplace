export type OnlineStatusType = 'online' | 'away' | 'busy' | 'offline'

export type MemberType = {
  name: string
  profilePictureUrl: string
  onlineStatus: OnlineStatusType
  lastSeen: Date
}
