// SOLID Principles - Open-Closed Principle

// Functions, modules and classes should be closed for modification and open for expansion

// BAD Example

// Example this function would have to be modified in order to print a Quiz that would require more different types such as multiplechoice or range
function printQuiz(questions = []){
    questions.forEach(question => {
        console.log(question.description)
        switch(question.type){
            case 'boolean': 
                console.log('1. True')
                console.log('2. False')
            break
            case 'text': 
                console.log('Answer: ________')
            break
        }
    })
}

const questions = [
    {type: 'boolean', description: 'Is JavaScript a programming language?'},
    {type: 'text', description: 'What type of keyboard do you like?'}
]

console.log(printQuiz(questions))


// Good Example
// Here we create a class implementation for each question and all our quiz function has to do is print them
class BooleanQuestion{
    constructor(description){
        this.description = description
    }
    printQuestion(){
        console.log('True')
        console.log('False')
    }
}

class TextQuestion{
    constructor(description){
        this.description = description
    }
    printQuestion(){
        console.log('Answer:__________')
    }
}

const questions2 = [
    new TextQuestion('Describe the open-closed principle in software design'),
    new BooleanQuestion('Is JavaScript a programming language?')
]

function printQuiz2(questions){
    questions.forEach(question => {
        console.log(question.description)
        console.log(question.printQuestion())
    })
}