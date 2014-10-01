 export default Ember.ArrayController.extend({
	itemController: 'goy',
	actions: {
      share: function() {
      	// this.pushObject({width:100, height:100, source:this.get('source')});
        var GoyPhoto = Parse.Object.extend("GoyPhoto");
        var goyPhoto = new GoyPhoto();
        goyPhoto.save({width:100, height:100, source:this.get('source')}, {
          success: function(goyPhoto){
            alert("saved!");
          }, 
          error: function(goyPhoto, error){
            alert("save failed!");
          }
        });
      },

      test: function() {
        var MyObject = Parse.Object.extend("MyObject");

        var query = new Parse.Query(MyObject);
        query.find({
          success: function(o) {
            alert("yuhuuu" + o.length); 
          },
          error: function(object, error) {
            alert("anam");
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
          }
        });
      },

      save: function() {
        var MyObject = Parse.Object.extend("MyObject");

        var myObject = new MyObject();
        myObject.save({name: "john"}).then(function(object) {
          alert("john saved");
        });
      },

      likePhoto: function(){
  		// this.set('layks', this.get('layks') + 0.1);
  		// console.log("like:" + this.get('layks'));	
  			console.log("adsda");
  		}
   }
}
);