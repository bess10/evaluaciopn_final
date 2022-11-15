const divCitas = document.getElementById('citas');

const URL = 'http://localhost:4000/scraper';

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        data.forEach(cita => {
            const div_new = `<div class="cita" >
                                <h2 style="color: blue;">${cita.autor}</h2>
                                <p>${cita.text}</p>
                            </div>`;
            divCitas.insertAdjacentHTML('beforeend', div_new);
        });
    })
    .catch((err) => console.log(err));