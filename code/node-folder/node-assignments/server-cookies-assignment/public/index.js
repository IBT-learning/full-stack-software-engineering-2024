const decodeRgb = (rgb) => {
    const rgbValues = rgb.slice(4, -1).split(', ');

    const r = parseInt(rgbValues[0].trim());
    const g = parseInt(rgbValues[1].trim());
    const b = parseInt(rgbValues[2].trim());
    
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}


const getBgColor = (tag) => {
    const element = document.querySelector(tag);
    const computedStyles = window.getComputedStyle(element);
    const backgroundColor = computedStyles.backgroundColor;

    return decodeRgb(backgroundColor)
}

const getCookiesValue = (keyName) => {
    if (document.cookie.includes(keyName)) {
        const value = document.cookie
            .split('; ')
            .find(row => row.startsWith(keyName))
            .split('=')[1];
            // .find(row => row.includes(keyName))
            // .split('=')
            // .at[1];

        return value;
    } else {
        return null
    }
}

const banner = document.getElementById("banner");
const dark = document.getElementById("dark-btn");
const light = document.getElementById("light-btn");
const btn = document.getElementById("mode-btn");


const cookieBg = decodeURIComponent(getCookiesValue('mode'));


if (cookieBg) {
    if (cookieBg == "#d3d3d3") {
        btn.textContent = "Light"
        banner.textContent = "Light Mode";
        document.body.classList.add("light");
    } else if (cookieBg == "#a9a9a9"){
        btn.textContent = "Dark"
        banner.textContent = "Dark Mode";
        document.body.classList.add("dark");
    }
}

btn.addEventListener("click", () => {
    if (btn.textContent === "Dark") {
        btn.textContent = "Light";
        banner.textContent = "Light Mode";
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        const bg = getBgColor('body')
        
        fetch(`/mode?mode=${encodeURIComponent(bg)}`)
        
    } else {
        btn.textContent = "Dark";
        banner.textContent = "Dark Mode";
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        const bg = getBgColor('body')
        
        fetch(`/mode?mode=${encodeURIComponent(bg)}`)
    }
}
)

