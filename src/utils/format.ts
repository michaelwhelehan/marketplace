export function titleCase(word: string): string {
  return `${word.charAt(0).toUpperCase()}${word.substring(1).toLowerCase()}`
}
