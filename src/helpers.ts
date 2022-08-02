export function serialize(v: any) {
  if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") {
    return v
  }
  if (v === null || v === undefined) {
    return v
  }
  if (Array.isArray(v)) {
    return v.map(serialize)
  }
  if (v instanceof Date) {
    return v.toISOString()
  }
  if (typeof v === "object") {
    const out = {}
    for (const key in v) {
      out[key] = serialize(v[key])
    }
    return out
  }
  return v + ""
}
  