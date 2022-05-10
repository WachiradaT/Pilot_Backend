const {connect} = require('./config')
const {toolsModel} = require('../models/tools_model')
const { deleteProjectToolBytoolsId,getProjecttoolsIdBytoolsId } = require('./project_service')

async function deleteToolsBytoolsId(toolsId) {
    // const projecttoolsIds = await getProjecttoolsIdBytoolsId(toolsId)
    // if(projecttoolsIds.length > 0){
    //     for(let i = 0; i < projecttoolsIds.length; i++){
    let _ = await deleteProjectToolBytoolsId(toolsId)
    //     }
    // }
    return new Promise (resolve => {
        const delete_tools = `delete from tools where toolsId = ${toolsId}`
        connect.query(delete_tools,(err,message,_) => {
            if(err)
                resolve(err)
            resolve(`delete tools by toolsId = ${toolsId} success`)

        })
    } )

}

module.exports = {deleteToolsBytoolsId}

