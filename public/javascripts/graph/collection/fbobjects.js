GraphExample.Collections.FbObjects = Backbone.Collection.extend({
	
	model: FbObject,
	
	initialize: function( options ){
		this.urlRoot = "https://graph.facebook.com";
	},
	
	url: function(){
		return this.urlRoot;
	}
	
});