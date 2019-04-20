import firebase from 'firebase/app';
import 'firebase/database';


const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
  };


firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default};








/* --------- references -------- */

// db.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// db.ref('expenses').on('value', (snapshot) => {
//     const expenses = []; 
//         snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });
//             console.log(expenses);
//         });


// (async () => {
// const expenses = [];
// let result = await db.ref('expenses').once('value');
// result.forEach((childSnapshot) => {
//     expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//     });
// });
// console.log(expenses)
// })();




// db.ref('expenses').push({
//     description: "Rent",
//     note: 'Caro pra k7',
//     amount: 1700,
//     createdAt: 0
// });


// db.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//     });

// (async () => {
// let result = await db.ref('location/city').once('value');
// console.log(result.val());
// })();


// (async () => {
// try{
// await db.ref().set({
//     name: 'Jordhan',
//     age: 26,
//     stressLevel: 6,
//     job: { title: 'Software developer', company: 'UkAgency'},
//     location: {
//         city: 'Barreiras',
//         country:'Brasil'
//     }
//     });
// await db.ref('attributes').set({
//                 height: '1,75',
//                 weight: '71kg'
//         });
//     console.log('worked');
// } catch (err) {
//     alert(err);
// }
// })();

// (async () => {
// await db.ref().remove();
// console.log('removed');
// })();

// (async () => {
//     await db.ref().update({
//         stressLevel: 9,
//         'job/company': 'Amazon',
//         'location/city': 'Waterloo'
//     });
//     console.log('updated');
// })();