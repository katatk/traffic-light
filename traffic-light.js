// get the divs with class of light (array)
var lightDivs = document.getElementsByClassName("light");

// assign each div in the array with a name 
var redLight =lightDivs[0];
var orangeLight = lightDivs[1];
var greenLight = lightDivs[2];

// traffic light function, assigns color id every 2 seconds, then removes color id from current and adds id to next 

time = 0;
setInterval(function() {

    // turn off orange light, turn on red light
    if (time == 1) {
        orangeLight.id = "";
        redLight.id = "red";
    }
    
    // turn off red light, turn on green light
    if (time == 2) {
        redLight.id = "";
        greenLight.id = "green";
    }
    
    // turn off green light, turn on orange light
     if (time == 3) {
        greenLight.id = "";
        orangeLight.id = "orange";
    }
        
    time++;
    
    if (time == 4) {
        time = 1;
    }

    }, 2000);
