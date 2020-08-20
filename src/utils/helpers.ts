export function omit(keys: any[] | any, obj: any) {
  if (!keys.length) return obj
  const { [keys.pop()]: omitted, ...rest } = obj
  return omit(keys, rest)
}
