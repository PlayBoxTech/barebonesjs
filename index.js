window.onload = () => {
    var objDate = new Date();
    var hours = objDate.getHours();
    const mousePosText = document.getElementById('mouse-pos');
    let mousePos = { x: undefined, y: undefined };
    const crazyElement = document.getElementById("crazy");
    const h1 = document.getElementsByTagName("h1");

    const hoursText = document.getElementById('hours');
    

  /*  if (hours >= 20) {
        document.body.style.backgroundColor = "#663399";
    }

    if (hours >= 9 && hours <= 19) {
        document.body.style.backgroundColor = "#00BFFF";
    }

    if (hours <= 8) {
        document.body.style.backgroundColor = "#DDA0DD";
    }*/

    console.log(hours);
    hoursText.textContent = toString(hours);
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


