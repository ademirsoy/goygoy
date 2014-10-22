export default Ember.ObjectController.extend({
	
	// layks: 1,

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
 //  }.observes('layks'), 

	actions: { 
		likePhoto: function(){
			// this.set('layks', this.get('layks') + 0.1);
			console.log("like:" + this.get('layks'));	
		}
	}
}


);