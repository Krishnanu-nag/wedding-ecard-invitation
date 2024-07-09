
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

//for footer to show current year using date 
document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 24, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "The D-Day yayyyy!!";
    }
}, 1000);


//auto color change of Teaser is here//

    // let colorgenerator=()=>{
    //     const hex="0123456789ABCDEF";
    //     let colorcode="#";
    //     for(let i=0 ;i<6;i++){
    //         colorcode+=hex[Math.floor(Math.random()*16)]
    //     }     
    //     return colorcode;
    // }
    
    // const changecolor=()=>{
    //     const change=document.querySelector(".TeaserIsHere");
    //     change.style.color=colorgenerator();
    // }
    // setInterval(changecolor,1000);

//auto color change script of Teaser is here ends//

//color only within a range for violet variation///
    const code = [
        "#E6E6FA", // Lavender
        "#D8BFD8", // Thistle
        "#DDA0DD", // Plum
        "#EE82EE", // Violet
        "#DA70D6", // Orchid
        "#FF00FF", // Fuchsia
        "#FF00FF", // Magenta
        "#BA55D3", // Medium Orchid
        "#8A2BE2", // Blue Violet
        "#9400D3", // Dark Violet
        "#9932CC", // Dark Orchid
        "#8B008B", // Dark Magenta
        "#800080", // Purple
        "#4B0082", // Indigo
        "#483D8B", // Dark Slate Blue
        "#663399"  // Rebecca Purple
      ];
    const changecolor=()=>{
        const change=document.querySelector(".TeaserIsHere");
        change.style.color=code[Math.floor(Math.random()*16)]
    }
    setInterval(changecolor,300);

//color script for only within a range for violet variation ends here///
