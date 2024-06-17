// create a hashtable class with table propery(new Array(size))
// setItem methode(key,val) 
class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.numItems = 0;
    }
    // hash function constain for loop finding a hash value which (convert string into integer)
    hashStringToInteger=(key,tableSize)=>{
        let hash = 7;
        for (let i = 0; i < key.length; i++) {
           //hash(7) and 17 are two arbitari prime values selected to minimize the collision
           hash =  (hash*17*key.charCodeAt(i))%tableSize;    
        }
        return hash
    }
    resize = () => {
        const newTable = new Array(this.table.length*2);
        this.table.forEach(item=>{
            if(item){
                item.forEach(([key,value])=>{
                    const ind = this.hashStringToInteger(key,newTable.length);
                    if(newTable[ind]){
                        newTable[ind].push([key,value])
                    }else{
                        newTable[ind]=[[key,value]]
                    }
                })
            }
        })
        this.table = newTable;
    }
    // convert key into index using hash function
    //if(this.table[index]) this.table.push([key,val])
    //else this.table[index] = [[key,val]]
    setItem=(key,val)=>{
        this.numItems++;
        const loadFactore = this.numItems/this.table.length;
        if(loadFactore>.8){
            this.resize()
        }
        let ind = this.hashStringToInteger(key,this.table.length)
        if(this.table[ind]){
            this.table[ind].push([key,val])
        }else{
            this.table[ind]=[[key,val]]
        }
    }
// get index using hash function
// loop through the this.table[index] and check wher key match and return its first postion value
    getItm = (key) => {
        let ind = this.hashStringToInteger(key,this.table.length);
        if(!this.table[ind]) return null;
        return this.table[ind].find(x=>x[0]===key)[1]
    }
}

const myTable = new HashTable(3);
myTable.setItem("firstName","Akhil");
myTable.setItem("lastName","Moorkkan");
console.log(myTable.table.length);
myTable.setItem("age","12");
console.log(myTable.table.length);
myTable.setItem("dob","sfds");
console.log(myTable.getItm("firstName"));
console.log(myTable.getItm("lastName"));
console.log(myTable.getItm("age"));
console.log(myTable.getItm("dob"));
console.log(myTable.table);