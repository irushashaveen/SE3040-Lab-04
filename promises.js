// Feature 6: Promises
const myPromise = new Promise((resolve, reject) => {
  const condition = true; // Change this to false to test rejection
  
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myPromise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
});
