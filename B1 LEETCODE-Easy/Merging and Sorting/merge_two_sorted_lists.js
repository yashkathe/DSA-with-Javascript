const mergeTwoLists = (list1, list2) => {
    let arr = []
    let i = 0
    let j = 0
    console.log(list1.length, list2.length)
    while ( i < list1.length && j < list2.length){
        console.log(i,j)
        if(list1[i] <= list2[j]){
            arr.push(list1[i])
            i++
        }else{
            arr.push(list2[j])
            j++
        }
    } 

    while(i < list1.length){
        arr.push(list1[i])
        i++
    }

    while(j < list2.length){
        arr.push(list2[j])
        j++
    }

    console.log(arr)
    return arr;
};

mergeTwoLists([],[])