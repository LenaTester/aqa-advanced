// creation of classes for getToDo and getUser

class getToDo {
  constructor(url) {
    this.url = url;
  }

  async initialize() {
    try {
      const get_response = await fetch(this.url);
      const response_data = await get_response.json();
      return console.log(response_data);
    } catch (error) {
      console.error(`Could not get todo: ${error}`);
    }
  }
}

class getUser {
  constructor(url) {
    this.url = url;
  }

  async initialize() {
    try {
      const get_response = await fetch(this.url);
      const response_data = await get_response.json();
      return console.log(response_data);
    } catch (error) {
      console.error(`Could not get todo: ${error}`);
    }
  }
}

const firstToDo = new getToDo('https://jsonplaceholder.typicode.com/todos/1');
firstToDo.initialize();
const firstUser = new getUser('https://jsonplaceholder.typicode.com/users/1');
firstUser.initialize();
