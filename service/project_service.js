const {connect} = require('./config')
const {projectModel} = require('../models/project_model')


async function getProjects() {
    return new Promise( resolve => {
        const get_project = 'select * from project'
        connect.query(get_project, (err, project, _) => {
            resolve(project)
        })
    })
}


async function getProjectManeger(manegerId) {
    return new Promise( resolve => {
        const get_project_manerger = `
        select
        maneger.manegerId,
        maneger.name,
        maneger.lastName,
        maneger.salary
        from maneger
        join project
        on maneger.manegerId = project.manegerId
        `

        connect.query(get_project_manerger + `where manegerId = ${manegerId}`,(err, maneger, _) => {
            resolve(maneger)
        })
    })
}


async function getProjectTools(projectId) {
    return new Promise( resolve => {
        const get_project_tool = `
        select
        tools.toolsId,
        tools.toolsName,
        tools.color
        from tools 
        join projecttools
        on tools.toolsId = projecttools.toolsId
        `
        connect.query(get_project_tool + `where projectId = ${projectId}`, (err, tools, _) => {
            resolve(tools)
        })
    })
}

async function deleteProjectByManegerId(manegerId) {
    const projectIds = await getProjectIdByManegerId(manegerId)
    if(projectIds.length > 0) {
        for(let i = 0; i < projectIds.length; i++) {
            let _ = await deleteProjectToolByProjectId(projectIds[i].projectId)
        }
    }
    return new Promise(resolve => {
        const delete_project = `delete from project where manegerId = ${manegerId}`
        connect.query(delete_project, (err, message, _) => {
            if (err)
                resolve(err)
            resolve(`delete project by manegerId = ${manegerId} success`)
        })
    })
}

async function getProjectIdByManegerId(manegerId) {
    return new Promise(resolve => {
        const get_projetcIds = `select projectId from project where manegerId = ${manegerId}`
        connect.query(get_projetcIds, (err, projectId, _) => {
            if (err)
                resolve(err)
            resolve(projectId)
        })
    })
}

async function deleteProjectToolByProjectId(projectId) {
    return new Promise(resolve => {
        const delete_projectTool = `delete from projecttools where projectId = ${projectId}`
        connect.query(delete_projectTool, (err, message, _) => {
            if (err)
                resolve(err)
            resolve(`delete projecttool by projectId = ${projectId} success`)
        })
    })
}

module.exports = {
    getProjects,
    getProjectTools,
    getProjectManeger,
    deleteProjectByManegerId
}