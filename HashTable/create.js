class HashaTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }

    set(key,value){
        let index = this.hash(key);
        //this.table[index] = value;
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item => item[0]===key);
            console.log(sameKeyItem);
            if(sameKeyItem){
                sameKeyItem[1] = value
            }else{
                bucket.push([key,value])
            }
        }
        return true
    }
    get(key){
        let index = this.hash(key);
        //return this.table[index];
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0])
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key){
        let index = this.hash(key);
        //this.table[index] = undefined;
        //return true;
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0])
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }

    display(){
        for(let i =0; i<this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}
const table = new HashaTable(50);

table.set("name","Akhil")
table.set("mane","Hadi")
table.set("Age",23)
table.set("eAg",45)
table.set("Age",29)

table.set("Place","Malappuram")
table.set("Edu","Degree")
table.set("dEu","HElhlls")
table.set("Profession","Software Engineer")
console.log(table.get("Age"));
//table.remove("Age")
table.display()
