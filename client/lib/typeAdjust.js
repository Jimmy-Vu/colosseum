function typeAdjust(string) {
  const splitString = string.replace(/[\{\}"]/g, "").split(',');
  for (let i = 0; i < splitString.length; i++) {
    splitString[i] = capitalize(splitString[i]);
  }
  return splitString.join(', ');
}

function capitalize(string) {
  if (!string) {
    return string;
  }

  return string[0].toUpperCase() + string.slice(1);
}

export default typeAdjust;
