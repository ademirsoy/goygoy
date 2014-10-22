import PhotoModel from 'appkit/models/photo';

export default Ember.Route.extend({
	model: function(){
    return  Ember.RSVP.all([PhotoModel.getAll()]).then(function(response){
         return Ember.Object.create({
              photos: response[0]
            })
    })
	}
});
