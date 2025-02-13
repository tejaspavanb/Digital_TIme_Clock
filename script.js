let clock=document.getElementById('clock');
function updateClock() {
    const now = new Date();
    h = now.getHours();
    text="AM";
    if(h>12){
        h=h%12;
        text="PM";
    }
    h=h.toString().padStart(2, "0");
    const m=now.getMinutes().toString().padStart(2, "0");
    const s=now.getSeconds().toString().padStart(2, "0");
    clock.textContent = (h+":"+m+":"+s+" "+text);
}
updateClock();
setInterval(updateClock, 1000);
console.log(clock);