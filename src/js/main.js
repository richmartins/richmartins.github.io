document.querySelectorAll('.row .col').forEach((row) => {
    if (row.parentNode.id !== 'header') { 
        let prev_row_id = row.parentNode.previousElementSibling.id;
        let html_arrow_up = document.createElement('div');
        html_arrow_up.className = 'arrow-container bounce animate';
        html_arrow_up.innerHTML = `<a href="#${prev_row_id}"><p><i class="up"></i><br><i class="up"></i></p></a>`;
        row.insertBefore(html_arrow_up, row.firstChild);
    }

    if (row.parentNode.nextElementSibling !== null) { 
        let next_row_id = row.parentNode.nextElementSibling.id;
        let html_arrow_down = document.createElement('div');
        html_arrow_down.className = 'arrow-container bounce animated';
        html_arrow_down.innerHTML = `<a href="#${next_row_id}"><p><i class="down"></i><br /><i class="down"></i></p></a>`;
        row.appendChild(html_arrow_down);
    }
})

let typewriter = new Typewriter(document.querySelector('#typewriteText'), {
    loop: true
});

typewriter.typeString('Hello, World !')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Software Engineer')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Happy geek')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Sys Admin')
    .pauseFor(1500)
    .deleteAll()
    .typeString('DevOps Engineer')
    .pauseFor(1500)
    .deleteAll()
    .typeString('CTF Player')
    .pauseFor(1500)
    .start();