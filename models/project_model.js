class projectModel {
    constructor(map){
        this.projectId = map.projectId
        this.name = map.name
        this.dates = map.dates
        this.budgets = map.budgets
        this.manegerId = map.manegerId
    }
}

module.exports = { projectModel}