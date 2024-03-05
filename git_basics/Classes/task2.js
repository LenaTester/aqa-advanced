// creation of human class
class Human {
  constructor() {
    if (this.constructor == Human) {
      throw new Error('it is abstract class');
    }
  }
  eat() {
    console.log('eating');
  }
  listen() {
    console.log('listening');
  }
}

// creation of worker class
class Worker extends Human {
  constructor(salary, workTime) {
    super();
    this.salary = salary;
    this.workTime = workTime;
  }

  // greet method
  greet() {
    console.log('Hello, Worker!');
  }

  // finish work method
  finishingWork() {
    console.log('Work is done!');
  }

  // method, showing, if worker is working now
  isWorking() {
    const date = new Date();
    const currentTime = date.toLocaleString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const workTimeArr = this.workTime.split('-');
    const startTime = workTimeArr[0];
    const finishTime = workTimeArr[1];

    if (currentTime < startTime) {
      console.log(`Worker is not working`);
    } else if (currentTime >= startTime && currentTime <= finishTime) {
      console.log(`Worker is working`);
    } else if (currentTime > finishTime) {
      console.log(`Worker is not working`);
    }
  }
}

const firstWorker = new Worker(1000, '09:00-18:00');

firstWorker.isWorking();
