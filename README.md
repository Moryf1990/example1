# Instructions
Fork and clone this repository down to your computer. Enter your answers into the README.md file where appropriate, or modify the necessary files where appropriate. When you are finished commit your changes and push them back to your GitHub account. Email aaron@theironyard.com with a link to your forked GitHub repo.


## Question 1
What is the difference between elements that have a CSS property of `display: block` and elements that have a property of `display: inline`?

A block-level element will always start on a new line and it takes up the full width of space available. An element with a display property of inline does not start on a new line and it will only take up as much width as it has to.


## Question 2
Order the following CSS selectors from most specific to least specific. If two selectors are tied, then the one that appears lower should be considered more specific. Explain why you ordered them the way that you did.

```css
button {
	color: blue;          
}

body > nav button.navbar-toggle {
	color: red;
}

.navbar-header > .collapsed {
	color: green;
}

nav div.container div button {
	color: red;
}

#logo {
	color: pink;
}
```

CSS specifity is calculated by importance of their attributes. The most important attribute is the style attribute. The second most important is id, third most important is class/psuedo-class attribute and lastly is the elements themselves. Therefore, I have listed the following examples, with the most specific being listed first, in the following order: 

#logo {
	color: pink;
}

The reason this is the most specific example is because it is the only one that has an id value (#logo). None of the other examples have something this specific.

.navbar-header > .collapsed {
	color: green;
}

The reason this is the next most specific is because it has two classes (.navbar-header and .collapsed). The reason that they are not pseudo-classes is because they do not describe a specific state of an element (such as :hover).

nav div.container div button {
	color: red;
}

The reason this is the next most specific is because it has one class and four elements. The class is .container and the four elements are nav, div, div and button.


body > nav button.navbar-toggle {
	color: red;
}

The reason this is the next most specific is because it has one class and three elements. The class is .navbar-toggle and the three elements are body, nav and button.

button {
	color: blue;          
}

The reason this is the least specific is because it only has one element and that element is button.

## Question 3
Link together the index.html file with the main.css and main.js files.

## Question 4
Commit and push your changes to GitHub

**For the following questions you should not have to modify the index.html file at all.**

## Question 5
Add a background color of green to the section element. The background should show behind the three horizontally aligned boxes and should automatically adjust its height properly as the window width changes. You should not have to modify the HTML.

## Question 6
Add the panda dog image (in the images directory) as the background image of the section element. It's okay if it overrides the green background. You should not have to modify the HTML.

## Question 7
Use jQuery to make the "read more" link at the bottom of the page function as follows:

When the link is clicked the "more" paragraph should be shown and the link should change its text to "read less". If the link is clicked again it should change back to its original text and the "more" paragraph should be hidden.

## Question 8
Using jQuery and the `thumbnails` array inside of main.js, display all of the images and captions inside of the thumbnails section. When you click on a thumbnail image it should take you to the associated url. This should work regardless of the number of elements inside of the thumbnails array. I will test it with different data in the same format. Hint: you will need to use a loop.