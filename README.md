testcafe-2140
=============

Example regression test for bug [DevExpress/testcafe-hammerhead#2140](https://github.com/DevExpress/testcafe-hammerhead/issues/2140).

Run against GitHub pages of this repo:

```sh
testcafe chrome test-gh.ts
```

Run locally:

```sh
python -m SimpleHTTPServer 80 &
testcafe chrome test.ts
```

The problem is that the following two expressions return the same thing when visiting the page in a browser:

```js
window.location.origin
new Request('/').url
```

But the second one is something like `http://0.0.0.0:12345/8RWZTuU_s/https://bxt.github.io/testcafe-2140/` when run via testcafe.
