class HashTable {

    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[ i ];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);

        console.log(index);

        if(!this.keyMap[ index ]) {
            //if there is nothing at this index
            this.keyMap[ index ] = [];
        }

        // if there is already a key:value at that index just push the pair
        this.keyMap[ index ].push([ key, value ]);
    }

    get(key) {
        let index = this._hash(key);
        if(this.keyMap[ index ]) {

            for(let i = 0; i < this.keyMap[ index ].length; i++) {
                if(this.keyMap[ index ][ i ][ 0 ] === key) {

                    return this.keyMap[ index ][ i ];

                }
            }

        }
        // if there is nothing
        return undefined;
    }

    keys() {
        let keysArr = [];

        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[ i ]) {
                for(let j = 0; j < this.keyMap[ i ].length; j++) {
                    if(!keysArr.includes(this.keyMap[ i ][ j ][ 0 ])) {
                        keysArr.push(this.keyMap[ i ][ j ][ 0 ]);
                    }
                }
            }
        }
        return keysArr;
    }

    values() {
        let valuesArr = [];

        for(let i = 0; i < this.keyMap.length; i++) {
            if(this.keyMap[ i ]) {
                for(let j = 0; j < this.keyMap[ i ].length; j++) {
                    if(!valuesArr.includes(this.keyMap[ i ][ j ][ 1 ])) {
                        valuesArr.push(this.keyMap[ i ][ j ][ 1 ]);
                    }
                }
            }
        }
        return valuesArr;
    }

}

let ht = new HashTable();

ht.set("value", "nill");
ht.set("newValue", "1");
ht.set("newValuee", "2");
ht.set("oldValue", "2");

// console.log(ht.get("value"));

console.log(ht.keys());
console.log(ht.values());
