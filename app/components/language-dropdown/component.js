import Ember from 'ember';
import C from 'ui/utils/constants';

export default Ember.Component.extend({
  tagName      : 'div',
  classNames   : ['dropdown', 'language-dropdown', 'inline-block'],
  classNameBindings: ['hideSingle:hide'],

  language     : Ember.inject.service('user-language'),
  intl         : Ember.inject.service(),
  session      : Ember.inject.service(),

  locales : Ember.computed.alias('language.locales'),

  hideSingle: function() {
    return Object.keys(this.get('locales')).length <= 1;
  }.property('locales'),

  actions: {
    selectLanguage(language) {
      let route = this.get('app.currentRouteName');

      if (route === 'login') {
        this.get('session').set(C.SESSION.LOGIN_LANGUAGE, language);
      }

      this.get('language').sideLoadLanguage(language).then(() => {
        this.get('language').setLanguage(language);
      });
    }
  },

  selected : Ember.computed('intl._locale', function() {
    let out = null;
    let locale = this.get('intl._locale');
    if (locale) {
      out = locale[0];
    }
    return null;
  }),

});
