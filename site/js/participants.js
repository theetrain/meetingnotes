Vue.component('participants', {
  props: ['participants'],

  template: `
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">
      <input class="mdl-textfield__input" type="text" id="sample1">
      <label class="mdl-textfield__label" for="sample1">Participant 1</label>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label notes-head_people">
      <input class="mdl-textfield__input" type="email" id="sample1">
      <label class="mdl-textfield__label" for="sample1">Email</label>
    </div>
  `
})
