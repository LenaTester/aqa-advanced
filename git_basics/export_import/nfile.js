export const n = 1;

/*class Car {
    constructor(name) {
      this.name = name;
    }
    static hello() {
        console.log("Hello!!")
    }
  }

  Car.hello()*/

const menu = {
  americano: [
    { item: '', time: 3000 },
    { item: '', time: 1500 },
    { item: '', time: 500 },
  ],

  italiano: [
    { item: '', time: 1500 },
    { item: '', time: 1500 },
    { item: '', time: 500 },
  ],

  breakfast: [
    { item: '', time: 1000 },
    { item: '', time: 2500 },
    { item: '', time: 1000 },
  ],
};

const order = (dishes, onComplete) => {
  console.log(`Start cooking order ...`);
  const orderResult = [];

  const getResultData = (dish, index) => {
    orderResult[index] = dish;
    if (orderResult.filter(Boolean).length === dishes.length)
      onComplete(orderResult);
  };

  const cookFood = ({ name: item, time }, index, onDishComplete) => {
    // const condition = +Math.random().toFixed();
    const condition = 1;

    setTimeout(() => {
      const dish = condition
        ? { status: 'fulfilled', value: item }
        : { status: 'rejected', reason: `${item} failed` };
      onDishComplete(dish, index);
    }, time);
  };

  dishes.forEach((item, index) => cookFood(item, index, getResultData));
};

order(menu.americano, console.log);

/*new Promise( function(resolve, reject) { 
    ··· 
    if (···) { 
        resolve(value); // success 
    } else { 
        reject(reason); // failure } } );*/
