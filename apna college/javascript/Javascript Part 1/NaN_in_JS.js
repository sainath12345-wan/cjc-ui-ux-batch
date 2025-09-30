/**
 
Nan In JS

  The NaN global property is a value representing Not-A-Number.

    0/0
    NaN - 1
    NaN * 1
    NaN + NaN 

  NaN is a type of value which number type it not used for represent any valid number.

  Any operation perform on NaN value its result always NaN.
 */

  let a = 0 / 0;
  console.log(a) //NaN
  console.log(typeof a) //number

  let add = a + 1;
  let sub = a - 1;
  let mul = a * a;
  let div = a / a;

  console.log(add) //NaN
  console.log(sub) //NaN 
  console.log(mul) //NaN
  console.log(div) //NaN

