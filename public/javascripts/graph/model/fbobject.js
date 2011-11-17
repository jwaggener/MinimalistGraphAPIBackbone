var FbObject = Backbone.Model.extend({
	
	constants:{
		PICTURE: "picture"	
	},
	
	urlRoot: "https://graph.facebook.com",
	
	picture: function(){
		return this.url() + "/" + this.constants.PICTURE;
	}
	
});