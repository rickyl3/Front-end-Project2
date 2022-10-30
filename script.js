function openCloseNav() {
    if (document.getElementById("mainPlate").classList.contains("active")) {
        document.getElementById("sideNavSlider").style.width = "400px";
    } else {
        document.getElementById("sideNavSlider").style.width = "0px";
    }
}

function openCloseUnits(unit) {
    console.log(unit);
    document.getElementById(unit).classList.toggle("unitsOpen");
}