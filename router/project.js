const express = require('express')
const router = express.Router()
const {
    getProjects,
    getProjectTools,
    getProjectManeger
} = require('../service/project_service.js')

const {
    getManegerById
} = require('../service/maneger_service')


router.get('/project', async (req, res) => {

    const projects3 = await getProjects()
    let project1 = []
    for (const project of projects3){
        const project_1 = {
            projectId: project.projectId,
            name: project.name,
            dates: project.dates,
            budgets: project.budgets
        }
        project1.push(project_1)
    }
    const result1 = {
        data: project1,        
        unit: project1.length
    }
    res.send(result1)
})

router.get('/project&maneger', async (req, res) => {

    const projects2 = await getProjects()
    let project_maneger1 = []
    for (const project of projects2){
        const maneger = await getManegerById(project.manegerId)
        const project_maneger2 = {
            projectId: project.projectId,
            name: project.name,
            dates: project.dates,
            budgets: project.budgets,
            maneger: maneger
        }
        project_maneger1.push(project_maneger2)
    }
    const result2 = {
        data: project_maneger1,
        unit: project_maneger1.length
    }

    res.send(result2)
})

router.get('/project&tools', async (req, res) => {

    const projects = await getProjects()
    let project_tools = []
    for (const project of projects) {
        const tools = await getProjectTools(project.projectId)
        const project_tool = {
            projectId: project.projectId,
            name: project.name,
            dates: project.dates,
            budgets: project.budgets,
            tools: tools,
            tools_unit: tools.length
        }
        project_tools.push(project_tool)
    }
    const result = {
        data: project_tools,
        unit: project_tools.length
    }
    res.send(result)
})


module.exports = router