document.addEventListener('DOMContentLoaded', function (event) {
  const siteTitle = 'Meeting Notes'
  var participantList = [
    {
      name: 'Rico',
      email: 'reeek'
    },
    {
      name: 'Batman',
      email: 'the bat'
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
