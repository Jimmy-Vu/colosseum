export default function typeAdjust(string: string): string {
  const splitString = string.replace(/[\{\}"]/g, "").split(',');
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].includes('-')) {
      let subArray:string[];
      splitString[i].split('-').forEach(word => subArray.push(capitalize(word)));
      splitString[i] = subArray.join(' ');
    } else {
      splitString[i] = capitalize(splitString[i]);
    }
  }
  return splitString.join(', ');
}

function capitalize(string: string) {
  if (!string) {
    return string;
  }

  return string[0].toUpperCase() + string.slice(1);
}
