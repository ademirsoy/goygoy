var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.resource('component-test');
  this.resource('helper-test');
  this.resource('test', {path:"/test"});
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
