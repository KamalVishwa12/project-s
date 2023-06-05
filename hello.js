function example() {
    var x = 1;
    let y = 2;
  
    if (true) {
      var x = 3;
      let y = 4;
      console.log(x); // Output: 3
      console.log(y); // Output: 4
    }
  
    console.log(x); // Output: 3 (the value was changed within the block)
    console.log(y); // Output: 2 (the block-scoped value remains unchanged)
  }
  
  example();
  
