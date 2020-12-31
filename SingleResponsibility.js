// SOLID Principles - Single Responsibility Principle

// Functions, modules and classes should do one thing well
// Why?

// Allows code to be decoupled and open for modifications without affecting other entities

// It should only have one reason to change

// Bad Example

// If we change our code on how we calculate the surplus the of calories it will change on 2 places
class CaloriesTracker1{
    // Initialize an object with a limit and the current calories
    constructor(maxCalories){
      this.maxCalories = maxCalories
      this.currentCalories = 0
    }
    // method for checking if we exceeded the calory count
    trackCalories(calorieCount){
      this.currentCalories += calorieCount
      if(this.currentCalories > this.maxCalories){
        this.logCalorieSurplus()
      }
    }
    // method for logging a message
    logCalorieSurplus(){
      console.log('Max calories exceeded')
    }
  }
  
  const calorieTracker1 = new CaloriesTracker1(2000)
  
  calorieTracker1.trackCalories(500)
  calorieTracker1.trackCalories(2001)
  
  
  
  // Good Example
  // Here I can change the code for logging when calories are exceeded without affecting the CaloriesTracker class at all
  const logMessage = msg => console.log(msg)
  class CaloriesTracker2{
    // Initialize an object with a limit and the current calories
    constructor(maxCalories){
      this.maxCalories = maxCalories
      this.currentCalories = 0
    }
    // method for checking if we exceeded the calory count
    trackCalories(calorieCount){
      this.currentCalories += calorieCount
      if(this.currentCalories > this.maxCalories){
        logMessage('Max calories exceeded')
      }
    }
  }
  
  const calorieTracker2 = new CaloriesTracker2(3000)
  calorieTracker2.trackCalories(3001)
  