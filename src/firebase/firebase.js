import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     });


// // database.ref('expenses').push({
// //     description: 'heater bill',
// //     amount: 17900,
// //     createdAt: 19000012,
// //     note: 'paid already'
// // });


// // database.ref('job/title').set('Project Manager');

// // database.ref().on('value', (dataSnapshot) => {
// //     const data = dataSnapshot.val();
// //     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`);
// // }, (e) => {
// //     console.log('Error with firebase subscription', e);
// // });

// // database.ref('job/title').set('Developer');

// // setTimeout(() => {
// //     database.ref('job/title').set('Software-DEV');
// // }, 3000);

// // database.ref().set({
// //     name: 'Eva Schilken',
// //     age: 28,
// //     stressLevel: 6,
// //     job: {
// //         title: 'software dev',
// //         company: 'google'
// //     },
// //     location: {
// //         city: 'Melbourne',
// //         country: 'Australia'
// //     }
// // }).then(() => {
// //     console.log('data is saved.');
// // }).catch((e) => {
// //     console.log('this failed,', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'amazon',
// //     'location/city': 'seattle'
// // });

// // database.ref('isSingle').set(null);

// // database.ref().remove()
// // .then(() => console.log('data removed'))
// // .catch((e) => console.log('error happened', e));
