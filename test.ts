import {Selector} from 'testcafe';

fixture`testcafe 2140`.page`http://localhost/`;

test(`alows to follow an insider as `, async t => {
  await t
  .expect(Selector('*').withText('"rootRequestUrl": "http://localhost/"').visible)
  .ok();
});
