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

submitBtn.addEventListener("click", async () => {
    e.preventDefault()
    console.log("Clicked!")
    let email = document.getElementById("username").value
    let res = await fetch(url)
    let result = await res.json()
    let str = ''
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== " "){
        str = str + '<div> ${key} : ${result[key]}</div>'
        }
    }
    console.log(str)
    resultCont.innerHTML = str
})



