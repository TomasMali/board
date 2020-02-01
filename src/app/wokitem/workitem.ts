


export class Workitem {

    id: number
    summary: string
    description: string
    criteriaOfAcceptance: string
    ownerBy: string
    type: string
    state: string
    parent: number
    children: number[]
    //
    filedAgainst: string
    creationDate: string
    createdBy: string
    resolutionDate: string
    resolvedBy: string
    // 
    priority: string
    plannedFor: number
    storyPoints: number
    


    constructor({ 
        id = 0, 
        summary = "",
        description = "",
        criteriaOfAcceptance = "",
        ownerBy = "",
        type = "",
        state = "",
        parent = 0,
        children = [],
        filedAgainst = "",
        creationDate = "",
        createdBy = "",
        resolutionDate = "",
        resolvedBy = "",
        priority = "",
        plannedFor = 0,
        storyPoints = 0

    } = {}) {
        this.id = id
        this.summary = summary
        this.description = description
        this.criteriaOfAcceptance = criteriaOfAcceptance
        this.ownerBy = ownerBy
        this.type = type
        this.state = state
        this.parent = parent
        this.children = children
        this.filedAgainst = filedAgainst
        this.creationDate = creationDate
        this.createdBy = createdBy
        this.resolutionDate = resolutionDate
        this.resolvedBy =resolvedBy
        this.priority = priority
        this.plannedFor = plannedFor
        this.storyPoints = storyPoints
    }


    getId() {
        return this.id
    }

    getOwnerBy() {
        return this.ownerBy
    }

    getName() {
        return this.summary.substring(0, 85)
    }

}