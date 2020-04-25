import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function fromNow(date: Date): string {
  return dayjs(date).from(new Date())
}

export function formatDate(date: Date, format: string): string {
  return dayjs(date).format(format)
}
