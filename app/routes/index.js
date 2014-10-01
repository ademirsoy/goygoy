import Photos from 'appkit/models/photo';

export default Ember.Route.extend({
	model: function(){
		var GoyPhoto = Parse.Object.extend("GoyPhoto");
      	
      	var query = new Parse.Query(GoyPhoto);
        return query.find({
          success: function(photos) {
            // alert("yuhuuu" + photos.length);
            return Ember.Array.constructor(photos);
          },
          error: function(object, error) {
            alert("anam");
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
          }
        });

      	// return Ember.$.get('http://0.0.0.0:4567/photos').then(function (response) {
       //      return response.photos;
       //  });
	}
});
