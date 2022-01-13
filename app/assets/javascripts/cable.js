// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.
//
//= require action_cable
//= require_self

(function () {
    this.App || (this.App = {});

    App.cable = ActionCable.createConsumer();

}).call(this);
