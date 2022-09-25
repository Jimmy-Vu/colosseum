function typeAdjust(string) {
  const splitString = string.replace(/[\{\}"]/g, "").split(',');
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].includes('-')) {
      const subArray = [];
      splitString[i].split('-').forEach(word => subArray.push(capitalize(word)));
      splitString[i] = subArray.join(' ');
    } else {
      splitString[i] = capitalize(splitString[i]);
    }
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