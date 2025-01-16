// 1)
const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
    return regExp.test(str);
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false 




// 2) 
const seconds = () => {
    setInterval(() => {
        console.log("Прошла секунда");
    }, 1000)
}

seconds()


// 3) 
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        if (i > 10) {
            clearInterval(interval);
        }
        console.log(i++);
    }, 1000);
};

count();


// 4) 

const box = document.getElementById('box')
box.addEventListener('click', () => {
    if (box.classList.contains('active')) {
        box.classList.remove('active');
    } else {
        box.classList.add('active');
    }
})



// 5) 
const getrequest = new XMLHttpRequest()
getrequest.open("GET", "any.json");
getrequest.setRequestHeader("Content-type", "application/json");
getrequest.send();

getrequest.onload = () => {
    const requestResult = JSON.parse(getrequest.response)
    console.log(requestResult);
}