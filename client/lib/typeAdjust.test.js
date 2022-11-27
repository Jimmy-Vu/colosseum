import typeAdjust from "./typeAdjust";

test('take an array in JSON format and return an joined string of each elment with the first char capitalized', () => {
  expect(typeAdjust('{"powerlifting","weightlifting"}')).toEqual('Powerlifting, Weightlifting');
});

test('crossfit', () => {
  expect(typeAdjust('crossfit')).toEqual('Crossfit');
});
