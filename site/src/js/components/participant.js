Vue.component('participant', {
  props: [
    'index',
    'item'
  ],

  data: function () {
    return {
      nextRowAdded: false
    }
  },

  computed: {
    num: function () {
      return this.index + 1
    }
  },

  methods: {
    save: function () {

    },
    deleteRow: function () {

    },
    addRow: function (el) {
      if (this.nextRowAdded || el.currentTarget.value === '') return
      this.$parent.participantList.push({
        name: '',
        email: ''
      })

      this.$nextTick(function () {
        // Reset material lite components
        componentHandler.upgradeDom()
        this.nextRowAdded = true
      })
    },
    clearBlanks: function () {
      console.log('Length', this.$parent.participantList.length)
      this.$parent.participantList.forEach(function (row) {
        if (row.email === '' && row.name === '') {
          // delete row
        }
      })
    }
  },

  /* eslint-disable */
  template: '\
    <div class="participant">\
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">\
        <input class="mdl-textfield__input" type="text" id="sample1" :value="item.name" v-on:input="addRow" v-on:blur="clearBlanks">\
        <label class="mdl-textfield__label" for="sample1">Participant {{num}} Name</label>\
      </div>\
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">\
        <input class="mdl-textfield__input" type="email" id="sample1" :value="item.email" v-on:input="addRow" v-on:blur="clearBlanks">\
        <label class="mdl-textfield__label" for="sample1">Email</label>\
      </div>\
    </div>'
})
