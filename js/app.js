document.addEventListener('DOMContentLoaded',function(){
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario')
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')

    const email = {
        email: "",
        asunto: "",
        mensaje: ""
    }

    inputEmail.addEventListener('input', validar)

    inputAsunto.addEventListener('input', validar)
    
    inputMensaje.addEventListener('input',validar)
    btnReset.addEventListener('click',function (e) {
        
        e.preventDefault()

        email.email = ''
        email.asunto = ''
        email.mensaje = ''
        
        formulario.reset()
        comprobarEmail()

    })
    
    function validar(e) {
       if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement)
            email[e.target.name]= ''
            comprobarEmail()
            return
       }

       if(e.target.id === 'email'&& !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido',e.target.parentElement)
            email[e.target.name] = ''
            comprobarEmail()
            return
       }
       limiparAlerta(e.target.parentElement)


       email[e.target.name] = e.target.value.trim().toLowerCase()
       comprobarEmail()
    }


    function mostrarAlerta(mensaje,referencia) {
        
        limiparAlerta(referencia)

        const error = document.createElement('P')
        error.textContent = mensaje
        error.classList.add('bg-red-600','text-white','p-2','text-center')
        referencia.appendChild(error)

    }

    function limiparAlerta(referencia) {
        const alertaExiste = referencia.querySelector('.bg-red-600')

        if (alertaExiste) {
           alertaExiste.remove()
        }

    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email)
        return resultado
    
    }

    function comprobarEmail() {
        
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50')
            btnSubmit.disabled = true
            return
        }
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.disabled = false
    }
})