'use strict';

var Backbone = require('backbone');
var profileTemplate = require('../templates/profile.rvt');
var AccountModel = require('../models/account');
var rivets = require('rivets');


var Profile = Backbone.View.extend({
  template: profileTemplate,

  initialize: function() {
    this.account = new AccountModel();
    this.account.fetch();
  },

  render: function() {
    this.$el.html(this.template);

    this.rivet = rivets.bind(this.$el, {
      profile: this.account,
      controller: this
    });
  },

  clean: function() {
    this.rivet.unbind();
    delete this.rivet;
    this.$el.empty();
  }
});

module.exports = Profile;
