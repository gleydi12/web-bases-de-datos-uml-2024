//Obtener proyectos desde la api
fetch('http://localhost:3000/proyectos')
.then(response => response.json())
.then(proyectos => {
    //obtenere el contenedor donde se deben mostrar los proyetros
    const proyectosUl = document.getElementById('proyectos');
    //recorrer los proyectos
    proyectos.forEach(proyecto => {
        //crear un li
         const proyectoLi =document.createElement('li');
        //agregar los proyectos al contenedor
        proyectoLi.innerHTML = `<a href="proyecto/${proyecto.id}/actividades">${proyecto.nombre}</a>`;
        //agregar el contenedor al ul de proyectos
        proyectosUl.appendChild(proyectoLi);
    });
        
    });
    
    //Store the projects in database taking the data from the form
    const form = document.getElementById('agregar');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const descripcion = document.getElementById('descripcion').value;
        const fecha_inicio = document.getElementById('fecha_inicio').value;
        const fecha_fin = document.getElementById('fecha_fin').value;
        const presupuesto = document.getElementById('presupuesto').value;
        const data = {
            nombre,
            descripcion,
            fecha_inicio,
            fecha_fin,
            presupuesto
        };
        console.log(data)
        fetch('http://localhost:3000/proyecto', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(proyecto => {
            // Goto the projects page
            window.location.href = '/index.html';
        });
    })
