$.getJSON( "datasets.json" )
	.done(function( json ) {
		var ds = [];
		console.log( "JSON Data: " + json.datasets[ 1 ].name );
		$.each( json.datasets, function (i, item) {
			ds.push( '<div class="ds" id="' + item.id +
			'" dscategory="' + item.category +
			'">' +
			'<div class="ds-preview">Preview</div>' +
			'<div class="ds-name">' + item.name + '</div>' +
			'</div>' );
		})
		$( "#items" ).append(ds.join(""));
	})
	.fail(function( jqxhr, textStatus, error ) {
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});

