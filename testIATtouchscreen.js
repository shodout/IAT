define(['pipAPI', 'https://shodout.github.io/IAT/testAPItouchscreen.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

return iatExtension({
		category1 : {
			name : 'Female', //Will appear in the data.
			title : {
				media : {word : 'Female'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'Wedding'},
			{word : 'Marriage'},
			{word : 'Parents'}, 
		    	{word : 'Relatives'}, 
    			{word : 'Family'}, 
    			{word : 'Home'}
			{word : 'Children'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Male', //Will appear in the data.
			title : {
				media : {word : 'Male'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {word : 'Career'},
			{word : 'Corporation'},
			{word : 'Salary'},
			{word : 'Office'},
		    	{word : 'Professional'},
       			{word : 'Management'}
			{word : 'Business'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://shodout.github.io/IAT/images/'
		} 
	});
});
