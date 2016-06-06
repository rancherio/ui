import Resource from 'ember-api-store/models/resource';

var Backup = Resource.extend({
  type: 'backup',

  availableActions: function() {
    return [
      { label: 'action.remove',    icon: 'icon icon-trash',        action: 'promptDelete', enabled: this.get('canDelete'), altAction: 'delete' },
      { divider: true },
      { label: 'action.viewInApi', icon: 'icon icon-external-link',action: 'goToApi',      enabled: true },
    ];
  }.property('actionLinks.{restore,purge}','model.canDelete'),
});

export default Backup;
