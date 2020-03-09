const optionCrear = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const optionActualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optionCrear)
    .command('actualizar', 'actualiza el estado completadod e una tarea', optionActualizar)
    .command('borrar', 'borra una tarea', optionCrear)
    .help()
    .argv

module.exports = {
    argv
}