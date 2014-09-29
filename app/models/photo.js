var photoModel = Ember.Object.extend({
    items: null
});


photoModel.reopenClass({

    getAll: function () {
        return  Ember.$.get('http://0.0.0.0:4567/photos').then(function (response) {

            var photos = photoModel.create();
            photos.set('items', response.photos);
            return photos;
        });
    }
});

export default photoModel;