// Keeps dyno awake to prevent delays in slack response

const fetch = require('node-fetch');

/**
 * Recursive function that sends requests to the heroku server at regular intervals to prevent it
 * from falling asleep
 */
const wakeDyno = (url, interval = 25, callback) => {
  setTimeout(() => {
    try {
      fetch(url).then(() => console.log(`Fetching ${url}.`));
    } catch (error) {
      console.log(`Error fetching ${url}: ${err.message} 
            Will try again in ${interval} minutes...`);
    } finally {
      try {
        callback();
      } catch (error) {
        callback ? console.log('Callback failed: ', error.message) : null;
      } finally {
        return wakeDyno(url, interval, callback);
      }
    }
  }, interval * 60000);
};

module.exports = {
  wakeDyno,
};
