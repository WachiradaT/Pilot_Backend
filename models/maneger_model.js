class manegerModel {
    constructor(map){
        if (!map)
            return
        this.manegerId = map.manegerId
        this.name = map.name
        this.lastName = map.lastName
        this.salary = map.salary
    }

    merge (oldValue,newValue) {
        this.manegerId = oldValue.manegerId
        this.name = !newValue.name ? oldValue.name : newValue.name
        this.lastName = !newValue.lastName ? oldValue.lastName : newValue.lastName
        this.salary = !newValue.salary ? oldValue.salary : newValue.salary
        return this
    }
}
/*
x = 2
if (x) == true


x = undefined
if (x) == false
if (!x) == true // x = undefind
*/

/*
newValue.name == undefined ? oldValue.name : newValue.name

if (newValue.name == undefined) {
    return oldValue.name
}
else {
    return newValue.name
}
*/

module.exports = { manegerModel }