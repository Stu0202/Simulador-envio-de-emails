document.addEventListener('DOMContentLoaded',function(){
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario')

    inputEmail.addEventListener('blur', validar)

    inputAsunto.addEventListener('blur', validar)
    
    inputMensaje.addEventListener('blur',validar)
    
    function validar(e) {
       if (e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`,e.target.parentElement)
            return
       }

       if(e.target.id === 'email'&& !validarEmail(e.target.value)){
            mostrarAlerta('El email no es valido',e.target.parentElement)
            return
       }
       limiparAlerta(e.target.parentElement)
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
})