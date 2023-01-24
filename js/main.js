// Without localStorage

// function run() {
//     let htmlCode = document.querySelector("#html-code").value;
//     let cssCode = document.querySelector("#css-code").value;
//     let jsCode = document.querySelector("#js-code").value;
//     let output = document.querySelector("#output");

//     output.contentDocument.body.innerHTML =
//         htmlCode + "<style>" + cssCode + "</style>";
//     output.contentWindow.eval(jsCode);
// }

// run();

// With localStorage

let htmlCode = document.querySelector("#html-code");
let cssCode = document.querySelector("#css-code");
let jsCode = document.querySelector("#js-code");
let output = document.querySelector("#output");

function run1() {
    localStorage.setItem("htmlCode", htmlCode.value);
    localStorage.setItem("cssCode", cssCode.value);
    localStorage.setItem("jsCode", jsCode.value);
    output.contentDocument.body.innerHTML =
        `<style>${localStorage.cssCode}</style>` + localStorage.htmlCode;
    output.contentWindow.eval(localStorage.jsCode);
}

htmlCode.onkeyup = () => run1();
cssCode.onkeyup = () => run1();
jsCode.onkeyup = () => run1();

htmlCode.value = localStorage.htmlCode;
cssCode.value = localStorage.cssCode;
jsCode.value = localStorage.jsCode;

