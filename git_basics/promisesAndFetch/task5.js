// checkNumber with Promise

function checkNumber(num) {
  let myPromise = new Promise(function (resolve, reject) {
    if (num <= 10) {
      resolve('Success');
    } else {
      reject(new Error('Failure'));
    }
  });

  myPromise.then(
    (result) => console.log(result),
    (error) => console.error(error.message),
  );
}

checkNumber(6);
checkNumber(12);
