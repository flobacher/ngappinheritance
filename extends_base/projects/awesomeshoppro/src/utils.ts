export function merge(baseEntries: Function[], overrides: Function[], removals?: string[]): Function[] {
  const overrideMap = {};
  overrides.forEach((override) => {
    overrideMap[override.name] = override;
  });

  // override functions with the same name
  let result = [];
  baseEntries.forEach((entry) => {
    if (overrideMap.hasOwnProperty(entry.name)) {
      result.push(overrideMap[entry.name]);
      delete overrideMap[entry.name];
    } else {
      result.push(entry);
    }
  });

  // append any additional functions
  result = result.concat(Object.values(overrideMap));

  // remove removals
  if (removals) {
    result = result.filter((entry) => {
      return !removals.includes(entry.name);
    });
  }

  return result;
}
