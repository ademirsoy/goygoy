import PhotoModel from 'appkit/models/photo';

 export default Ember.ObjectController.extend({


  photoList: function(){
    var p = this.get("photos");
    // return p;
    var photoObjects = p.map(function(photo){
                return Ember.Object.create({
                  id: photo.id,
                  item: PhotoModel.create(photo.attributes)
                }); 
              });

    // var a = PhotoModel.create(p[0]);
    return photoObjects;
  }.property("photos"),

	actions: {
      share: function() {
        var GoyPhoto = Parse.Object.extend("GoyPhoto");
        var goyPhoto = new GoyPhoto();
        var _this = this;
        goyPhoto.save({width:100, height:100, source:this.get('source'), likeCount: 1}, {
          success: function(savedPhoto){
            var p = Ember.Object.create({
                      id: savedPhoto.id, 
                      item: PhotoModel.create(savedPhoto.attributes)
                    });
            _this.get("photoList").addObject(p);
            // alert("saved source! " + _this.get('source'));
          }, 
          error: function(error){
            alert("save failed!");
          }
        });
      },
      
      likePhoto: function(photoId){
    		// this.set('layks', this.get('layks') + 0.1);
    		// console.log("like:" + this.get('layks'));	
        var photo = this.get("photoList").findBy("id", photoId);
        var p = Ember.Object.create({
                      id: photoId, 
                      item: {
                        width: photo.item.width,
                        height: photo.item.height,
                        likeCount: photo.item.likeCount + 0.1,
                        source: photo.item.source

                      }
                    });

        this.get("photoList").removeObject(photo);
        this.get("photoList").addObject(p);

        // var i = this.get("photoList").indexOf(photo);
        // this.get("photoList")[i] = p;

    		console.log("old count:" + photo.item.likeCount);
        console.log("new count: " + p.item.likeCount);

        PhotoModel.update(photoId, p.item);
  		}
   }
}
);