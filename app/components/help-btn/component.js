import Ember from 'ember';
import C from 'ui/utils/constants';

export default Ember.Component.extend({
  settings: Ember.inject.service(),

  title: 'Go to documentation',
  link: '',
  target: '_blank',

  tagName: 'A',
  attributeBindings: ['title','href'],
  classNames: ['small'],
  classNameBindings: ['settings.isPrivateLabel:hide'],

  href: function() {
    return C.EXT_REFERENCES.DOCS + this.get('link');
  }.property('link')

});