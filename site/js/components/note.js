Vue.component('noterow', {
  props: [
    'index',
    'item'
  ],

  data: function () {
    return {
      nextRowAdded: false,
      typeOptions: [
        'TODO',
        'INFO',
        'DONE',
        'DECISION'
      ]
    }
  },

  computed: {
    typeid: function () {
      return 'note-row-typebtn-' + this.index
    }
  },

  methods: {
    addRow: function () {
      if (this.nextRowAdded) return
      this.$parent.participantList.push({
        name: '',
        email: ''
      })

      // Reset material lite components
      componentHandler.upgradeDom()
      this.nextRowAdded = true
    },
    changeType: function (newOption) {
      this.item.type = newOption
    }
  },

  /* eslint-disable */
  template: '\
    <tr>\
      <td><input placeholder="Topic"/></td>\
      <td>\
        <button :id="typeid" class="mdl-button mdl-js-button">\
          {{ item.type }}\
        </button>\
        <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"\
            :for="typeid">\
          <li class="mdl-menu__item" v-for="type in typeOptions" v-on:click="changeType(type)">\
            {{ type }}\
          </li>\
        </ul>\
      </td>\
      <td><input placeholder="Note"/></td>\
      <td><input placeholder="Owner"/></td>\
      <td><input placeholder="Date"/></td>\
    </tr>\
    '
})
