const axios = require("axios");
const mapArrToString = require("../mapArrToStrings/mapArrToStrings");

//?
async function getData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userIds = response.data.map(user => user.id);
    return mapArrToString(userIds);
  } catch (error) {
    console.log(error);
  }
}

module.exports = getData;
