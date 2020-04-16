const firebase = require('firebase');
const config = require('../config/config');
const moment = require('moment');

firebase.initializeApp(config.firebaseConfig);
const db = firebase.firestore();

const addNewUser = async (user) => {
  const docPath = user.firstName.charAt(0) + user.lastName;
   await db.collection("users").doc(docPath).set(user)
};

const createUsers = async () => {
  var names = new Array("Ladonna Thornburg",
    "Tyson Gobble",
    "Emerson Bianchi",
    "Maybell Schorr",
    "Sebastian Varughese",
    "Eugena Lewison",
    "Hosea Auton",
    "Heike Ridder",
    "Chae Westergard",
    "Ivonne Witty",
    "Jackeline Rybak",
    "Tuyet Colella",
    "Alena Dutra",
    "Sherita Weatherall",
    "Elroy Rook",
    "Jarod Tibbals",
    "Kellye Peil",
    "Carlee Slack",
    "Minerva Neeld",
    "Jean Horner",
    "Mariana Bevill",
    "Alvin Petway",
    "Sharell Lattea",
    "Tish Kalb",
    "Emilio Sedlock",
    "Laurene Stager",
    "Grazyna Bash",
    "Jodi Vanderpol",
    "Eldridge Bulfer",
    "Luna Pritts",
    "Arlyne Forde",
    "Cory Hodgin",
    "Alonso Forde",
    "Chance Modisette",
    "Lupe Daughdrill",
    "Dulcie Prosper",
    "Jann Angert",
    "Ramona Caffey",
    "Claudette Gouge",
    "Royal Eng",
    "Lili Yancey",
    "Roxane Croom",
    "Ivelisse Ptacek",
    "Cherry Honahni",
    "Patricia Quinonez",
    "Mirian Nass",
    "Buford Speece",
    "Ardelle Markle",
    "Kareem Roseboro",
    "Nikia Lotz");

  const from = moment("13:00:00","HH:mm:ss");
  const to = moment("15:00:00","HH:mm:ss");
var min = 0;
  for (i = 3; i < 20; i++) {
    const max = names.length;
    var nameIndex = Math.trunc(Math.random() * (max - min) + min);
    console.log(nameIndex)
    var name = names[nameIndex].split(" ");
    let user = {
      firstName: name[0],
      lastName: name[1],
      id: i,
      department: "engineering",
      email: name[0].charAt(0) + name[1] + "@iofficecorp.com",
      essential: true,
      status: "wfh",
      availableFrom: moment.utc(from).format("HH:mm:ss"),
      availableTo: moment.utc(to).format("HH:mm:ss"),
      scheduleId: i,
      slackWorkSpaceId: "",
      slackUserName:"",
      seatId:0
    };
    names = names.filter(n => n !== (name[0] + " " + name[1]));
    min = min + 1;
    await db.collection("users").doc(user.firstName.charAt(0)+user.lastName).set(user)
  }

};

const addSchedules = async () => {
  const from = moment("08:00:00","HH:mm:ss");
  const to = moment("17:00:00","HH:mm:ss");
  for(i = 0; i < 20; i++) {
    var schedule = {
      scheduleId: i + 1,
      days: {
        monday: {
          isoValue:1,
          workDay:true,
          startTime:moment.utc(from).format("HH:mm:ss"),
          endTime:moment.utc(to).format("HH:mm:ss")
        },
        tuesday: {
          isoValue:2,
          workDay:true,
          startTime:moment.utc(from).format("HH:mm:ss"),
          endTime:moment.utc(to).format("HH:mm:ss")
        },
        wednesday: {
          isoValue:3,
          workDay:true,
          startTime:moment.utc(from).format("HH:mm:ss"),
          endTime:moment.utc(to).format("HH:mm:ss")
        },
        thursday: {
          isoValue:4,
          workDay:true,
          startTime:moment.utc(from).format("HH:mm:ss"),
          endTime:moment.utc(to).format("HH:mm:ss")
        },
        friday: {
          isoValue:5,
          workDay:true,
          startTime:moment.utc(from).format("HH:mm:ss"),
          endTime:moment.utc(to).format("HH:mm:ss")
        },
        saturday: {
          isoValue:6,
          workDay:false,
          startTime:moment.utc(from).format("HH:mm:ss"),
          endTime:moment.utc(to).format("HH:mm:ss")
        },
        sunday: {
          isoValue:7,
          workDay:false,
          startTime:moment.utc(from).format("HH:mm:ss"),
          endTime:moment.utc(to).format("HH:mm:ss")
        }
      }
    };
    await db.collection("schedule").doc("schedule_" + (i + 1)).set(schedule)
  }
};

// const getUserSchedule = async (fullName) => {
//
// }

async function getUserSchedule(email) {
  const user = await db.collection("users").where("email", "==", email).get()
    .then(result => {
      const user =  result.docs.pop().data();
      console.log(user);
      return user
    });

  const schedule = await db.collection("schedule")
    .where("scheduleId", "==", user.scheduleId)
    .get()
    .then(result => {
      return result.docs.pop().data()
    });

  const sc = await db.collection("schedule")
    .where("days.monday.workDay", "==", false)
    .get()
    .then(result => {
      return result.docs.map(d => d.data());
    });
  console.log(sc);
  user.schedule = schedule;
  return user;
}

module.exports = {addNewUser,addSchedules, createUsers, getUserSchedule};