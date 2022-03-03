const db = require("../sequelize/models")

const modificarEstado = (operacion) => {
    const operacionStr = localStorage.getItem("operaciones")
    if (operacionStr != null) {
        const operaciones = JSON.parse(operacionStr)
        for (let op of operaciones) {
            if (operacion.id == op.id) {
                op.estado = operacion.estado
                break
            }
        }
        localStorage.setItem("operaciones", JSON.stringify(operaciones))
    }
}

const guardarTransaccion=()=>{

}


const eliminarTransaccion=()=>{

}


const obtenerUsuariosOp = async () => {
    const usuario = await db.TransaccionOperacion.findAll({
        order : [
            ["id", "ASC"]
        ]
    })
    return usuario
}

const obtenerUsuarioOp = async (id) => {
    return await db.TransaccionOperacion.findOne({
        where : {
            id : id
        }
    })
}

export {modificarEstado,obtenerUsuariosOp,obtenerUsuarioOp}