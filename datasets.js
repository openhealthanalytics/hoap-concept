$.getJSON( "datasets.json" )
	.done(function( json ) {
		var ds = [];
		console.log( "JSON Data: " + json.datasets[ 1 ].name );
		$.each( json.datasets, function (i, item) {
			ds.push( '<div class="dataset" id="'+ item.id + 
			' dscategory="' + item.category +
			'">' + 
			'<div class="dataset-icon"><img style="width:100px; height:100px" src="datasets/' + item.icon + '.png"/></div>' +
			'<div style="height: 12px;"></div>' +
			'<div class="dataset-action"><a href="info?id=' + item.id + '">Info</a></div>' +
			'<div class="dataset-action"><a href="hist?id=' + item.id + '">History</a></div>' +
			'<div class="dataset-action"><a href="prof?id=' + item.id + '">Profile</a></div>' +
			'<div class="dataset-action"><a href="relt?id=' + item.id + '">Related</a></div>' +
			'<div class="dataset-label"><a href="view?id=' + item.id + '">' +
			item.name + '</a></div>' +
			'<table class="item-footer"><tr><td>' +
			'<div class="dataset-ratings">' +
			'<div class="dataset-rating"><img style="width:70px" src="ratings/rating-0' + (item.rate_t+1) + '.png">Timeliness</div>' +
			'<div class="dataset-rating"><img style="width:70px" src="ratings/rating-0' + (item.rate_r+1) + '.png">Reliability</div>' +
			'<div class="dataset-rating"><img style="width:70px" src="ratings/rating-0' + (item.rate_u+1) + '.png">Usefulness</div>' +
			'</div></td><td>' +
			'<div class="share"><a class="sharebutton ' + item.share + '" href="#share"/></a></div>' +
			'</td></tr></table>' +
			'</div>' );
		})
		$( "#items" ).append(ds.join(""));
	})
	.fail(function( jqxhr, textStatus, error ) {
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
	});

