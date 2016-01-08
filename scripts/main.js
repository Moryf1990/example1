'use strict';

var thumbnails = [
	{
		caption: 'An Avocado',
		image: 'images/avocado.jpg',
		url: 'https://en.wikipedia.org/wiki/Avocado'
	},
	{
		caption: 'A Cat',
		image: 'images/cat.jpg',
		url: 'http://mashable.com/category/cats/'
	},
	{
		caption: 'A Dog',
		image: 'images/dog.jpg',
		url: 'https://www.petfinder.com/dog-breeds/'
	},
	{
		caption: 'A Llama',
		image: 'images/llama.jpg',
		url: 'http://animals.nationalgeographic.com/animals/mammals/llama/'
	},
	{
		caption: 'Pandas are the best',
		image: 'images/panda.jpg',
		url: 'http://pandas.pydata.org/'
	},
	{
		caption: 'This is random',
		image: 'images/thumb.jpg',
		url: 'http://www.merriam-webster.com/dictionary/thumb'
	}
];






// This is the code for Question 8. I have it commented out because it doesn't work and 
// because it stops the code below from running.

// getImages(function(thumbnails) {
// 	thumbnails.preventDefault();
	// var caption = ('');
	// var image = ('');
	// 	var url = ('');

// 	for (var i = 0; i < thumbnails.length; i++) {
// 		caption.show();
// 		image.show();
// 		<a>url.show()</a>;
// 	}

// 	url.on('click', function() {
// 		if (caption.val() === '' && image.val() === '' && url.val() === '') {
// 		window.location = url.val();
// 		}
// 	});
// });



// Below are some other attempts at solving Question 8

// thumbnails.forEach(function(caption, image, url) {
// 	console.log(cpation.id + image.id + url.id);
// })



// for (var i = 0; i < thumbnails.length; i++) {
// 	var caption = caption[i];
// 	var image = image[i];
// 	caption.show();
// 	image.show();
// }






var readMore = $('.read-more');
var more = $('.more');

readMore.on('click', function() {
	more.slideToggle('fast', function() {
		if ($(this).is(':visible')) {
            readMore.html('read less...')               
        } else {
             readMore.html('read more...')                
        }        
    });      
});






