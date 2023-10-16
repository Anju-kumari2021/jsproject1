function updateClock()
{
const cl =document.getElementById('clock')
const time = new Date().toLocaleTimeString()
cl.textContent = time;
}
setInterval(updateClock,1000);