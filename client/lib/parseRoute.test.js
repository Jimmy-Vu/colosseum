import parseRoute from "./parseRoute";

test('parse the route to require an object with correct path and params properties ', () => {
  expect(parseRoute('#gyms?gymId=1')).toEqual({ path:'gyms', params: new URLSearchParams('gymId=1') })
});
