window.onload = () => {
    var objDate = new Date();
   

    const mousePosText = document.getElementById('mouse-pos');
    let mousePos = { x: undefined, y: undefined };
    const crazyElement = document.getElementById("crazy");
    const h1 = document.getElementsByTagName("h1");

    
    startTime();

  /*  if (hours >= 20) {
        document.body.style.backgroundColor = "#663399";
    }

    if (hours >= 9 && hours <= 19) {
        document.body.style.backgroundColor = "#00BFFF";
    }

    if (hours <= 8) {
        document.body.style.backgroundColor = "#DDA0DD";
    }*/

    //startTime();
   
    //hoursText.textContent = toString(hours);
    window.addEventListener('mousemove', (event) => {
        mousePos = { x: event.clientX, y: event.clientY };
        mousePosText.textContent = `(${mousePos.x}, ${mousePos.y})`;
          // Calculate color values based on mouse position
      const red = mousePos.x % 256;
      const green = mousePos.y % 256;
      const blue = (mousePos.x + mousePos.y) % 256;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
     h1[0].style.color = `rgb(${green}, ${red}, ${blue})`;

    });

    
}

function startTime() {
    var objDate = new Date();
    var h = objDate.getHours();
    var m = objDate.getMinutes();
    var s = objDate.getSeconds(); 
    m = checkTime(m);
    s = checkTime(s);
    h = checkHour(h);

    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkHour(i) {
    console.log(i);
    console.log(i-12);
    switch (i){
        case i > 12:
            i = i - 12;
        break;
        case i = 0:
            i = 12;
        break;
    }
    return i; 
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


