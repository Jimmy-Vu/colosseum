import editTypeAdjust from "./editTypeAdjust";

test('filter out unnecessary chars and split the elements into an array', () => {
  expect('{"powerlifting","weightlifting"}'.replace(/[\{\}"]/g, "").split(',')).toStrictEqual(['powerlifting', 'weightlifting']);
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
