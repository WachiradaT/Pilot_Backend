const { connect } = require('./config')
const {manegerModel} = require('../models/maneger_model')
const { deleteProjectByManegerId } = require('./project_service')


async function getManegerById(manegerId) {
    return new Promise( resolve => {
        const get_maneger = `select * from maneger where manegerId = ${manegerId}`
        connect.query(get_maneger, (err, maneger, _) => {
            resolve(maneger)
        })
    })
}

async function postManeger(object){
    return new Promise(resolve =>{
        const maneger = new manegerModel(object)
        const post_maneger = `INSERT INTO maneger(name,lastName,salary) 
        VALUES (
            '${maneger.name}',
            '${maneger.lastName}',
            ${maneger.salary})`
        connect.query(post_maneger,(err,maneger,_)=>{
            if (err)
                resolve (err)
            resolve(`create new maneger ID ${maneger.insertId}`)
        })

    })
}

async function updateManeger(id, object) {
    let oldManeger = await getManegerById(id)
    return new Promise(resolve => {
        oldManeger = oldManeger[0]
        const newManeger = new manegerModel().merge(oldManeger, object)
        const put_maneger = `UPDATE maneger SET 
            name = '${newManeger.name}',
            lastName = '${newManeger.lastName}',
            salary = ${newManeger.salary}
            WHERE manegerId = ${id}`
        connect.query(put_maneger,(err,message,_) => {
            if (err)
                resolve(err)
            //resolve(`update maneger id ${id} sucess ${message}`)
            resolve('update sucess')
        })
    })
}

async function deleteManeger(id) {
    const _ = await deleteProjectByManegerId(id)
    return new Promise(resolve => {
        const delete_maneger = `delete from maneger where manegerId = ${id}`
        connect.query(delete_maneger, (err, message, _) => {
            if (err)
                resolve(err)
            resolve(`delete maneger id ${id} success`)
        })
    })
}


module.exports = {
    getManegerById,
    postManeger,
    updateManeger,
    deleteManeger
}