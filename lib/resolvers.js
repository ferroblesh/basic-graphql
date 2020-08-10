'use strict'

const courses = [
    {
        _id: 'anyid',
        title: 'Mi Titulo',
        teacher: 'Mi Prof',
        description: 'descripcion',
        topic: 'programacion'
    },
    {
        _id: 'anyid',
        title: 'Mi Titulo',
        teacher: 'Mi Prof',
        description: 'descripcion2',
        topic: 'programacion'
    },
    {
        _id: 'anyid',
        title: 'Mi Titulo',
        teacher: 'Mi Prof',
        description: 'descripcion3',
        topic: 'programacion'
    }
]

module.exports = {
    getCourses: () => courses
}