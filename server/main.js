import { Meteor } from 'meteor/meteor';

Meteor.publish(null, function() {
  Meteor._sleepForMs(100);
  return [];
});

Meteor.publish(null, function() {
  if (!this.userId) {
    console.log(`Logged out subscription on ${this.connection.id}`);
  } else {
    console.log(`Subscription for ${this.userId} on ${this.connection.id}`);
    this.onStop(() => {
      console.log(`Unsubscription for  ${this.userId} on ${this.connection.id}`);
    });
  }
  this.ready();
});

Accounts.registerLoginHandler('repro', function({nick}) {
  Meteor.users.upsert(nick, {services: {repro: {}}});
  return {userId: nick};
});
