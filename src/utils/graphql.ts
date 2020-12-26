export function addEdge<T>({
  position,
  prevEdges,
  nextEdge,
}: {
  position: 'start' | 'end'
  prevEdges: T[]
  nextEdge: T
}): T[] {
  const nextEdges: T[] =
    position === 'start' ? [nextEdge, ...prevEdges] : [...prevEdges, nextEdge]
  return nextEdges
}
