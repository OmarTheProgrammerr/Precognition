// gsap.registerPlugin(MorphSVGPlugin);

// document.querySelectorAll(".high-five").forEach((element) => {
//   element.addEventListener("click", () => {
//     if (element.active) {
//       return;
//     }

//     element.active = true;

//     if (element.liked) {
//       element.liked = false;

//       to(element, {
//         duration: 0.1,
//         "--success-text-o": 0,
//       });

//       to(element, {
//         duration: 0.2,
//         "--success-o": 0,
//         clearProps: true,
//         onComplete: () => {
//           element.active = false;
//         },
//       });

//       return;
//     }

//     element.liked = true;

//     to(element, {
//       "--hands-o": 1,
//       duration: 0.1,
//     });
//     to(element, {
//       keyframes: [
//         {
//           "--hands-x": "0px",
//           duration: 0.15,
//         },
//         {
//           "--hands-x": "41px",
//           duration: 0.25,
//           onStart: () => {
//             to(element.querySelectorAll("path"), {
//               duration: 0.15,
//               morphSVG:
//                 "M12.75 5.5C12.2844 3.63772 9.12993 3.47933 9.12993 5.20484C9.12993 6.93036 10.5 15.5 9.5027 21M12.75 5.5C13.3343 7.83729 14 9 13.5 16.5M12.75 5.5C12.7489 4 13.083 3 14.5 3C15.917 3 16.25 4 16.5 4.5M19.9997 6.93036C19.9997 6.93036 21 11 20.5 16.5M19.9997 6.93036C19.5 4.5 22.5 6 23.25 7.83729C24 10 24.5 12.5 24.5 25C24.5 30.1954 21.6956 34 16.5002 34C11.5019 34 7.72621 29.2363 6.00278 23.5C4.50057 18.5 1.64579 17.1392 2.50017 16C4.00017 14 7 16.5 8 17.5C9.08643 18.5864 9.25 21 9.25 21M19.9997 6.93036C19.7803 5.20484 19 2.5 16.5 4.5M16.5 4.5C17 8 17.5 10 17 16.5",
//             });
//           },
//         },
//         {
//           "--success-clip": "100%",
//           "--success-text-o": 1,
//           duration: 0.3,
//           onStart: () => {
//             to(element, {
//               duration: 0.1,
//               "--success-o": 1,
//             });
//           },
//           onComplete: () => {
//             set(element, {
//               "--hands-o": 0,
//             });
//             set(element.querySelectorAll("path"), {
//               morphSVG:
//                 "M16.0011 5.5C15.5011 3.5 13.5012 4 12.5012 5.5C11.5012 7 9.5 14 9.75 20M16.0011 5.5C14.9998 8 13.9981 12 13.9994 16.5M16.0011 5.5C16.5011 4.5 17.5646 2.5 18.4994 2.5C19.737 2.5 20.7439 3.28645 20.5011 4.5M23.4981 7.5C23.4981 7.5 21.9994 12 21.9994 16M23.4981 7.5C24.9981 5.5 27.0011 7 27.0011 8.5C26.7527 10.9503 25.2188 11.8879 25.4985 25.5C25.6052 30.6943 21.6939 34 16.4985 34C11.5003 34 6.59828 29.4598 6.0011 23.5C5.5001 18.5 6.64678 15.1392 7.50115 14C9.00115 12 9.51575 14.5859 9.50102 16C9.48502 17.5364 9.65 20 9.65 20M23.4981 7.5C24 6 23.5 2.5 20.5011 4.5M20.5011 4.5C19.0011 8 17.9994 11.5 17.9994 16.5",
//             });
//             element.active = false;
//           },
//         },
//       ],
//     });
//   });
// });
// const { to, set } = gsap;

// gsap.registerPlugin(MorphSVGPlugin);

// document.querySelectorAll(".high-five").forEach((element) => {
//   element.addEventListener("click", () => {
//     if (element.active) {
//       return;
//     }

//     element.active = true;

//     if (element.liked) {
//       element.liked = false;

//       to(element, {
//         duration: 0.1,
//         "--success-text-o": 0,
//       });

//       to(element, {
//         duration: 0.2,
//         "--success-o": 0,
//         clearProps: true,
//         onComplete: () => {
//           element.active = false;
//         },
//       });

//       return;
//     }

//     element.liked = true;

//     to(element, {
//       "--hands-o": 1,
//       duration: 0.1,
//     });
//     to(element, {
//       keyframes: [
//         {
//           "--hands-x": "0px",
//           duration: 0.15,
//         },
//         {
//           "--hands-x": "41px",
//           duration: 0.25,
//           onStart: () => {
//             to(element.querySelectorAll("path"), {
//               duration: 0.15,
//               morphSVG:
//                 "M12.75 5.5C12.2844 3.63772 9.12993 3.47933 9.12993 5.20484C9.12993 6.93036 10.5 15.5 9.5027 21M12.75 5.5C13.3343 7.83729 14 9 13.5 16.5M12.75 5.5C12.7489 4 13.083 3 14.5 3C15.917 3 16.25 4 16.5 4.5M19.9997 6.93036C19.9997 6.93036 21 11 20.5 16.5M19.9997 6.93036C19.5 4.5 22.5 6 23.25 7.83729C24 10 24.5 12.5 24.5 25C24.5 30.1954 21.6956 34 16.5002 34C11.5019 34 7.72621 29.2363 6.00278 23.5C4.50057 18.5 1.64579 17.1392 2.50017 16C4.00017 14 7 16.5 8 17.5C9.08643 18.5864 9.25 21 9.25 21M19.9997 6.93036C19.7803 5.20484 19 2.5 16.5 4.5M16.5 4.5C17 8 17.5 10 17 16.5",
//             });
//           },
//         },
//         {
//           "--success-clip": "100%",
//           "--success-text-o": 1,
//           duration: 0.3,
//           onStart: () => {
//             to(element, {
//               duration: 0.1,
//               "--success-o": 1,
//             });
//           },
//           onComplete: () => {
//             set(element, {
//               "--hands-o": 0,
//             });
//             set(element.querySelectorAll("path"), {
//               morphSVG:
//                 "M16.0011 5.5C15.5011 3.5 13.5012 4 12.5012 5.5C11.5012 7 9.5 14 9.75 20M16.0011 5.5C14.9998 8 13.9981 12 13.9994 16.5M16.0011 5.5C16.5011 4.5 17.5646 2.5 18.4994 2.5C19.737 2.5 20.7439 3.28645 20.5011 4.5M23.4981 7.5C23.4981 7.5 21.9994 12 21.9994 16M23.4981 7.5C24.9981 5.5 27.0011 7 27.0011 8.5C26.7527 10.9503 25.2188 11.8879 25.4985 25.5C25.6052 30.6943 21.6939 34 16.4985 34C11.5003 34 6.59828 29.4598 6.0011 23.5C5.5001 18.5 6.64678 15.1392 7.50115 14C9.00115 12 9.51575 14.5859 9.50102 16C9.48502 17.5364 9.65 20 9.65 20M23.4981 7.5C24 6 23.5 2.5 20.5011 4.5M20.5011 4.5C19.0011 8 17.9994 11.5 17.9994 16.5",
//             });
//             element.active = false;
//           },
//         },
//       ],
//     });
//   });
// });
