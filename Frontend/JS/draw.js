const draw = () =>{
    var can = document.getElementById("canvas");
    var ctx = can.getContext("2d");
    ctx.clearRect(0,0,400,300);
    ctx.beginPath();
    ctx.arc(200, 150, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.font = "50px Ariel";
    ctx.textAlign = "center";

    const gradient = ctx.createLinearGradient(0, 0, can.width, 0);
    gradient.addColorStop("0", "magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");

    ctx.fillStyle = gradient;
    ctx.fillText("Welcome To", 200, 100);
    ctx.fillText("OpenATLAS", 200, 150);
    ctx.fillText("TEMP TEXT", 200, 200);
    return null;
}

export {draw}