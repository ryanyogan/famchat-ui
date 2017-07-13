import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doRegister() {
      alert('Register')
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
