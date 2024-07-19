// let button = document.getElementById("getCat")
// let image = document.getElementById("catImage")

// async function fetchCat() {
//     let response = await axios.get("https://cataas.com/cat/gif");
//     console.log(response.data);
//     image.src = response.data.message;
// }

// button.addEventListener("click", async () => {
//     await fetchCat();
// })

// // fetch first cat
// fetchCat();


let button = document.getElementById("getCat");
let image = document.getElementById("catImage");

async function fetchCat() {
    try {
        let response = await axios.get("https://cataas.com/cat", {
            responseType: 'blob' // Ensure we get the response as a blob
           
        });
        console.log(response);
        const imageUrl = URL.createObjectURL(response.data);
        image.src = imageUrl;
        console.log(imageUrl)
    } catch (error) {
        console.error('Error fetching the cat image:', error);
        image.alt = 'Failed to load image';
    }
}

button.addEventListener("click", async () => {
    await fetchCat();
});

// Fetch first cat on load
fetchCat();
