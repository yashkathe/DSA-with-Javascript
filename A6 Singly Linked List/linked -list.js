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
        this.length++
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

console.log(list);