function reversePrint(llist) {
    
    if(!llist) return
    reversePrint(llist.next)
    console.log(llist.data)

}