// Linked List Implementation of Stack

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {

        let newNode = new Node(val);

        if(!this.first) {

            this.first = newNode;
            this.last = newNode;

        } else {

            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;

        }

        this.size++;
        return this.size;
    }

    pop() {

        if(this.size === 0) return null;

        let temp = this.first;

        if(this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;

        this.size--;

        return temp.value;

    }

}

let stack = new Stack();

stack.push(0);
stack.push(1);
stack.push(2);
// console.log(stack.push(1))
// console.log(stack.push(2))

console.log(stack.pop());
// console.log(stack.pop())
// console.log(stack.pop())

// stack.pop();

console.log(stack);