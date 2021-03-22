export function toUrlEncode(obj) {
  const data = new URLSearchParams();

  const keys = Object.keys(obj);
  keys.forEach((key) => data.append(key, obj[key]));
  return data;
}

export function isEmpty(obj) {
  if (typeof obj === "string") {
    return obj.length === 0;
  } else if (obj instanceof Array) {
    return obj.length === 0;
  } else if (obj instanceof Set) {
    return obj.size === 0;
  } else if (obj === null) {
    return true;
  } else if (obj === undefined) {
    return true;
  } else {
    return false;
  }
}
