let button = document.getElementById("getDog")
let image = document.getElementById("dogImage")

async function fetchDog() {
    let response = await axios.get("https://dog.ceo/api/breeds/image/random");
    console.log(response.data);
    image.src = response.data.message;
}

button.addEventListener("click", async () => {
    await fetchDog();
})

// fetch first dog
fetchDog();