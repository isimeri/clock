document.addEventListener("DOMContentLoaded", function(){

    
    const sHand = document.querySelector(".shand");
    const mHand = document.querySelector(".mhand");
    const hHand = document.querySelector(".hhand");
    setInterval(updateClocc, 1000);

    function updateClocc(){
        let date = new Date();
        let seconds = date.getSeconds();
        let minutes = date.getMinutes();
        let hours = date.getHours();
        let sDeg = seconds * 6;
        let mDeg = minutes * 6;
        let hDeg = hours * 30;
        hHand.style.transform = `rotate(${hDeg}deg)`;
        mHand.style.transform = `rotate(${mDeg}deg)`;
        sHand.style.transform = `rotate(${sDeg}deg)`;
    }

})