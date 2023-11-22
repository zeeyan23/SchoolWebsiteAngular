// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // firebase: {
  //   apiKey: "AIzaSyByE3p_ecbSqtZVWazfeRoKuAW6g4YE3bo",
  //   authDomain: "fir-notification-92992.firebaseapp.com",
  //   projectId: "fir-notification-92992",
  //   storageBucket: "fir-notification-92992.appspot.com",
  //   messagingSenderId: "769424485793",
  //   appId: "1:769424485793:web:5778d2cc54b4d932e36fe0",
  //   measurementId: "G-W7XPRBM76K"
  // }
  serverUrl: 'http://127.0.0.1:8000',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
