var mili = 0
var sec = 0
var min = 0

var timer;

var milih = document.getElementById("mili")
var sech = document.getElementById("sec")
var minh = document.getElementById("min")




function counting()
{
    mili++
    milih.innerHTML = mili
    if (mili>98)
    {
        sec++
        sech.innerHTML = sec
        mili=0
    }
    else if (sec>58)
    {
        min++
        minh.innerHTML = min
        sec = 0
    }
}

function start()
{
    timer = setInterval(counting,10)
}


function stop()
{
    clearInterval(timer)
}

function reset()
{
    mili = 0
    sec = 0
    min = 0
    milih.innerHTML = 0
    sech.innerHTML = 0
    minh.innerHTML = 0
    stop()
}


