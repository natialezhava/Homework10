let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
  
  console.log(user.studentstatus);
  
  
  // დავალება 2
  
  let array = [45, 56, 'javaskript', 65, 'natia']
  
  for (let item of array)
   console.log(item);
  
  //  დავალება 3
  let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
  
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
      console.log(numbers[i]);
    }
  }
  
  // დავალება 4
  let user = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
  }
  
  if (user.age < 18 && studentstatus == 'active') {
    console.log('Hello');
  } else if ( user.name == 'levani') {
    console.log('hello Levani');
  } else if (user.studentstatus == 'active' || user.age < 25 ) {
    console.log('hello world');
  } else {
    console.log('error');
  }
  
  // დავალება 5
  
  let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ]
  
   
  for (let item of array) {
    for (positive of item) {
      if (positive > 0) {
        console.log(positive);
      }
    }
  }
  
  // დავალება 6
  
  let array = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ]
  
  for (let i = 0; i < array.length; i+8+) {
    if (array [i] % 2 === 0) {
      console.log(array[i]);
    }
  }
  
  let array1 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ] 
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] % 2 !== 0) {
      console.log(array1[i]);
    }
  }
  
  // დავალება 7
  
  function positiveValue(...numbers) {
  
     let sumeValue = 0;
    for (let item of numbers) {
        if (item > 0) {
          sumeValue += item; 
        }   
    }
     console.log(sumeValue);
  }
  
  
  positiveValue (2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
  
  // დავალება 8
  
  let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  
  let printName = `${user.firstname} ${user.lastname}`
  console.log(printName) 
  
  // დავალება 9 
  
  function array (...params) {
    console.log(Math.max(...params));
  }
  
  
  array(45, 87, 98, 25, 75)
  
  // 9. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:
  
  // 10. მოცემულია მასივი let array = [1,2,4,10,34,5,7,87]
  // გამოიტანეთ ყველა ის რიცხვი რომელიც მეტია 0 ზე და ნაკლებია 10ზე;
  
  let array = [1,2,4,10,34,5,7,87]
  
  for (let item of array){
    if (item > 0 && item < 10)   {
      console.log(item);
    } else {
      console.log('error');
    }
  }
  
  // 11. მოცემულია მასივი
  // let numbers =[1,2,3,4,5,6,7,8,9,10]
  // ციკლის საშუალებით შეამოწმეთ, თუ მასივში არის რიცხვი 5 - გააჩერეთ მასივი
  
  let numbers3 = [0, 5, 8, 3, 4, 7, 6, 1, 2, 9, 10];
  for(let N of numbers3){
      if(N == 5){
          break;        
      }
      console.log(N);    
  }