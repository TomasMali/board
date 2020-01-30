



export class Workitem {

    id: Number
    name: string
ownerBy: string
type: string

    constructor(id:number,name: string, ownerby:string,type: string){
        this.id = id
        this.name = name
        this.ownerBy = ownerby
        this.type = type
    }



getId(){
    return this.id
}

getOwnerBy(){
    return this.ownerBy.substring(0,45)
}

getName(){
    return this.name.substring(0,85)
}

}
