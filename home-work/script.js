document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const usersList = []; 
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();  
        
        const name = document.getElementById('name').value.trim();
        const message = document.getElementById('textarea').value.trim();
        let phone = document.getElementById('phone').value.trim().replace(/[^\d+]/g, ''); 
        const email = document.getElementById('email').value.trim();

        const phoneRegex = /^\+?3?8?(0\d{9})?$/;  
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         
        let valid = true;
         
        if (name === '') {
            document.getElementById('errorName').textContent = 'Це поле обов\'язкове';
            valid = false;
        } else {
            document.getElementById('errorName').textContent = '';
        }
         
        if (message.length > 0 && message.length < 5) {
            document.getElementById('errorText').textContent = 'Мінімум 5 символів';
            valid = false;
        } else {
            document.getElementById('errorText').textContent = '';
        }

        if (phone === '') {
            document.getElementById('errorPhone').textContent = 'Це поле обов\'язкове';
            valid = false;
        } else if (!phone.match(phoneRegex) || phone.replace(/[^\d]/g, '').length !== 12) {
            document.getElementById('errorPhone').textContent = 'Телефон повинен бути у правильному форматі (+380XXXXXXXXX)';
            valid = false;
        } else {
            document.getElementById('errorPhone').textContent = '';
        }
         
        if (email !== '' && !email.match(emailRegex)) {
            document.getElementById('errorEmail').textContent = 'Неправильний формат електронної адреси';
            valid = false;
        } else {
            document.getElementById('errorEmail').textContent = '';
        } 
         
        if (valid) {
            let userInfo = {
                name: name,
                message: message,
                phone: phone,
                email: email
            };
            
            //збираємо всих користувачів 
            usersList.push(userInfo);
            console.log(usersList);

            console.log(`Name: ${userInfo.name}`);
            console.log(`Message: ${userInfo.message}`);
            console.log(`Phone: ${userInfo.phone}`);
            console.log(`Email: ${userInfo.email}`);
             
            document.getElementById('name').value = '';
            document.getElementById('textarea').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('email').value = '';
        }
    });
});
