/* 

A call stack is a stack data structure that stores information about the active subroutines of a computer program. 

This kind of stack is also known as an execution stack, run-time stack, or machine stack, and is often shortened to just "the stack"
As functions invoke they are added to the top of the stack

*/

function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()