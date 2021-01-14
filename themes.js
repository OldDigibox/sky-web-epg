/*var isLightOn = true;

function lightsOff() {
    if (isLightOn) {
        isLightOn = false;
        $("body").get(0).style.setProperty("--background-image", "url('https://media.discordapp.net/attachments/621022891374542858/709301926642188308/darken.png')");
        $("body").get(0).style.setProperty("--main-colour", "#222");
        $("body").get(0).style.setProperty("--sub-colour", "#444");
        $("body").get(0).style.setProperty("--listnum-colour", "white");
    } else {
        $("body").get(0).style.setProperty("--background-image", "url('https://media.discordapp.net/attachments/649968233553723405/709086018942402631/image1.jpg')");
        $("body").get(0).style.setProperty("--main-colour", "rgb(0, 37, 201)");
        $("body").get(0).style.setProperty("--sub-colour", "rgb(0, 26, 143)");
        $("body").get(0).style.setProperty("--listnum-colour", "rgb(126, 126, 255)");
    }
}*/

function useDefaultTheme() {
    $("body").get(0).style.setProperty("--background-image", "url(img/blank.png)");
    $("body").get(0).style.setProperty("--main-colour", "rgb(0, 37, 201)");
    $("body").get(0).style.setProperty("--sub-colour", "rgb(0, 26, 143)");
    $("body").get(0).style.setProperty("--listnum-colour", "rgb(126, 126, 255)");
    $("body").get(0).style.setProperty("font-size", "16px");
    $("body").get(0).style.setProperty("--font-colour", "white");
    $("body").get(0).style.setProperty("--main-colour-hover", "#FCDA25");
    $("body").get(0).style.setProperty("--sub-colour-hover", "#fec200");
    $("body").get(0).style.setProperty("--listnum-colour-hover", "rgb(0, 0, 179");
    $("body").get(0).style.setProperty("--font-colour-hover", "rgb(0, 0, 179");
    return true;
}

function useDarkTheme() {
    $("body").get(0).style.setProperty("--font-colour", "white");
    $("body").get(0).style.setProperty("--main-colour", "#222");
    $("body").get(0).style.setProperty("--sub-colour", "#444");
    $("body").get(0).style.setProperty("--listnum-colour", "white");
    $("body").get(0).style.setProperty("--main-colour", "hover: #FCDA25");
    $("body").get(0).style.setProperty("--sub-colour", "hover: #fec200");
    $("body").get(0).style.setProperty("--listnum-colour", "hover: rgb(0, 0, 179)");
    $("body").get(0).style.setProperty("--font-colour", "hover: rgb(0, 0, 179)");
    $("body").get(0).style.setProperty("--background-image", "url('https://media.discordapp.net/attachments/621022891374542858/709301926642188308/darken.png')");
    $("body").get(0).style.setProperty("--background-image", "url(img/tv_guide.png)");
    return true;


}