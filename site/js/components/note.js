/* globals moment */

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
      ],
      today: moment().format('L')
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
      this.$parent.noteList.push({
        type: 'TODO'
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
      <td><i class="material-icons">drag_handle</i></td>\
      <td><input placeholder="Topic"/></td>\
      <td>\
        <button :id="typeid" class="mdl-button mdl-js-button" :class="item.type">\
          {{ item.type }}\
        </button>\
        <ul class="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect"\
            :for="typeid">\
          <li class="mdl-menu__item" v-for="type in typeOptions" v-on:click="changeType(type)">\
            {{ type }}\
          </li>\
        </ul>\
      </td>\
      <td><input placeholder="Note" v-on:keydown="addRow"/></td>\
      <td><input placeholder="Name"/></td>\
      <td><input :placeholder="today"/></td>\
    </tr>\
    '
})
