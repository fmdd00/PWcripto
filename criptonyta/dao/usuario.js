import db from "../sequelize/models"

const obtenerUsuarios = async () => {
    const usuario = await db.Usuario.findAll({
        order : [
            ["id", "ASC"]
        ]
    })
    return usuario
}

const obtenerUsuario = async (id) => {
    return await db.Usuario.findOne({
        where : {
            id : id
        }
    })
}


export { obtenerUsuarios, obtenerUsuario }