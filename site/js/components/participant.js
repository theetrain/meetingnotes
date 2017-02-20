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
    addRow: function () {
      if (this.nextRowAdded) return
      this.$parent.participantList.push({
        name: '',
        email: ''
      })

      this.$nextTick(function () {
        // Reset material lite components
        componentHandler.upgradeDom()
        this.nextRowAdded = true
      })
    }
  },

  /* eslint-disable */
  template: '\
    <div class="participant">\
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">\
        <input class="mdl-textfield__input" type="text" id="sample1" :value="item.name" v-on:keydown="addRow">\
        <label class="mdl-textfield__label" for="sample1">Participant {{num}} Name</label>\
      </div>\
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">\
        <input class="mdl-textfield__input" type="email" id="sample1" :value="item.email" v-on:keydown="addRow">\
        <label class="mdl-textfield__label" for="sample1">Email</label>\
      </div>\
    </div>'
})
