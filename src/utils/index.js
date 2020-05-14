export const removeProtocols = (url) => {
  return url.replace(/^https?\:\/\//i, "");
};



export const nutralizeTitle = title => {
  return title
    .toLocaleLowerCase()
    .split(" ")
    .join("-")
    .replace(/[.*+?^$/{}()!%#>@=:;'|[\]\\]/g, "");
};