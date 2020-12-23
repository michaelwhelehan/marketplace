import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function fromNow(date: Date): string {
  return dayjs(date).from(new Date())
}

export function differenceSeconds(date1: Date, date2: Date): number {
  return dayjs(date1).diff(date2, 'second')
}

export function formatDate(date: Date | string, format: string): string {
  return dayjs(date).format(format)
}

export function getMonthLabel(monthValue: string) {
  return months[parseInt(monthValue, 10) - 1]
}

export function getMonthOptions() {
  return months.map((month, index) => ({
    label: month,
    value: (index + 1).toString().padStart(2, '0'),
  }))
}

export function getYearOptions(yearsBack: number) {
  const to = dayjs()
  const from = to.subtract(yearsBack, 'year')
  const toYear = parseInt(to.format('YYYY'), 10)
  const fromYear = parseInt(from.format('YYYY'), 10)
  const options = []
  for (let i = toYear; i >= fromYear; i--) {
    options.push({ label: i.toString(), value: i.toString() })
  }
  return options
}
