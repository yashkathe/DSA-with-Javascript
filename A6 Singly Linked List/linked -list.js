class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if(!this.head) {
            // If this is the first element i.e. the list is empty
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }

    pop() {
        if(!this.head) return undefined;

        let current = this.head;
        let pre;

        while(current.next) {
            pre = current;
            current = current.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }

    shift() {
        if(!this.length) return undefined;

        let currenHead = this.head;

        this.head = currenHead.next;
        this.length--;

        if(this.length === 0) {
            this.tail = null;
        }

        return currenHead;

    }

    unshift(val) {
        let newNode = new Node(val);

        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let counter = 0;
        let current = this.head;

        while(counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        } else {
            return false;
        }
    }

    insert(index, val) {

        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let previous = this.get(index - 1);
        let previousNext = previous.next;

        previous.next = newNode;
        newNode.next = previousNext;

        this.length++;

        return true;
    }

    remove(index) {

        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let previousNode = this.get(index - 1);
        let removed = previousNode.next;

        previousNode.next = removed.next;

        return removed;

    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for(let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev; // reversing relation
            prev = node
            node = next
        };
        console.log(this)
        return this
    }

    // traverse(){
    //     let current  = this.head

    //     while(current){
    //         console.log(current.val)
    //         current = current.next
    //     }
    // }
}

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);

// list.push(4);

// list.pop();

// list.shift()
// list.shift()
// list.shift()

// list.unshift(0);

// console.log(list.get(2))

// console.log(list.set(0,100))

// list.insert(1, 1.5);
// console.log(list.insert(0, -1));
// list.insert(5, 4);

// console.log(list.remove(0))

list.reverse()

console.log(list);