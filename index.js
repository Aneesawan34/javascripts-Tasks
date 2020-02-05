var myArry = ["abc, georgia", "abc, hello"];
const items = myArry.forEach(val => {
  let val2 = val.split("").splice(0, 3);
  //   console.log(val2);
  console.log(val2.reverse().join("") + val.slice(3));
});

//output : 
// cba, georgia
// cba, hello
