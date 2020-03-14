


export class Workitem {

    wi: number
    storyPoint: number
    owner: string
    description: string
    state: string
    


    constructor(wi : number,storyPoint: number, owner: string, description: string ,  state: string) {
       this.wi = wi
       this.storyPoint = storyPoint
       this.owner = owner
       this.description = description
       this.state = state
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

}