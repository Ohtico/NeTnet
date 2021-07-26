Swal.fire({
    title: '<span class="rojo"> Suscribete Ya',
    background: `rgba(0, 0, 0, 0.600`,
    grow: `column`,
    confirmButtonText: `SUSCRIBIRSE`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagations: false,
    

    html:
        '<input id="swal-input1" class="swal2-input" placeholder="Email@email.com" type="email" >' +
        '<input id="swal-input2" class="swal2-input" placeholder="Nombre" required >' + '<input id="swal-input3" class="swal2-input" placeholder="Apellido" required >' +
        '<input id="swal-input4" class="swal2-input" placeholder="Numero de telefono" required >' + '<input id="swal-input5" class="swal2-input" placeholder="Contraseña" required >',
  focusConfirm: false,
    preConfirm: () => {
        let usuario = document.getElementById('swal-input2').value;
        usuario += " ";
        usuario += document.getElementById('swal-input3').value;
        document.querySelector('#usuario').innerHTML=`Bienvenido ${usuario}`;

        localStorage.setItem('usuario', usuario );
        let Usuario = localStorage.i

    }
})
