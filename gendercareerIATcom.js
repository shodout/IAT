define(['pipAPI', 'https://shodout.github.io/IAT/gendercareerAPIcom.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Female', //Will appear in the data.
			title : {
				media : {word : 'Female'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{word : 'Rebecca'}, 
    			{word : 'Michelle'}, 
    			{word : 'Emily'}, 
    			{word : 'Julia'}, 
    			{word : 'Anna'}, 
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},	
		category2 :	{
			name : 'Male', //Will appear in the data.
			title : {
				media : {word : 'Male'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'1.8em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    	{word: 'Ben'}, 
    			{word: 'Paul'}, 
    			{word: 'Daniel'}, 
    			{word: 'John'}, 
    			{word: 'Jeffrey'}, 
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'2.3em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://shodout.github.io/IAT/images/'
		} 
	});
});
