const axios = require('axios');

async function fetchData() {
    let response = await axios.get("https://geek-jokes.sameerkumar.website/api?format=json");
    console.log(response.data);
}

fetchData();