console.log("This is my script");

const submitBtn = document.getElementById("submission");
const resultCont = document.getElementById("resultCont");

let result = {
    "tag" : "",
    "free" : false,
    "role" : false,
    "user" : "stutiporwal",
    "email" : "stutiporwal1@gmail.com",
    "score" : 0.64,
    "state" : "undeliverable",
    "domain" : "stutiporwal.com",
    "reason" : "invalid_mailbox",
    "mx_found" : true,
    "catch_all" : null,
    "disposable" : false,
    "smtp_check" : false,
    "did_you_mean" : "",
    "format_valid" : true
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Clicked!")
    let email = document.getElementById("username").value;
    console.log("Input Email", email); 

    let str = '';
    for (let key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== " "){
        str += `<div>${key} : ${result[key]}</div>`;
        }
    }
    resultCont.innerHTML = str
});



