//This code needs to be refactored to just use JSON.parse

export default function editTypeAdjust(string:string) {
  const type:gymType = {
    commercial: false,
    powerlifting: false,
    weightlifting: false,
    climbing: false,
    boxing: false,
    ['muay-thai']: false,
    taekwondo: false,
    karate: false,
    ['brazilian-ji-jijutsu']: false,
    ['krav-maga']: false,
    wrestling: false,
    kickboxing: false
  };

  const splitString:string[] = string.replace(/[\{\}"]/g, "").split(',');
  for (let i = 0; i < splitString.length; i++) {
    type[splitString[i] as keyof gymType] = true;
  }

  return type;
}

interface gymType {
  commercial: boolean;
  powerlifting: boolean;
  weightlifting: boolean;
  climbing: boolean;
  boxing: boolean;
  ['muay-thai']: boolean;
  taekwondo: boolean;
  karate: boolean;
  ['brazilian-ji-jijutsu']: boolean;
  ['krav-maga']: boolean;
  wrestling: boolean;
  kickboxing: boolean;
}
