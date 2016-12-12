Vue.component('participant', {
  props: [
    'index',
    'item'
  ],
  computed: {
    num: function () {
      return this.index + 1
    }
  },

  methods: {
    addRow: function () {

    }
  },

  template: `
    <div class="participant">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">
        <input class="mdl-textfield__input" type="text" id="sample1" :value="item.name">
        <label class="mdl-textfield__label" for="sample1">Participant {{num}} Name</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">
        <input class="mdl-textfield__input" type="email" id="sample1" :value="item.email">
        <label class="mdl-textfield__label" for="sample1">Email</label>
      </div>
    </div>`
})
