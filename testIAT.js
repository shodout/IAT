define(['pipAPI', 'https://RRIC-IPS.github.io/IAT/IATAPI.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

return iatExtension({
		category1 : {
			name : 'Minorities', //Will appear in the data.
			title : {
				media : {word : 'Minorities'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'Minorities1.jpg'},
			{image : 'Minorities2.jpg'},
			{image : 'Minorities3.jpg'}, 
		    	{image : 'Minorities4.jpg'}, 
    			{image : 'Minorities5.jpg'}, 
    			{image : 'Minorities6.jpg'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Chinese', //Will appear in the data.
			title : {
				media : {word : 'Chinese'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'Chinese1.jpg'},
			{image : 'Chinese2.jpg'},
			{image : 'Chinese3.jpg'},
			{image : 'Chinese4.jpg'},
		    	{image : 'Chinese5.jpg'},
       			{image : 'Chinese6.jpg'}
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://RRIC-IPS.github.io/IAT/images/'
		} 
	});
});
