canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

green_car_image = "car2.png";

green_car_width = 75;
green_car_height = 100;

green_car_x = 5;
green_car_y = 225;

background_image = "parkingLot.jpg";

function add()
 {
	background_imgTag = new Image(); 
	//defining a variable with a new image

	background_imgTag.onload = uploadBackground; 
	// setting a function, onloading this variable

	background_imgTag.src = background_image;  
	 // load image


	 green_car_imgTag = new Image(); 
	 //defining a variable with a new image

	 green_car_imgTag.onload = uploadcar; 
	 // setting a function, onloading this variable

	 green_car_imgTag.src = green_car_image;   
	 // load image
}

function uploadBackground() 
{
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() 
{
	ctx.drawImage(green_car_imgTag, green_car_x,green_car_y, green_car_width, green_car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

function up()
{
	if(green_car_y >=0)
	{
		green_car_y = green_car_y - 10;
		console.log("When up arrow is pressed,  x = " +green_car_x + " | y = " +green_car_y);
		 uploadBackground();
		 uploadcar();
	}
}
function down()
{
	if(green_car_y <=500)
	{
		green_car_y =green_car_y+ 10;
		console.log("When down arrow is pressed,  x = " + green_car_x + " | y = " +green_car_y);
		uploadBackground();
		 uploadcar();
	}
}
function left()
{
	if(green_car_x >= 0)
	{
		green_car_x =green_car_x - 10;
		console.log("When left arrow is pressed,  x = " + green_car_x + " | y = " +green_car_y);
		uploadBackground();
		 uploadcar();
	}
}
function right()
{
	if(green_car_x <= 700)
	{
		green_car_x =green_car_x + 10;
		console.log("When right arrow is pressed,  x = " + green_car_x + " | y = " +green_car_y);
		uploadBackground();
		uploadcar();
   }
}
	