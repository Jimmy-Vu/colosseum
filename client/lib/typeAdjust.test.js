import typeAdjust from "./typeAdjust";

test('take a an array in JSON format and return an joined string of each elment with the first char capitalized', () => {
  expect(typeAdjust('{"powerlifting","weightlifting"}')).toEqual('Powerlifting, Weightlifting');
});
