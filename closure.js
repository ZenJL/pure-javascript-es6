function outerFunction() {
  const bar = 1;

  function innerFuction() {
    const ref = 2;
    console.log('innerFuction: ', bar, ref)
  }

  innerFuction();

  // console.log('outerFunction: ', bar, ref)

}

outerFunction();


function makeFunc() {
  var name = 'truong';

  function displayName() {
    console.log(name)
  }

  return displayName;
}

const displayFunc = makeFunc();
displayFunc()

// private method

const counter = (function () {
  let privateCounter = 0;

  function changeby(value) {
    privateCounter += value
  }

  return {
    increment: function() {
      changeby(1);
    },
    decrement: function() {
      changeby(-1)
    },
    getValue: function() {
      return privateCounter
    }
  }
})();

counter.increment();
counter.increment();
console.log('private method: ', counter.getValue())


const names = {
  changeName: function() {
    console.log('changeName: ')
  }
}