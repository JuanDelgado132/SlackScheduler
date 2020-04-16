var express = require('express');
var router = express.Router();
const moment = require('moment');
const fireDB = require('../db/firebaseDB');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const from = moment("13:00:00","HH:mm:ss");
  const to = moment("15:00:00","HH:mm:ss");

  let juan = {
    firstName: "Juan",
    lastName: "Delgado",
    id: 1,
    department: "engineering",
    email: "jdelgado@iofficecorp.com",
    essential:true,
    status:"wfh",
    availableFrom: moment.utc(from).format("HH:mm:ss"),
    availableTo: moment.utc(to).format("HH:mm:ss"),
    scheduleId:1,
    slackWorkSpaceId:"",
    slackUserName:"",
    seatId:0
  };

  let austin = {
    firstName: "Austin",
    lastName: "Long",
    id: 2,
    department: "engineering",
    email: "along@iofficecorp.com",
    essential:true,
    status:"wfh",
    availableFrom: moment.utc(from).format("HH:mm:ss"),
    availableTo: moment.utc(to).format("HH:mm:ss"),
    scheduleId:2,
    slackWorkSpaceId:"",
    slackUserName:"",
    seatId:0
  };

  let ray = {
    firstName: "Ray",
    lastName: "Yang",
    id: 3,
    department: "engineering",
    email: "ryang@iofficecorp.com",
    essential:true,
    status:"wfh",
    availableFrom: moment.utc(from).format("HH:mm:ss"),
    availableTo: moment.utc(to).format("HH:mm:ss"),
    scheduleId:3,
    slackWorkSpaceId:"",
    slackUserName:"",
    seatId:0
  };

  // await fireDB.addNewUser(juan);
  // await fireDB.addNewUser(austin);
  // await fireDB.addNewUser(ray);
  // await fireDB.createUsers();

  const me =  await fireDB.getUserSchedule("jdelgado@iofficecorp.com");
  console.log("------------");
  console.log(me);
//await fireDB.addSchedules();
 res.send(me);
});

module.exports = router;
