//npm install express --save

const express = require(`express`);
const app = express;
const port = 2000;

//http methods
//app.METHOD(PATH,HANDER)

app.get(`/contact`, function(req, res){
    res.send("contact off my lawn");
})

app.put(`/`, function(req, res){
    res.send("send off my lawn");
})

app.post(`/`, function(req, res){
    res.send("post off my lawn");
})

app.delete(`/`, function(req, res){
    res.send("delete off my lawn");
})

app.listen(port, () =>{

    console.log(`my app is listening to my port ${port}`);
})





//GET, POST, PUT/PATCH, DELETE
//GET = Getting information/Displaying information 
//POST = Adding information
//PUT = Updating information || PATCH = 

    //firstName: Martin ; lastName: Lazore ; id: 10 (original information)
    //Ex of PUT:
    //firstname: Marty ; lastname : Lazore ; id: 10
    //Ex of Patch: 
    //firstname : Jusku ;

//DELTE = deletes information




{title: 'Post One', body; 'This is post one'}
    {title: 'Post Two', body; 'This is post two'}
;

setTimeout(() => {
    console.log("number 1")
}, 5000);

setTimeout(() => {
    console.log("number 2")
}, 2000);


const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function getPosts(){
    setTimeout (() =>{
        let output = "";
        posts.forEach((post, index) => {
            output += `<li>${post.title}, ${index}</li>`;

        });
        document.body.innerHTML = output;
    }, 1000);
}

//we are taking this function as a callback
function createPost(post, callback) {
    setTimeout(()=> {
        posts.push(post);
        callback();
    }, 2000);
}
// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);


