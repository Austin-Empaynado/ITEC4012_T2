//Want to make sure the dom is loaded before we do anything
document.addEventListener("DOMContentLoaded", initializeApp);

function initializeApp(){
    //Ran after the document is loaded
    displayMeme();
}

//creating async function to call API
//note how it's all in JSON
//we have to grab the image url from the JSON Object

//commit is like save
//push is like submitting
//must set upstream (git that was clone, and where we push changes)

//New comment test
//Branch test
async function displayMeme(){
    try{
        const response = await
        fetch("https://api.imgflip.com/get_memes");
        const jsonResponse = await response.json();
        //required
        console.log(jsonResponse);
<<<<<<< HEAD
        const meme = jsonResponse.data.memes[2];
=======
        const meme = jsonResponse.data.memes[3];
>>>>>>> master

        const image = document.createElement("img");
        image.src = meme.url;
        image.alt = meme.name;
        image.width = 200;

        const memeContainer=
            document.querySelector("#meme");
        memeContainer.appendChild(image);
    } catch (error){
        console.log ("promise failed", error);
    }
}