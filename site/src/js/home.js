const Vue = require('vue')

var siteTitle = 'Meeting Notes'
// var participantList = [
//   {
//     name: 'Rico',
//     email: 'reeek'
//   },
//   {
//     name: 'Batman',
//     email: 'the bat'
//   }
// ]
var participantList = [
  {
    name: '',
    email: ''
  }
]

var noteList = [
  {
    type: 'TODO'
  }
]

new Vue({ // eslint-disable-line
  el: '#app',
  data: {
    siteTitle: siteTitle,
    participantList: participantList,
    noteList: noteList
  }
})
