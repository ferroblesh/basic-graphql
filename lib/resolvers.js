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
    _id: 'anyid1',
    title: 'Mi Titulo',
    teacher: 'Mi Prof',
    description: 'descripcion2',
    topic: 'programacion'
  },
  {
    _id: 'anyid2',
    title: 'Mi Titulo',
    teacher: 'Mi Prof',
    description: 'descripcion3',
    topic: 'programacion'
  }
]

module.exports = {
  Query: {
    getCourses: () => courses,
    getCourse: (root, args) => courses.find(c => c._id === args.id)
  }
}
