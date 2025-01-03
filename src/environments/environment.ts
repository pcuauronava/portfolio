// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: false,
  firebase: {
    apiKey: "AIzaSyBDu-Aw4ibBhgyuO2BHs_7p_aDv5vZ2bFY",
    authDomain: "portfolio-data-46a51.firebaseapp.com",
    projectId: "portfolio-data-46a51",
    storageBucket: "portfolio-data-46a51.appspot.com",
    messagingSenderId: "869359154317",
    appId: "1:869359154317:web:198c976f17bc103b1e1ec4",
  },
  api: {},
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import "zone.js/plugins/zone-error"; // Included with Angular CLI.
