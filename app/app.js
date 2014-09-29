import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import Goy from 'appkit/views/goy';

var App = Ember.Application.extend({
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver
});

loadInitializers(App, 'appkit');

Ember.Handlebars.helper('stylish', function(size){
	return "style=width:" + size.toString() + "px; height:" + size.toString() + "px;" ;
});

Ember.Handlebars.helper('goy', Goy);
export default App;
