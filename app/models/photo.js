var photoModel = Ember.Object.extend({
    
    id : null,
    height: null,
    width: null,
    source: null,
    likeCount:null,

	// style : function(){
	// 	return "height:" + this.get('newHeight') + "px; width:" + this.get("newWidth") + "px;";
	// }.property('newHeight', 'newWidth'),

	// href: function(){
 //  		return "http://placekitten.com/" + Math.round(this.get('newWidth')) + '/'  + Math.round(this.get('newHeight'));
 //  	}.property('newHeight', 'newWidth'),

 //  	imageSource: function(){
	//   	if(this.get('source')){
	//   		return this.get('source');
	//   	} else {
	//   		return this.get('href');
	//   	}
	// }.property(),

 //  newWidth: function(){
 //  	return Math.round(this.get('width') * this.get('layks'));
 //  }.property('width'),

 //  newHeight: function(){
 //  	return Math.round(this.get('height') * this.get('layks'));
 //  }.property('height'),

 //  sizeObserver: function(){
 //  	this.set('newHeight', this.get('height') * this.get('layks'));
 //  	this.set('newWidth', this.get('width') * this.get('layks'));
 //  	console.log("newWidth: " + this.get('newWidth'));
 //  	console.log("newHeight: " + this.get('newHeight'));
 //  }.observes('layks')
});


photoModel.reopenClass({

	update: function(id, attributes){
    	var GoyPhoto = Parse.Object.extend("GoyPhoto");
  	  	var query = new Parse.Query(GoyPhoto);
  	  	query.get(id, {
		  success: function(photo) {
		    // The object was retrieved successfully.
		    photo.save(null, {
				  success: function(photo) {
				    // Now let's update it with some new data. In this case, only cheatMode and score
				    // will get sent to the cloud. playerName hasn't changed.
				    photo.set("likeCount", attributes.likeCount);
				    photo.save();
		  			// alert("oha kaydetti " + id);
				  }
				});
		  },
		  error: function(object, error) {
		  	alert("e yani");
		    // The object was not retrieved successfully.
		    // error is a Parse.Error with an error code and message.
		  }
		});
	},

    getAll: function () {
        var _self = this;

    	var GoyPhoto = Parse.Object.extend("GoyPhoto");
      	
	  	var query = new Parse.Query(GoyPhoto);
	    return query.find({
	      success: function(photos) {
		     //    var photoObjects = [];

		     //    if (photos) {
			    //     var photoObjects = photos.map(function(photo){
			    //     	return _self.create(photo.attributes); 
			    //     });
			    // }
			    // return photoObjects;

			    return JSON.parse(JSON.stringify(photos));
			},
			error: function(object, error) {
				alert("anam");
				// The object was not retrieved successfully.
				// error is a Parse.Error with an error code and message.
			}
	    });
    }
});

export default photoModel;