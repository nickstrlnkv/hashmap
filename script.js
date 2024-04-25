class HashMap {

    constructor() {
        this.buckets = [null, null, null, null, null];
    }
    // takes a key and produces a hash code with it
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
        }

        return hashCode;
    }
    // takes a key, hash it -> add to bucket hash:value
    set(key, value) {
        key = this.hash(key);
        console.log(key);
        if (key < 0 || key >= this.buckets.length)
            throw new Error('Trying to access index out of bound');

        if (this.buckets[key] == null)
            this.buckets[key] = value;
        // TODO: if bucket already has a value -> create array -> then push old value and new value -> then push array to buckets[key]
    }

    // return true/false based on whether or not the key is in the hash map
    has(key) {
        key = this.hash(key);
        if (key < 0 || key >= this.buckets.length)
            throw new Error('Trying to access index out of bound');
        
        return this.buckets[key] !== null;
    }
    // remove element the entry with that key and return true
    remove(key) {
        key = this.hash(key);
        if (key < 0 || key >= this.buckets.length)
            throw new Error('Trying to access index out of bound');
        else if (this.buckets[key] !== null) {
            return false
        }
        this.buckets[key] = null;
        return true;
    }
    // return the number of stored keys in the hashmap
    length() {
        let countKeys = 0
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== null)
                countKeys++;
        }
        return countKeys;
    }
    // return an array containing all the values
    values() {
        let values = []
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] !== null ? values.push(this.buckets[i]) : null;
        }
        return values
    }
    // returns an array that contains each key, value pair
    entries() {
        let values = []
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== null)
                values.push([i, this.buckets[i]]);
        }
        return values;
    }


}

// TODO: 
//  There is a collision in the code. Rewrite the 'set' function (if has already exists, insert a list containing values by this hash)

