window.onload = () =>  {
    var objDate = new Date();
    var hours = objDate.getHours();
    const hoursText = document.getElementById('hours');

    if (hours >= 20) {
        document.body.style.backgroundColor = "#663399";
    }

    if (hours >= 9 && hours <= 19) {
        document.body.style.backgroundColor = "#00BFFF";
    }

    if (hours <= 8) {
        document.body.style.backgroundColor = "#DDA0DD";
    }

    console.log(hours);
    hoursText.textContent = toString(hours);
}