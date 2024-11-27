var gombok = document.querySelectorAll('.btn-group .btn');


var hatterElem = document.getElementById('hatter');


gombok[0].onclick = function() {
    if (hatterElem.style.backgroundColor == 'gray') {
        hatterElem.style.backgroundColor = 'lightblue'; 
    } else {
        hatterElem.style.backgroundColor = 'gray'; 
    }
};


var hely = document.getElementById('hely');

gombok[1].onclick = function() {
    
    var kep = document.getElementById('megjelenoKep');

    if (kep) {
        
        if (kep.style.display === 'none') {
            kep.style.display = 'block'; 
        } else {
            kep.style.display = 'none'; 
        }
    } else {
        
        const kep = document.createElement('img');
        kep.src = 'cocain_cat.jpg';
        kep.alt = 'Példa kép';
        kep.id = 'megjelenoKep';
        kep.setAttribute("class","rounded img-fluid mx-auto w-50")
        kep.style.display = 'block'; 
        hely.appendChild(kep);
    }
};

gombok[2].onclick = function () {
    let gyumolcsok = ["alma", "banán", "narancs", "szőlő", "mangó"];

    for (let i = 0; i < gyumolcsok.length; i++) {
        let gyumolcsElem = document.createElement("h2");
        gyumolcsElem.textContent = gyumolcsok[i];
        gyumolcsElem.style.color = "red";
        gyumolcsElem.style.fontWeight = "bold";

        hely.appendChild(gyumolcsElem);
    }
};


gombok[3].onclick = function () {
    let tabla = document.getElementById("tabla");

    
    if (!tabla) {
        tabla = document.createElement("table");
        tabla.id = "tabla";
        tabla.setAttribute("class", "table table-bordered bg-dark text-light bg-opacity-50");

        const fejlecSor = document.createElement("tr");
        const fejlecNevek = ["Név", "Születési hely", "Életkor"];

        for (let i = 0; i < fejlecNevek.length; i++) {
            const th = document.createElement("th");
            th.textContent = fejlecNevek[i];
            fejlecSor.appendChild(th);
        }
        
        tabla.appendChild(fejlecSor);

        const elsoSor = document.createElement("tr");
        elsoSor.appendChild(Cellakeszites("John Doe"));
        elsoSor.appendChild(Cellakeszites("Budapest"));
        elsoSor.appendChild(Cellakeszites(veletlenEv()));

        tabla.appendChild(elsoSor);

        hely.appendChild(tabla); 
    } else {
        
        const ujSor = document.createElement("tr");
        ujSor.appendChild(Cellakeszites("John Doe"));
        ujSor.appendChild(Cellakeszites("Budapest"));
        ujSor.appendChild(Cellakeszites(veletlenEv()));

        tabla.appendChild(ujSor);
    }
};

function Cellakeszites(tartalom) {
    const cell = document.createElement("td");
    cell.textContent = tartalom;
    return cell;
}

function veletlenEv() {
    return Math.floor(Math.random() * (50 - 10 + 1)) + 10;
}










































