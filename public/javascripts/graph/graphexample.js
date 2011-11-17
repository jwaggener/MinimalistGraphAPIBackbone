var GraphExample = {
	Collections: {},
	init: function(){
		var model, collection, objects, template;
		objects = [
			new FbObject( { id: "19292868552" } ),
			new FbObject( { id: "john.waggener" } ),
			new FbObject( { id: "vitrue" } ),
			new FbObject( { id: "cocacola" } )
		];
		
		collection = new GraphExample.Collections.FbObjects( objects );
		_.each( collection.models, function( model, index ){ model.fetch({
			
			success: function( model, response ){
				console.log( "success" );
				console.log( "model", model );
				console.log( "response", response );
			},
			
			error: function( model, response ){
				console.log("error");
				console.log( "model", model );
				console.log( "response", response );
			}
			
		}) });

	}
}