// async/await construction

async function getTodo(url) {
    try {
        const get_response = await fetch(url)
        const response_data = await get_response.json()
        console.log(response_data)
    } catch (error) {console.error(`Could not get todo: ${error}`)}
}

getTodo("https://jsonplaceholder.typicode.com/todos/1")

async function getUser(url) {
    try {
        const get_response = await fetch(url)
        const response_data = await get_response.json()
        console.log(response_data)
    } catch (error) {console.error(`Could not get user: ${error}`)}
}

getUser("https://jsonplaceholder.typicode.com/users/1")