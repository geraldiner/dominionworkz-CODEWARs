/* PROBLEM STATEMENT:::
Description
We need a function that can transform a string into a number.What ways of achieving this do you know ?

  Note : Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" -- > 1234
"605"  -- > 605
"1405" -- > 1405
"-7" -- > -7 
*/////////////////////////////////////////////////////

// SOLUTION:::
//my solution
const stringsToNumber = function (str) {
  let num = Number.parseInt(str);
  return num;
}

//other solutions
var stringToNumber = function (str) {
  return parseInt(str);
}

var stringToNumber = function (str) {
  return +str;
}

const stringToNumber = str => Number(str)


/* SAMPLE TESTS::://///////////////////////////////////////////////////

  describe( "stringToNumber", function(){
  it( "should work for the examples" , function(){
    Test.assertEquals(stringToNumber("1234"),1234)
    Test.assertEquals(stringToNumber("605"), 605)
    Test.assertEquals(stringToNumber("1405"),1405)
    Test.assertEquals(stringToNumber("-7"),  -7)
  });
  it("should work for random strings", function(){
    var i, t;
    for(i = 0; i < 100; ++i){
      t = Math.round(Math.random() * 1e6 - 5e5);
      Test.assertEquals(stringToNumber(t.toString(10)), t);
    }
  });
});
*/