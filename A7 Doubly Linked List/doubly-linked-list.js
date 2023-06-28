class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;

    }

    pop() {
        if(!this.head) return undefined;

        let poppedNode = this.tail;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            //remove all relations from popped node
            poppedNode.prev = null;
        }

        this.length--;
        return poppedNode;

    }

    shift() {
        if(!this.length === 0) return undefined;

        let oldHead = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            //remove all relations from shifted node
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(index) {

        if(index < 0 || index >= this.length) return null;

        if(index <= this.length / 2) {

            let count = 0;
            let current = this.head;

            while(count !== index) {
                current = current.next;
                count++;
            }

            return current;

        } else {

            let count = this.length - 1;
            let current = this.tail;

            while(count !== index) {
                current = current.prev;
                count--;
            }

            return current;

        }

    }

    set(index, val) {
        let foundNode = this.get(index);

        if(foundNode !== null) {
            foundNode.val = val;
            return true;
        } else {
            return false;
        }

    }

    insert(index, val) {

        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;

        newNode.next = nextNode;
        nextNode.prev = newNode;

        this.length++;

        return true;

    }

    remove(index) {

        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removedNode = this.get(index);

        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        removedNode.next = null;
        removedNode.prev = null;

        this.length--;

        return removedNode;
    }

}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);

// list.pop();
// console.log(list.pop());

// list.shift()
// console.log(list.shift())

// list.unshift(0)
// console.log(list.unshift(-1))

// list.get(1);
// console.log(list.get(2));

// list.set(0, -1)

// list.insert(1, 1.5)
// console.log(list.get(0))

// list.remove(2)
// list.remove(1)
// console.log(list.remove(1))

console.log(list)

