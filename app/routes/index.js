import Photos from 'appkit/models/photo';

export default Ember.Route.extend({
	model: function(){
      return Ember.$.get('http://0.0.0.0:4567/photos').then(function (response) {
            return response.photos;
        });
	}
});
