//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //The this keyword essentially shortens code by allowing to reuse code so not to repeatedly type it out. It allows easier access to functions widely used for each object.

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //The default binding is function invocation. When you invoke a function declaration or expression, "this" is bound to the window object.
      //Method invocation is implicit binding, it's when you invoke a method, "this" will be bound to that object.
      //Explicit binding, we can set what the "this" will be bound to using the .call(), .apply(), and .bind().
      //Constructor invocation, when a function invocation is preceded by the new keyword, "this" will be bound to the newly created object.

  // 3) What is the difference between call and apply?

      //.call() and .apply() differ in that using .call(), you simply use commas to separate what arguments you want.
      //The .apply() uses an array to submit different arguments. Both invoke immediately when called.

  // 4) What does .bind do?

      //.bind() returns a new function. Unlike .call() and .apply(), .bind() does not immediately execute. It simply stores the values of the function, ready to be displayed when invoked.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: "JeffPerk",
      email: "jeffperk@gmail.com",
      getUsername: function() {
        return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
    user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
  
  function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.moveCar = function() {
      return this.move = this.move + 10;
    }
    this.getYear = function() {
      return this.year;
    }
  }
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

/*var getYear = function(){
  return this.year;
};*/

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  prius.getYear();
  mustang.getYear();


//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};  

var getMyUsername = function(){
  console.log(this.username);
};

setTimeout(getMyUsername.bind(myUser), 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //This will return a undefined.

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //the "this" keyword is bound to the global scope, window object.

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
