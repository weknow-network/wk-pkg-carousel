export const getEnumValues = (e: Record<string, unknown>): unknown[] =>
  Object.entries(e)
    .filter((m) => m[0] !== 'displayName' && !m[0].startsWith('_'))
    .map((m) => m[1]);
