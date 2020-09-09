export function omit(keys: any[] | any, obj: any) {
  if (!keys.length) return obj
  const { [keys.pop()]: omitted, ...rest } = obj
  return omit(keys, rest)
}

export function percentToValue(percent: number, maxValue: number) {
  return Math.round((percent / 100) * maxValue)
}

export function valueToPercent(value: number, maxValue: number) {
  return Math.round((value / maxValue) * 100)
}
