export default function removeEncodedSpaces(str) {
  return str.replace(/%20/g, " ");
}
