export function addEdge<T>({
  position,
  prevEdges,
  nextEdge,
}: {
  position: 'start' | 'end'
  prevEdges: T[]
  nextEdge: T | T[]
}): T[] {
  const edgesToAdd = Array.isArray(nextEdge) ? nextEdge : [nextEdge]
  const nextEdges: T[] =
    position === 'start'
      ? [...edgesToAdd, ...prevEdges]
      : [...prevEdges, ...edgesToAdd]
  return nextEdges
}
