class hashTable {
    constructor(size){
        this.table = new Array(size);
        this.size = size
    }
    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    add(key,val){
        let index = this.hash(key);
        this.table[index]=val;
        return true
    }
    get(key){
        let index = this.hash(key);
        return this.table[index]
        
    }
    remove(key){
        let index = this.hash(key);
        this.table[index]=undefined;
        return true
    }
    print(){
        for(let i =0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }

}
const myHashTable = new hashTable(20);
myHashTable.add("name","Akhil");
myHashTable.add("Age",22);
myHashTable.add("Year of birth","11-01-2001");
console.log(myHashTable.print());
