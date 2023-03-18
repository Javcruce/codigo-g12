const form = document.querySelector("form")
const input = document.querySelector("input")

const apiURL = "https://641523a45be9d76da4edd001.mockapi.io/tasks";

form.onsubmit = async function(event) {
    //para evitar que la web se recargue
    event.preventDefault();
    
    if (!input.value) return;

const response =await fetch(apiURL,{
    method: "POST",
    headers: {
        "content-type": "application/json"
    },
    body: JSON.stringify({
    name:input.value,
    status: 1,
    })

});

    const data = await response.json();
    console.log(data);
};