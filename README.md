# SnehiWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


ng build --configuration production 







Microsoft Windows [Version 10.0.19045.7548]
(c) Microsoft Corporation. All rights reserved.

D:\snehi-web>cd src

D:\snehi-web\src>cd app

D:\snehi-web\src\app>cd features

D:\snehi-web\src\app\features>ng g c startUp
Node.js version v25.9.0 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for produce see https://nodejs.org/en/about/previous-releases/.
CREATE src/app/features/start-up/start-up.spec.ts (562 bytes)
CREATE src/app/features/start-up/start-up.ts (205 bytes)
CREATE src/app/features/start-up/start-up.scss (0 bytes)
CREATE src/app/features/start-up/start-up.html (24 bytes)

D:\snehi-web\src\app\features>cd ..

D:\snehi-web\src\app>cd ..

D:\snehi-web\src>cd..

D:\snehi-web>ng server
Node.js version v25.9.0 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for produce see https://nodejs.org/en/about/previous-releases/.
Error: Unknown argument: server

D:\snehi-web>
 *  History restored 

Microsoft Windows [Version 10.0.19045.7548]
(c) Microsoft Corporation. All rights reserved.

D:\snehi-web>cd src

D:\snehi-web\src>cd app

D:\snehi-web\src\app>cd shared

D:\snehi-web\src\app\shared>cd components

D:\snehi-web\src\app\shared\components>ng g c ads-sliders
Node.js version v25.9.0 detected.
Odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
CREATE src/app/shared/components/ads-sliders/ads-sliders.spec.ts (583 bytes)
CREATE src/app/shared/components/ads-sliders/ads-sliders.ts (217 bytes)
CREATE src/app/shared/components/ads-sliders/ads-sliders.scss (0 bytes)
CREATE src/app/shared/components/ads-sliders/ads-sliders.html (27 bytes)

D:\snehi-web\src\app\shared\components>cd ..

D:\snehi-web\src\app\shared>cd ..

D:\snehi-web\src\app>cd ..

D:\snehi-web\src>cd ..

D:\snehi-web>npm install primeng @primeuix/themes
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: snehi-web@0.0.0
npm error Found: @angular/common@21.2.18
npm error node_modules/@angular/common
npm error   @angular/common@"^21.2.0" from the root project
npm error
npm error Could not resolve dependency:
npm error peer @angular/common@"^22.0.0 || ^23.0.0" from @angular/cdk@22.0.5
npm error node_modules/@angular/cdk
npm error   peer @angular/cdk@"^22.0.0" from primeng@22.0.0
npm error   node_modules/primeng
npm error     primeng@"*" from the root project
npm error
npm error Fix the upstream dependency conflict, or retry this command with --force or --legacy-peer-deps to accept an incorrect (and potentially broken) dependency resolution.
npm error
npm error
npm error For a full report see:
npm error C:\Users\Nandani\AppData\Local\npm-cache\_logs\2026-07-21T09_49_59_018Z-eresolve-report.txt
npm error A complete log of this run can be found in: C:\Users\Nandani\AppData\Local\npm-cache\_logs\2026-07-21T09_49_59_018Z-debug-0.log

D:\snehi-web>npm uninstall -g @angular/cli

removed 285 packages in 7s

D:\snehi-web>npm install -g @angular/cli@latest
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/cli@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular-devkit/architect@0.2200.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular-devkit/core@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular-devkit/schematics@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@schematics/angular@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }

added 277 packages in 1m

69 packages are looking for funding
  run `npm fund` for details

D:\snehi-web>ng update @angular/core@22 @angular/cli@22
Node.js version v25.9.0 detected.
Prior to version 27, odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
Error: Repository is not clean. Please commit or stash any changes before updating.

D:\snehi-web>ng update @angular/core@22 @angular/cli@22
Node.js version v25.9.0 detected.
Prior to version 27, odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
The installed Angular CLI version is outdated.
Installing a temporary Angular CLI versioned 22.0.7 to perform the update.
Node.js version v25.9.0 detected.
Prior to version 27, odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
Using package manager: npm
Collecting installed dependencies...
Found 26 dependencies.
Fetching dependency metadata from registry...
    Updating package.json with dependency @angular/build @ "22.0.7" (was "21.2.11")...
    Updating package.json with dependency @angular/cli @ "22.0.7" (was "21.2.11")...
    Updating package.json with dependency @angular/compiler-cli @ "22.0.7" (was "21.2.13")...
    Updating package.json with dependency typescript @ "6.0.3" (was "5.9.3")...
    Updating package.json with dependency @angular/common @ "22.0.7" (was "21.2.13")...
    Updating package.json with dependency @angular/compiler @ "22.0.7" (was "21.2.13")...    Updating package.json with dependency @angular/core @ "22.0.7" (was "21.2.13")...
    Updating package.json with dependency @angular/forms @ "22.0.7" (was "21.2.13")...
    Updating package.json with dependency @angular/platform-browser @ "22.0.7" (was "21.2.13")...
    Updating package.json with dependency @angular/platform-server @ "22.0.7" (was "21.2.13")...
    Updating package.json with dependency @angular/router @ "22.0.7" (was "21.2.13")...
    Updating package.json with dependency @angular/ssr @ "22.0.7" (was "21.2.11")...
UPDATE package.json (1184 bytes)
✔ Cleaning node modules directory
✔ Installing packages
** Executing migrations of package '@angular/cli' **

❯ Add 'istanbul-lib-instrument' to 'devDependencies' if Karma unit testing is used.
  Migration completed (No changes made).

❯ Add 'trustProxyHeaders' configuration to 'AngularNodeAppEngine' or 'AngularAppEngine'.
  For more information see: https://angular.dev/best-practices/security#configuring-trusted-proxy-headers
  Migration completed (No changes made).

❯ Update the angular workspace configuration.
  Migration completed (No changes made).

** Optional migrations of package '@angular/cli' **

This package has 2 optional migrations that can be executed.
Optional migrations may be skipped and executed after the update process, if preferred.

Select the migrations that you'd like to run [use-application-builder] Migrate application projects to the new build system. (https://angular.dev/tools/cli/build-system-migration)

❯ Migrate application projects to the new build system.
  Application projects that are using the '@angular-devkit/build-angular' package's 'browser' and/or 'browser-esbuild' builders will be migrated to use the new 'application' builder.
  You can read more about this, including known issues and limitations, here: https://angular.dev/tools/cli/build-system-migration
  Migration completed (No changes made).

** Executing migrations of package '@angular/core' **

❯ Adds the required third argument to canMatch callsites.
  Migration completed (No changes made).

❯ Adds `ChangeDetectionStrategy.Eager` to all components.

UPDATE src/app/shared/components/top-navbar/top-navbar.ts (534 bytes)
UPDATE src/app/shared/components/footer/footer.ts (439 bytes)
UPDATE src/app/app.ts (545 bytes)
UPDATE src/app/features/home/home.ts (328 bytes)
UPDATE src/app/auth/login.ts (3931 bytes)
UPDATE src/app/features/blog/blog.ts (448 bytes)
UPDATE src/app/features/contact/contact.ts (264 bytes)
UPDATE src/app/features/start-up/start-up.ts (267 bytes)
UPDATE src/app/shared/components/ads-sliders/ads-sliders.ts (279 bytes)
UPDATE src/app/shared/components/side-navbar/side-navbar.ts (300 bytes)
  Migration completed (10 files modified).

❯ Adds 'withXhr' to 'provideHttpClient' function calls when the 'HttpXhrBackend' is used.  For more information see: https://angular.dev/api/common/http/withXhr
  Migration completed (No changes made).

❯ Adds withNoIncrementalHydration() opt out to provideClientHydration() when incremental hydration is not enabled to retain pre-v22 behavior-.
UPDATE src/app/app.config.ts (511 bytes)
  Migration completed (1 file modified).

❯ Migrate broken duplicate outputs.
  Migration completed (No changes made).

❯ Wraps optional chaining expressions in $safeNavigationMigration().
  Migration completed (No changes made).

❯ Disables the 'nullishCoalescingNotNullable & optionalChainNotNullable extended diagnostics.
UPDATE tsconfig.app.json (692 bytes)
  Migration completed (1 file modified).

❯ Adds 'strictTemplates: false' in tsconfig.json when not set.
  Migration completed (No changes made).


D:\snehi-web>
D:\snehi-web>
D:\snehi-web>ng update @angular/material@22
Node.js version v25.9.0 detected.
Prior to version 27, odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
Error: Repository is not clean. Please commit or stash any changes before updating.

D:\snehi-web>ng update @angular/material@22
Node.js version v25.9.0 detected.
Prior to version 27, odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
Using package manager: npm
Collecting installed dependencies...
Found 26 dependencies.
Fetching dependency metadata from registry...
                  Package "@angular/material" has a missing peer dependency of "@angular/cdk" @ "22.0.5".
    Updating package.json with dependency @angular/material @ "22.0.5" (was "21.2.14")...UPDATE package.json (1183 bytes)
✔ Cleaning node modules directory
✔ Installing packages
** Executing migrations of package '@angular/material' **

❯ Updates Angular Material to v22.
  Migration completed (No changes made).


D:\snehi-web>npm i
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular-devkit/architect@0.2200.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular-devkit/core@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular-devkit/schematics@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/build@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/cli@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/common@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/compiler@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/compiler-cli@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/core@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/forms@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/platform-browser@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/platform-server@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/router@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@schematics/angular@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }

up to date, audited 489 packages in 3s

113 packages are looking for funding
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
npm warn allow-scripts 5 packages have install scripts not yet covered by allowScripts:
npm warn allow-scripts   @parcel/watcher@2.6.0 (install: node-gyp rebuild)
npm warn allow-scripts   esbuild@0.28.1 (postinstall: node install.js)
npm warn allow-scripts   lmdb@3.5.4 (install: node-gyp rebuild)
npm warn allow-scripts   msgpackr-extract@3.0.4 (install: node-gyp rebuild)
npm warn allow-scripts   esbuild@0.27.7 (postinstall: node install.js)
npm warn allow-scripts
npm warn allow-scripts Run `npm install-scripts ls` to review, or `npm install-scripts approve <pkg>` to allow.

D:\snehi-web>ng serve
Node.js version v25.9.0 detected.
Prior to version 27, odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
 Port 4200 is already in use.
Would you like to use a different port? (Y/n)
An unhandled exception occurred: Port 4200 is already in use. Use '--port' to specify a different port.
See "C:\Users\Nandani\AppData\Local\Temp\ng-wGh06J\angular-errors.log" for further details.
D:\snehi-web\node_modules\rxjs\dist\cjs\internal\util\reportUnhandledError.js:13
            throw err;
            ^

Error: Port 4200 is already in use. Use '--port' to specify a different port.
    at createInUseError (D:\snehi-web\node_modules\@angular\build\src\utils\check-port.js:51:12)
    at D:\snehi-web\node_modules\@angular\build\src\utils\check-port.js:76:121
    at process.processTicksAndRejections (node:internal/process/task_queues:104:5)

Node.js v25.9.0

D:\snehi-web>ng serve
Node.js version v25.9.0 detected.
Prior to version 27, odd numbered Node.js versions will not enter LTS status and should not be used for production. For more information, please see https://nodejs.org/en/about/previous-releases/.
Browser bundles     
Initial chunk files  | Names            |  Raw size
scripts.js           | scripts          | 718.88 kB | 
styles.css           | styles           | 574.38 kB | 
main.js              | main             |  24.64 kB | 
chunk-YQOESBWP.js    | -                | 754 bytes | 
chunk-GO3SAQLC.js    | -                | 230 bytes | 

                     | Initial total    |   1.32 MB

Lazy chunk files     | Names            |  Raw size
chunk-PUHH3ZFW.js    | contact          |  47.85 kB | 
chunk-WFLQSN5X.js    | login            |  37.10 kB | 
chunk-NGDXIZEY.js    | blog             |  24.40 kB | 
chunk-7DKPTBHB.js    | home             |  17.79 kB | 


Server bundles      
Initial chunk files  | Names            |  Raw size
main.server.mjs      | main.server      |  25.91 kB | 
server.mjs           | server           |   6.39 kB | 
chunk-FFILDKJJ.mjs   | -                | 788 bytes | 
polyfills.server.mjs | polyfills.server | 268 bytes | 
chunk-HCSCIC37.mjs   | -                | 265 bytes | 

Lazy chunk files     | Names            |  Raw size
chunk-RFBBLZXH.mjs   | contact          |  47.88 kB | 
chunk-H737RHTG.mjs   | login            |  37.14 kB | 
chunk-XA37SM4M.mjs   | blog             |  24.44 kB | 
chunk-U4KPAKMG.mjs   | home             |  17.82 kB | 

Application bundle generation complete. [9.915 seconds] - 2026-07-21T10:12:09.258Z

Watch mode enabled. Watching for file changes...
NOTE: Raw file sizes do not reflect development server per-request transformations.
  ➜  Local:   http://localhost:4200/
  ➜  press h + enter to show help




D:\snehi-web>npm install primeng @primeuix/themes primeicons primeflex
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular-devkit/architect@0.2200.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular-devkit/core@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular-devkit/schematics@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/build@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/cli@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/common@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/compiler@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/compiler-cli@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/core@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/forms@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/platform-browser@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/platform-server@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@angular/router@22.0.7',
npm warn EBADENGINE   required: { node: '^22.22.3 || ^24.15.0 || >=26.0.0' },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }
npm warn EBADENGINE Unsupported engine {
npm warn EBADENGINE   package: '@schematics/angular@22.0.7',
npm warn EBADENGINE   required: {
npm warn EBADENGINE     node: '^22.22.3 || ^24.15.0 || >=26.0.0',
npm warn EBADENGINE     npm: '^6.11.0 || ^7.5.6 || >=8.0.0',
npm warn EBADENGINE     yarn: '>= 1.13.0'
npm warn EBADENGINE   },
npm warn EBADENGINE   current: { node: 'v25.9.0', npm: '11.18.0' }
npm warn EBADENGINE }

added 13 packages, and audited 502 packages in 18s

115 packages are looking for funding
  run `npm fund` for details

1 low severity vulnerability

To address all issues, run:
  npm audit fix

Run `npm audit` for details.
npm warn allow-scripts 5 packages have install scripts not yet covered by allowScripts:
npm warn allow-scripts   @parcel/watcher@2.6.0 (install: node-gyp rebuild)
npm warn allow-scripts   esbuild@0.28.1 (postinstall: node install.js)
npm warn allow-scripts   lmdb@3.5.4 (install: node-gyp rebuild)
npm warn allow-scripts   msgpackr-extract@3.0.4 (install: node-gyp rebuild)
npm warn allow-scripts   esbuild@0.27.7 (postinstall: node install.js)
npm warn allow-scripts
npm warn allow-scripts Run `npm install-scripts ls` to review, or `npm install-scripts approve <pkg>` to allow.
