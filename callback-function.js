function demo(param1) {
  if(typeof param1 === 'function') {
    param1();
    return;
  }
  console.log(param1)
}


function doHomeWork(subject, callback) {
  console.log(`Subject is: ${subject}`);
  callback();
} 

doHomeWork('math', function() {
  console.log('finished home work')
})

doHomeWork('history', function() {
  console.log('finished home work')
})