export function toUrlEncode(obj) {
  const data = new URLSearchParams();
  
  const keys = Object.keys(obj);
  keys.forEach((key) => data.append(key, obj[key]));
  return data;
}