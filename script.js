
document.getElementById('formulario').addEventListener('submit', (event) =>{
    event.preventDefault()

    //Validar campo nombre
    let entradaNombre = document.getElementById('name')
    let errorNombre = document.getElementById('nameError')

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, introducí tu nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    }
    //Validar correo electrónico
    let emailEntrada = document.getElementById('email')
    let emailError = document.getElementById('emailError')
    let emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if(!emailPattern.test(emailEntrada.value)){
        emailError.textContent = 'Por favor, introducí un mail válido'
        emailError.classList.add('error-message')
    }else{
        emailError.textContent = ''
        emailError.classList.remove('error-message')
    }

    //Validar la contraseña
    let contrasenaEntrada = document.getElementById('password')
    let errorContrasena = document.getElementById('passwordError')
    let contrasenaPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if(!contrasenaPattern.test(contrasenaEntrada.value)){
        errorContrasena.textContent = 'La contraseña debe tener al menos 8 caracteres, numeros, mayúsculas y minúsculas y caracteres especiales'
        errorContrasena.classList.add('error-message')
    }else{
        errorContrasena.textContent = ''
        errorContrasena.classList.remove('error-message')
    }

    //Si todos los campos son válidos enviar formulario
    if(!errorNombre.textContent && !emailError.textContent && !errorContrasena.textContent){
        // BACKEND QUE RECIBA LA INFORMACIÓN
        alert('El formulario se ha enviado con éxito')
        document.getElementById('formulario').reset();
    }
})