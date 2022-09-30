export default function editTypeAdjust(string) {
  const type = {
    commercial: false,
    powerlifting: false,
    weightlifting: false,
    climbing: false,
    boxing: false,
    ['muay-thai']: false,
    taekwondo: false,
    karate: false,
    ['brazilian-ji-jijutsu']: false
  };

  const splitString = string.replace(/[\{\}"]/g, "").split(',');
  for (let i = 0; i < splitString.length; i++) {
    type[splitString[i]] = true;
  }

  return type;
}
