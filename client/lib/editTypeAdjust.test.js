import editTypeAdjust from "./editTypeAdjust";

test('filter out unnecessary chars', () => {
  expect('{"powerlifting","weightlifting"}'.replace(/[\{\}"]/g, "")).toBe('powerlifting,weightlifting');
});

test('split the elements into an array', () => {
  expect('powerlifting,weightlifting'.split(',')).toStrictEqual(['powerlifting', 'weightlifting']);
});

test('return the type object with correct true/false values for the properties', () => {
  expect(editTypeAdjust('{"powerlifting","weightlifting"}')).toEqual({
    commercial: false,
    powerlifting: true,
    weightlifting: true,
    crossfit: false,
    climbing: false,
    boxing: false,
    ['muay-thai']: false,
    taekwondo: false,
    karate: false,
    ['brazilian-ji-jijutsu']: false,
    ['krav-maga']: false,
    wrestling: false,
    kickboxing: false
  });
});

test('return an object with all properties set to false when input is empty', () => {
  expect(editTypeAdjust('')).toEqual({
    commercial: false,
    powerlifting: false,
    weightlifting: false,
    crossfit: false,
    climbing: false,
    boxing: false,
    ['muay-thai']: false,
    taekwondo: false,
    karate: false,
    ['brazilian-ji-jijutsu']: false,
    ['krav-maga']: false,
    wrestling: false,
    kickboxing: false
  });
});

test('return an object with only the commercial property set to true when input is "{commercial}"', () => {
  expect(editTypeAdjust('{commercial}')).toEqual({
    commercial: true,
    powerlifting: false,
    weightlifting: false,
    crossfit: false,
    climbing: false,
    boxing: false,
    ['muay-thai']: false,
    taekwondo: false,
    karate: false,
    ['brazilian-ji-jijutsu']: false,
    ['krav-maga']: false,
    wrestling: false,
    kickboxing: false
  });
});

test('ignore unrecognized property names', () => {
  expect(editTypeAdjust('{"powerlifting","weightlifting","swimming"}')).toEqual({
    commercial: false,
    powerlifting: true,
    weightlifting: true,
    crossfit: false,
    climbing: false,
    boxing: false,
    ['muay-thai']: false,
    taekwondo: false,
    karate: false,
    ['brazilian-ji-jijutsu']: false,
    ['krav-maga']: false,
    wrestling: false,
    kickboxing: false
  });
});
