define(['pipAPI', 'https://shodout.github.io/IAT/raceAPIcom.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Fair Skin Tone', //Will appear in the data.
			title : {
				media : {word : 'Fair Skin Tone'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		  {image : 'FST1.jpg'}, 
    			{image : 'FST2.jpg'}, 
    			{image : 'FST3.jpg'}, 
    			{image : 'FST4.jpg'}, 
    			{image : 'FST5.jpg'},
          {image : 'FST6.jpg'},
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Dark Skin Tone', //Will appear in the data.
			title : {
				media : {word : 'Dark Skin tone'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		  {image: 'DST1.jpg'}, 
    			{image: 'DST2.jpg'}, 
    			{image: 'DST3.jpg'}, 
    			{image: 'DST4.jpg'}, 
    			{image: 'DST5.jpg'},
          {image: 'DST6.jpg'}, 
			], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	

		base_url : {//Where are your images at?
			image : 'https://shodout.github.io/IAT/images/'
		} 
	});
});
