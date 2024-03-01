// fetching promise

function getTodo(url) {
    const fetchPromise1 = fetch(url)
    fetchPromise1
    .then(response=> response.json())
    .then(data => console.log(data))
    .catch(error => console.error(`Could not get todo: ${error}`))
    }

getTodo("https://jsonplaceholder.typicode.com/todos/1")

function getUser(url) {
    const fetchPromise2 = fetch(url)
    fetchPromise2
    .then(response=> response.json())
    .then(data => console.log(data))
    .catch(error => console.error(`Could not get user: ${error}`))
    }

getUser("https://jsonplaceholder.typicode.com/users/1")

function promiseArray(callback1, callback2) {
    Promise.all([callback1("https://jsonplaceholder.typicode.com/todos/1"), 
    callback2("https://jsonplaceholder.typicode.com/users/1")]).then(values => console.log(values))

}

promiseArray(getTodo, getUser)