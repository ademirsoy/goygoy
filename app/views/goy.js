export default Ember.View.extend({
  
  layoutName: 'components/goy',
  tagName: 'div',
  classNames: ['item'],
  attributeBindings: ['style'],

  style: function(){
    return this.get('style');
  },

  observer: function(){
    this.applyMasonry();
  }.observes('style'),

  didInsertElement: function(){
  	this.applyMasonry();
  },

  applyMasonry: function(){
    console.log("applying masonry");

    // $('.isotope').isotope({
    //   itemSelector: '.item',
    //   masonry: {columnWidth:10}
    // });


    if(!$('.isotope').data('isotope')){
    	$('.isotope').isotope({itemSelector: '.item', masonry: {
      columnWidth: 10
    }});
    }
    $('.isotope').isotope('reloadItems');
    $('.isotope').isotope('arrange');
    $('.isotope').isotope('layout');

  }.observes('layks')

});