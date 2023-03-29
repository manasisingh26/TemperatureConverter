var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");

    cel.addEventListener('input', function(){
       let c = this.value;
       let f = (c * 9/5) + 32;
       if(!Number.isInteger(f)){ /*agar ye number integer nahi hai to hi if me jana hai*/
        f = f.toFixed(4);
       }
       fah.value = f; /* (fah ka value change karana hai) */
    });

    fah.addEventListener('input', function(){
       let f = this.value;
       let c = (f - 32) * 5/9;
       if(!Number.isInteger(f)){
        c = c.toFixed(4);
       }
       cel.value = c;
    });