// Feature 7: Async/Await
// Define a promise to use with async/await
const myPromise = new Promise((resolve, reject) => {
  const condition = true; // Change this to false to test rejection
  
  setTimeout(() => {
    if (condition) {
      resolve('Success!');
    } else {
      reject('Failure!');
    }
  }, 1000);
});

async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

myFunction();
