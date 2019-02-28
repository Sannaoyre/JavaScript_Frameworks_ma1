# JavaScript_Frameworks_ma1
Create a website slider

Introduction:
With these files you will get a simple JQuery slider. The slider is both autoplayed and can be controlled by two arrows. 



The HTML:
There is only one HTML file, with little content.

-The script are important for the JQuery to work  

-In the HTML file we create a DIV with an ID "slider"

-Inside this DIV we set up two controllers for the slider, with classes "control__next" and "control__prev"

-Next, we set up a list with the images for the slider (you can use the links I have set as sources). I also gave each image an title witch will be triggered by CSS and JQuery




The CSS:
There is only one CSS file, with style for the Slider, Text and Controllers

-What is important to note here, is the style for "position", "overflow", "display" and "z-index". Besides these, you can change the style as you like without ruining the slider.  



The JS/JQuery
There is only one JS file, with the necessary functions for a basic slider. 

-Line 1: we use the ready() method. This is used to make a function available after the document is loaded. So whatever code we write inside the $(document), the ready() method will run once the page DOM is ready to execute JavaScript code. 

-Line 5-8: here we declare some variables.

-Line 12: this line makes the slider show one image at the time. Without this, the slider will show all images across the screen.  

-Line 15: this line makes the images slide without any margins to it. The images overlap each other nicely.

-Line 19-26:

-Line 29-31: here we used the click() method. This occurs when an element is clicked. So when the left controller in the slider is clicked, the moveLeft function is triggered. 

-Line 36-43:  

-Line 46-48: here we also used the click() method. So when the right controller in the slider is clicked, the moveRight function is triggered.

-Line 53-55: here we use the append() method, which will take our class name (slider__text) and append it to our selected element (li p). This is the image text in the HTML file, that now will be displayed at the page. 

-Line 58-60: here we set an interval to the function, so that the slider will automatically slide. We trigger the moveRight function to go every 3 second.