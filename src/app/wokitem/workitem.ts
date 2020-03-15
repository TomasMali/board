


export class Workitem {

    wi: number
    storyPoint: number
    owner: string
    description: string
    state: string
    color: string
    


    constructor(wi : number,storyPoint: number, owner: string, description: string ,
          state: string, color: string) {
       this.wi = wi
       this.storyPoint = storyPoint
       this.owner = owner
       this.description = description
       this.state = state
       this.color = color
    }


    getWi() {
        return this.wi
    }

    getStoryPoint() {
        return this.storyPoint
    }

    getOwner() {
        return this.owner
    }

    getDescription(){
        return this.description
    }

    getState(){
        return this.state
    }
    getColor(){
        return this.color
    }

}