import {Selector} from 'testcafe';

fixture`testcafe 2140`.page`http://localhost/`;

test(`has the correct value in Request('/').url on localhost`, async t => {
  await t
  .expect(Selector('*').withText('"rootRequestUrl": "http://localhost/"').visible)
  .ok();
});
