Vue.component('participant', {
  props: [
    'index',
    'name'
  ],

  template: `
    <div class="participant">
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">
        <input class="mdl-textfield__input" type="text" id="sample1" :value="name">
        <label class="mdl-textfield__label" for="sample1">Participant {{index}} Name</label>
      </div>
      <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">
        <input class="mdl-textfield__input" type="email" id="sample1" value="Oh yeah">
        <label class="mdl-textfield__label" for="sample1">Email</label>
      </div>
    </div>`
})
