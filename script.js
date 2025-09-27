function volume_sphere() {
    //Write your code here
        let radius = document.querySelector("#radius");
        let output = document.querySelector("#volume");

        if (!radius.value) {
          return;
        }

        if (isNaN(radius.value) || radius.value < 0) {
          output.value = NaN;
          return;
        }

        let volume = (4 / 3) * Math.pow(radius.value, 3) * Math.PI;

        output.value = volume.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
