To run it
- use Node 18
- npm install
- npm run test

Then it fails with 
```
/Users/julian.calleja/Downloads/react/node_modules/lighthouse/core/runner.js:77
    const moduleDir = (0, _esmutils.getModuleDirectory)(import.meta);
                                                               ^^^^

    SyntaxError: Cannot use 'import.meta' outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1728:14)
      at Object.<anonymous> (node_modules/lighthouse/core/index.js:63:17)
```
This is after swc tries to compile it. If we remove these lines https://github.com/jucallej/example-lighthouse-failing/blob/baa87bf8652cb3191a2d8a58c38ee841bc89fe32/package.json#L42-L44 then swc won't try to change it and it fails with
```
 /Users/julian.calleja/Downloads/react/node_modules/lighthouse/core/index.js:7
    import log from 'lighthouse-logger';
    ^^^^^^

    SyntaxError: Cannot use import statement outside a module
```

If we comment out lighthouse as per the comment https://github.com/jucallej/example-lighthouse-failing/blob/baa87bf8652cb3191a2d8a58c38ee841bc89fe32/src/test.test.ts#L6 importing other libraries does work normally and npm run test works 