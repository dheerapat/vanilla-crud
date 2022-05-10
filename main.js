let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

form.onsubmit = function (e) {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
};

const formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Cannot left blank";
        console.log("fail");
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};

const acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
};

const createPost = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
    </div>
    `;
    input.value = "";
};

const deletePost = e => {
    e.parentElement.parentElement.remove();
};

const editPost = e => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};