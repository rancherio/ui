import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.replaceWith(this.controllerFor('hosts/new').get('lastRoute'));
  }
});
