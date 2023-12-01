// 1) Where is carNoise stored?
//global execution context
const carNoise = 'Honk';
// 2) Where is goFast stored?
// global execution context
const goFast = speed => {
  // 4) When is speed assigned a value? Where is this value stored?
  // speed is assigned within the gofast variable
  
  // 5) Where is makeNoise stored?
  //
  const makeNoise = sound => {
    console.log(`My speed is at ${speed}, time to ${sound}`);
  }

  // 6) What happens in the following statement?
  // 
  makeNoise(carNoise);
}

// 3) What happens in the following statement?
// confirm is a web api, once it resolves, go  fast is placed 
//in the callback queue, then onto the call stack to be executed.
if(confirm("Do you want to go fast?")) {
  goFast(80);
}
