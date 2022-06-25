import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.events({
  'click .login': function(event, template) {
    Accounts.callLoginMethod({methodArguments: [{nick: template.$('input').val()}]});
  }, 
  'click .logout': function(event, template) {
    Meteor.logout();
  }
});
