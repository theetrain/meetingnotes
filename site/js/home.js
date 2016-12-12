document.addEventListener('DOMContentLoaded', function (event) {
  const siteTitle = 'Meeting Notes'
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

  new Vue({
    el: '#app',
    data: {
      siteTitle: siteTitle,
      participantList: participantList
    }
  })
})
