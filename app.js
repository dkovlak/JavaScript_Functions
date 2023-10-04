console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    if (count < 0) {
        console.log("Please provide a positive count.");
        return;
      }
    
      for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
}

printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    if (typeof userName === 'undefined' || typeof age === 'undefined') {
      console.log("Please provide both userName and age.");
      return;
    }
  
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
  
    if (age < 16) {
      console.log(belowSixteen);
    } else {
      console.log(aboveSixteen);
    }
  }
  
checkAge("Amoriss", 21);

  console.log("EXERCISE 3:\n==========\n");

  function analyzePoint(x, y) {
    if (x == 0 && y == 0) {
      console.log("(0, 0) is at the origin.");
    } else if (x == 0) {
      console.log(`(${x}, ${y}) is on the y-axis.`);
    } else if (y === 0) {
      console.log(`(${x}, ${y}) is on the x-axis.`);
    } else if (x > 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
      console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
      console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else {
      console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
  }

  analyzePoint(5, 5);

  console.log("EXERCISE 4:\n==========\n");

  function TypeOfTriangles(side1, side2, side3){
    if(side1 <= 0 || side2 <= 0 || side3 <= 0 || side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        console.log(`Sides ${side1}, ${side2}, ${side3} make an invalid triangle`)}

    if (side1 === side2 && side1 === side3) {console.log(`Sides ${side1}, ${side2}, ${side3} make an Equilateral triangle`)}

    if (side1 === side2 || side1 === side3 || side2 === side3) {console.log(`Sides ${side1}, ${side2}, ${side3} make an Equilateral triangle`)}

    else {console.log(`Sides ${side1}, ${side2}, ${side3} make an Scalene triangle`)}

  }

  analyzePoint(5, 15 , 10);

  console.log("EXERCISE 5:\n==========\n");

  function DataUsage(planLimit, day, usage){
    let averageDailyUse = day / usage;
    let daysRemaining = 30 - day;
    let remainingData = planLimit - usage;
    let maxDailyUsage = planLimit / day;

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${averageDailyUse.toFixed(3)} GB/day`);
    
    if(averageDailyUse > maxDailyUsage){
        let excessUsage = (averageDailyUsage - maxDailyUsage) * daysRemaining;
        console.log(`You are exceeding your average daily use (${averageDailyUse.toFixed(3)} GB/day),`);
        console.log(`continuing this high usage, you'll exceed your data plan by ${excessUsage.toFixed(3)} GB.`);
        console.log(`To stay below your data plan, use no more than ${maxDailyUsage.toFixed(3)} GB/day`);
        
    } else { console.log('You are within your data plan. Keep it up!');}
  }

  DataUsage(100, 25, 99);

