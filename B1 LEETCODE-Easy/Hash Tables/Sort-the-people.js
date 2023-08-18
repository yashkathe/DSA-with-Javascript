var sortPeople = function(names, heights) {

    let arr = names.map((name , idx ) => ({name: names[idx] , age: heights[idx] }) )
    
    arr.sort((a,b) => b.age - a.age)
    
    return arr.map(person => person.name)
};


/*
Map gives second arg which is index

sort b - a => in descending order
sort a - b => in ascending order

.sort doesnt create a new array just modifies the exisiting one
 */