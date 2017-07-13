import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doLogin() {
      alert('Logged in now')
    }
  },
  model() {
    return {
      email: '',
      password: '',
    };
  }
});
