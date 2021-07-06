const submit = document.querySelector('#submit-btn')
    const reset = document.querySelector('#reset-btn')
    const modalError = document.querySelector('#modal-error')
    const modalSuccess = document.querySelector('#modal-success')
    const errorCont = document.querySelector('#error-list')
    const hideError = document.querySelector('#hide-modal')
    const hideSuccess = document.querySelector('#hide-modal-success')
    const checkCapital = (word) => {
      
    return word.charAt(0) === word.charAt(0).toUpperCase()

    }

    const checkEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    hideError.addEventListener("click", () => {
  
        modalError.style.display = 'none'
   
        errorCont.innerHTML = ''
    })

    hideSuccess.addEventListener("click", () => {
  
  modalSuccess.style.display = 'none'


})
    
    submit.addEventListener("click", () => {
        let errorMsg = []
        const name = document.querySelector('#name').value
        const gender = document.querySelectorAll('input[name="gender"]:checked')
        const hobby = document.querySelectorAll('input[name="hobby"]:checked')
        const email = document.querySelector('#email').value
        const phone = document.querySelector('#phone').value
        const username = document.querySelector('#username').value
        const password = document.querySelector('#password').value

        if(!name) {
            errorMsg.push('Nama Tidak boleh Kosong')
        }else if(!checkCapital(name)) {
           errorMsg.push('Huruf Depan Nama Harus Kapital')
        } 

        if(!gender.length) {
            errorMsg.push('Harus memilih salah satu jenis kelamin')
        }

        if(!hobby.length) {
            errorMsg.push('Huruf Memilih salah satu hobi atau lebih')
        }

        if(!email) {
            errorMsg.push('Email Tidak boleh kosong')
        }else if(!checkEmail(email)) {
            errorMsg.push('Format Email Salah')
        }

        if(!phone) {
            errorMsg.push('Nomor HP tidak boleh kosong')
        }

        if(!username.length) {
            errorMsg.push('Username tidak boleh kosong')
        } else if(username.length > 10 ) {
            errorMsg.push('Username maksimal 10 karakter')
        }

        if(password.length < 7) {
            errorMsg.push('Minimal panjang password adalah 7 karakter')
        }

        if(errorMsg.length != 0) {
            
            for(i=0;i<errorMsg.length;i++){
                const list = document.createElement('li')
                list.innerHTML = errorMsg[i]
                errorCont.appendChild(list)
            }
            modalError.style.display = 'flex'
        } else {
            modalSuccess.style.display = 'flex'
        }
    })

    reset.addEventListener("click", () => {
        document.querySelector('#name').value = ''
        
        document.querySelector('#email').value = ''
        document.querySelector('#phone').value = ''
        document.querySelector('#username').value = ''
        document.querySelector('#password').value = ''

        const gender =  document.querySelectorAll('input[name="gender"]')
        for(i=0; i<gender.length;i++) {
            gender[i].checked = false
        }
        const hobby = document.querySelectorAll('input[name="hobby"]')
        for(i=0; i<hobby.length;i++) {
            hobby[i].checked = false
        }
    })