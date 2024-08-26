const tricks = document.getElementById("tricks")

// this is a "user-defined event" (as opposed to an inherent event)
tricks.addEventListener("click", event => {
    event.preventDefault()
    window.location.replace("https://www.youtube.com/watch?v=_jDpPDSvDPc")
})