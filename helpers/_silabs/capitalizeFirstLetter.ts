export function capitalizeFirstLetter(value: string, delimiter: string = "-") {
  if (!name) return "";
  return value
    .split(delimiter)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
