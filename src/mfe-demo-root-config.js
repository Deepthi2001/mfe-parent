import { registerApplication, start } from "single-spa";
// import { loginUser, fetchFeatureFlags } from "@wmt-cnnt/common-functions";
import Cookies from "universal-cookie";

// const cookies = new Cookies();

// redirect user to login if not authenticated
// loginUser();
// fetchFeatureFlags();

registerApplication({
  name: "@mfe-demo/navbar",
  app: () => System.import("@mfe-demo/navbar"),
  activeWhen: "/",
});

registerApplication({
  name: "@mfe-demo/main-child-ui",
  app: () => System.import("@mfe-demo/main-child-ui"),
  activeWhen: [
          (location) =>
            location.pathname == "/" || location.pathname.startsWith("/pal")
        ]
});

start();


// registerApplication({
//   name: "@mfe-demo/first-child-ui",
//   app: () => System.import("@mfe-demo/first-child-ui"),
//   activeWhen: [
//     "/first-child",
//     (location) => location.pathname.startsWith("/first-child"),
//   ],
// });

// registerApplication({
//     name: "@mfe-demo/second-child-ui",
//     app: () => System.import("@mfe-demo/second-child-ui"),
//     activeWhen: [
//       "/second-child",
//       (location) => location.pathname.startsWith("/second-child"),
//     ],
//   });

// registerApplication({
//   name: "@wmt-cnnt/negotiation",
//   app: () => System.import("@wmt-cnnt/negotiation"),
//   // activeWhen: ['/pal', '/ecom-pal', '/supplier-performance', '/supplier-profile'],
//   activeWhen:
//     cookies.get("tenantId") === "WMTUS" ? [
//           (location) =>
//             location.pathname == "/" || location.pathname.startsWith("/pal"),
//           "/ecom-pal",
//           "/supplier-performance",
//         ]
//       : [
//           (location) =>
//             location.pathname == "/" || location.pathname.startsWith("/pal"),
//           "/ecom-pal",
//           "/supplier-performance",
//           "/supplier-profile",
//         ],
// });

// registerApplication({
//   name: "@wmt-cnnt/supplier-profile-ui",
//   app: () =>
//     cookies.get("tenantId") === "WMTUS" ? System.import("@wmt-cnnt/supplier-profile-ui")
//       : null,
//   activeWhen: "/supplier-profile",
// });

// registerApplication({
//   name: "@wmt-cnnt/library-page-ui",
//   app: () => System.import("@wmt-cnnt/library-page-ui"),
//   activeWhen: "/library-page",
// });

// registerApplication({
//   name: "@wmt-cnnt/anchor-page-ui",
//   app: () => System.import("@wmt-cnnt/anchor-page-ui"),
//   activeWhen: "/anchor-page",
// });

// //Using timeout to achive feature flag ability for MFE, will remove it later
// setTimeout(() => {
//   let showSupplierSubmissionMFE =
//     localStorage.getItem("featureFlag") &&
//     JSON.parse(localStorage.getItem("featureFlag"))
//       .show_mfe_supplier_submission;

//   const SUPPLIER_SUBMISSION = "/supplier-submission";

//   registerApplication({
//     name: "@wmt-cnnt/supplier-submission-ui",
//     app: () =>
//       showSupplierSubmissionMFE === "true" ? System.import("@wmt-cnnt/supplier-submission-ui")
//         : null,
//     activeWhen: [
//       SUPPLIER_SUBMISSION,
//       (location) => location.pathname.startsWith(SUPPLIER_SUBMISSION),
//     ],
//   });
// }, 5000);

// registerApplication({
//   name: "@wmt-cnnt/global-resources-ui",
//   app: () => System.import("@wmt-cnnt/global-resources-ui"),
//   activeWhen: [
//     "/opportunities",
//     (location) => location.pathname.startsWith("/opportunities"),
//   ],
// });

// registerApplication({
//   name: "@wmt-cnnt/supplier-submission-reports",
//   app: () => System.import("@wmt-cnnt/supplier-submission-reports"),
//   activeWhen: [
//     "/report",
//     (location) => location.pathname.startsWith("/report"),
//   ],
// });

// registerApplication({
//   name: "@wmt-cnnt/create-scenario-ui",
//   app: () => System.import("@wmt-cnnt/create-scenario-ui"),
//   activeWhen: [
//     "/create-scenario",
//     (location) => location.pathname.startsWith("/create-scenario"),
//   ],
// });
// registerApplication({
//   name: "@wmt-cnnt/pal-levers-ui",
//   app: () => System.import("@wmt-cnnt/pal-levers-ui"),
//   activeWhen: [
//     "/Levers",
//     (location) => location.pathname.startsWith("/Levers"),
//   ],
// });
// registerApplication({
//   name: "@wmt-cnnt/pal-summary-ui",
//   app: () => System.import("@wmt-cnnt/pal-summary-ui"),
//   activeWhen: [
//     "/summary",
//     (location) => location.pathname.startsWith("/summary"),
//   ],
// });
// registerApplication({
//   name: "@wmt-cnnt/pal-scenario-ui",
//   app: () => System.import("@wmt-cnnt/pal-scenario-ui"),
//   activeWhen: [
//     "/sams-scenario",
//     (location) => location.pathname.startsWith("/sams-scenario"),
//   ],
// });
// registerApplication({
//   name: "@wmt-cnnt/pal-position-ui",
//   app: () => System.import("@wmt-cnnt/pal-position-ui"),
//   activeWhen: [
//     "/position",
//     (location) => location.pathname.startsWith("/position"),
//   ],
// });

// registerApplication({
//   name: "@wmt-cnnt/pal-closeout-ui",
//   app: () => System.import("@wmt-cnnt/pal-closeout-ui"),
//   activeWhen: [
//     "/close-out",
//     (location) => location.pathname.startsWith("/close-out"),
//   ],
// });
// registerApplication({
//   name: "@wmt-cnnt/walmart-pal-summary-ui",
//   app: () => System.import("@wmt-cnnt/walmart-pal-summary-ui"),
//   activeWhen: [
//     "/summary",
//     (location) => location.pathname.startsWith("/summary"),
//   ],
// });
// registerApplication({
//   name: "@wmt-cnnt/walmart-pal-levers-ui",
//   app: () => System.import("@wmt-cnnt/walmart-pal-levers-ui"),
//   activeWhen: [
//     "/Levers",
//     (location) => location.pathname.startsWith("/Levers"),
//   ],
// });
// registerApplication({
//   name: "@wmt-cnnt/neg-offers-ui",
//   app: () => System.import("@wmt-cnnt/neg-offers-ui"),
//   activeWhen: [
//     "/offers",
//     (location) => location.pathname.startsWith("/offers"),
//   ],
// });
