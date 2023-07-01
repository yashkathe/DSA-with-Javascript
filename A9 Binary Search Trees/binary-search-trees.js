class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {

        let newNode = new Node(value);

        if(this.root === null) {

            this.root = newNode;
            return this;

        } else {

            let current = this.root;

            while(true) {

                // if similar node exists
                if(value === current.value) return undefined;

                if(value < current.value) {
                    if(current.left === null) {
                        // if node doesnt exist, insert our new node here
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else if(value > current.value) {
                    if(current.right === null) {
                        // if node doesnt exist, insert our new node here
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }

        }
    }

    find(value) {

        if(this.root === null) return false;

        let current = this.root;
        let found = false;

        while(current && !found) {
            if(value < current.value) {
                current = current.left;
            }
            else if(value > current.value) {
                current = current.right;
            }
            else {
                // if we found the node
                return true;
            }
        }
        // if its null
        return false;
    }

}

let bst = new BinarySearchTree();

//         10
//    5         13
// 2     7   11     16

bst.insert(10);
bst.insert(5);
bst.insert(13);
bst.insert(11);
bst.insert(2);
bst.insert(16);
bst.insert(7);

bst.find(10);
bst.find(12);
bst.find(99);
bst.find(2);

// console.log(bst);