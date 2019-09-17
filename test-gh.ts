import {Selector} from 'testcafe';

fixture`testcafe 2140`.page`https://bxt.github.io/testcafe-2140/`;

test(`has the correct value in Request('/').url on GitHub`, async t => {
  await t
  .expect(Selector('*').withText('"rootRequestUrl": "https://bxt.github.io/"').visible)
  .ok();
});
