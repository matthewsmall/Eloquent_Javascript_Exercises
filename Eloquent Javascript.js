//Eloquent Javascript

//Chapter 02 - Exercise 1
var hash = "";
for(var i = 0; i < 7; i++){
  hash += "#"
  console.log(hash);
}

//Chapter 02 - Exercise 2
for(var i=1; i<=100; i++){
  if (i%3 === 0 && i%5 === 0)
    console.log("FizzBuzz");
  else if (i%3 === 0)
    console.log("Fizz");
  else if (i%5 === 0)
    console.log("Buzz");
  else
    console.log(i);
  }

 //Chapter 2 - Exercise 3
 //The program makes a square board.  The example the author shows is 4x8 - not sure if this is a mistake.
var board = "";
var size = 16;
for (var i=1;i<=(size*2+1)*size;i++){
  if (i%(size*2+1) === 0)
    board += "\n"
  else if (i%2 === 0)
    board += " "
  else
    board += "#"
}
console.log(board);


//Chapter 3 - Exercise 1
var min = function(a,b){
  if (a < b)
    return a;
  else
    return b;
}


//Chapter 3 - Exercise 2
var isEven = function(x){
  if (x < 0)
    return false;
  if (x === 0)
    return true;
  if (x === 1)
    return false;
  else
    return isEven(x - 2);
}


//Chapter 3 - Exercise 3
var countBs = function(x){
  var count = 0;
  for (var i=0; i<x.length; i++){
    if(x.charAt(i) === "B")
      count++;
  }
  return count;
}
var countChar = function(x,y){
  var count = 0;
  for (var i=0; i<x.length; i++){
    if(x.charAt(i) === y)
      count++;
  }
  return count;
}



// Chapter 4 - Exercise 1

var range = function(start, end, step){
  var myArray = [];
  var stop = Math.abs(start-end); //the absolute difference between start and end, so works +&- steps
  
  if(step == undefined){//allowing the step parameter to be optional
    step = 1;
  }
  
  for(var i = 0; i <= stop/Math.abs(step); i += 1){//how many items will go in the array = stop
    myArray[i]=start; //or, myArray.push(start)
    start += step; //change the next value to be pushed by the step
  }
  return myArray;
}

var sum = function(myRange){
  var counter = 0;
  for(var i = 0; i<myRange.length; i++){
    counter += myRange[i];
  }
  return counter;
}


//Chapter 4 - Exercise 2
var reverseArray = function(inputArray){
  var myArray = [];
  var mylength = inputArray.length;
  for(var i=0;i<mylength;i++){
	myArray.push(inputArray.pop());
  }
  return myArray;
}

var reverseArrayInPlace= function(inputArray){
  var mylength = inputArray.length - 1;
  var temp;
  for(var i=0; i<=Math.round(mylength/2); i++){
    temp = inputArray[i];
    inputArray[i] = inputArray[mylength - i];
    inputArray[mylength - i] = temp;
  }
  return inputArray;
}


// Chapter 4 - Exercise 3
var arrayToList = function(myArray){
  var list = null;
  for(var i = myArray.length-1; i >= 0; i--){
    list = {value: myArray[i], rest: list}; //start from last and build list forward
  }
  return list;
}

var listToArray = function(myList){
  var myArray = [];
  var i = 0;
  while (true){//loop until meet the clause inside
    myArray[i] = myList.value;//add value to array
    if(myList.rest == null)//check if there is any rest left
      return myArray;//if nothing left, return the array
    else
      myList = myList.rest;  //if more is left, set list to rest
      i++; //go to next position in array
  }
}

var prepend = function(newVal, list){
  return {value: newVal, rest: list};
}

var nth = function(myList, val){
  for(var i =0; i<val; i++){
    if (myList.rest == null)
      return undefined;
    else
      myList = myList.rest;
  }
  return myList.value;
}

var nth_rec = function(myList, val){
  
  if(val === 0) {return myList.value;}

  if(myList.rest == null)
    return undefined;
  else
    myList = myList.rest;
    return nth_rec(myList, val-1);
}

//Chapter 4 - Exercise 4
//Had to look at solution for this one.
//Next time around hope to not have to.

var deepEqual = function(obj1, obj2){
  
  if (obj1 === obj2) {return true};
  
  if (obj1 == null || typeof obj1 != "object" ||
      obj2 == null || typeof obj2 != "object")
  return false;
  
  var numProp1 = 0, numProp2 = 0;
  
  for (var prop in obj1)
    numProp1++;
  
  for (var prop in obj2){
    numProp2++;
    if(!(prop in obj1) || !deepEqual(obj1[prop],obj2[prop]))
      return false;
  }
  return numProp1 == numProp2;
}