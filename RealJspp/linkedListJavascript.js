class DoublyLinkedList {
    constructor() {
      this.nodes = [];
    }
    
    //this is a size is run length of array
    get size() {
      return this.nodes.length;
    }
  
    get head() {
      return this.size ? this.nodes[0] : null;
    }
  
    get tail() {
      return this.size ? this.nodes[this.size - 1] : null;
    }
  
    insertAt(index, value) {
        //this also return last one first Element
      const previousNode = this.nodes[index - 1] || null;
      //this also return insert last value
      const nextNode = this.nodes[index] || null;
      
      const node = { value, next: nextNode, previous: previousNode };
  
      if (previousNode) previousNode.next = node;
      if (nextNode) nextNode.previous = node;
      this.nodes.splice(index, 0, node);
    }
  
    insertFirst(value) {
      this.insertAt(0, value);
    }
  
    insertLast(value) {
      this.insertAt(this.size, value);
    }
  
    getAt(index) {
      return this.nodes[index];
    }
  
    removeAt(index) {
      const previousNode = this.nodes[index - 1] || null;
      const nextNode = this.nodes[index + 1] || null;
  
      if (previousNode) previousNode.next = nextNode;
      if (nextNode) nextNode.previous = previousNode;
  
      return this.nodes.splice(index, 1);
    }
  
    clear() {
      this.nodes = [];
    }
  
    reverse() {
      this.nodes = this.nodes.reduce((acc, { value }) => {
        const nextNode = acc[0] || null;
        const node = { value, next: nextNode, previous: null };
        if (nextNode) nextNode.previous = node;
        return [node, ...acc];
      }, []);
    }
  
    *[Symbol.iterator]() {
      yield* this.nodes;
    }
  }


const list = new DoublyLinkedList();

list.insertFirst(100);
list.insertLast(2);
list.insertAt(2,3)
//this is the total size of the array
console.log(list.size);
//this is the first value of insert in array
console.log(list.head.value);
//tail value
console.log(list.tail.value)
//tail previous value
console.log(list.tail.previous.value);
[...list.map(e => e.value)];    // [3, 2, 1, 5, 4]

list.removeAt(1);               // 2
list.getAt(1).value;            // 1
list.head.next.value;           // 1
[...list.map(e => e.value)];    // [3, 1, 5, 4]

list.reverse();
[...list.map(e => e.value)];    // [4, 5, 1, 3]

list.clear();
list.size;   
//this is the return total array length
console.log(list);