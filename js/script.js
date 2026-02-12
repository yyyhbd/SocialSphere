
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const btn = document.querySelector('.btn');

   
    const errorBox = document.createElement('div');
    errorBox.className = 'error-message';
    errorBox.style.color = '#dc2626';
    errorBox.style.marginTop = '12px';
    errorBox.style.fontSize = '14px';
    errorBox.style.textAlign = 'center';
    errorBox.style.minHeight = '20px';


    btn.insertAdjacentElement('afterend', errorBox);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

    
        errorBox.textContent = '';
        errorBox.style.color = '#dc2626';


        const firstName = document.getElementById('firstName').value.trim();
        const lastName  = document.getElementById('lastName').value.trim();
        const email     = document.getElementById('email').value.trim();
        const password  = document.getElementById('password').value;
        const confirm   = document.getElementById('confirmPassword').value;

       
        if (!firstName) {
            showError('Укажите имя');
            return;
        }

        if (!lastName) {
            showError('Укажите фамилию');
            return;
        }

        if (!email) {
            showError('Введите email');
            return;
        }

      
        if (!email.includes('@') || !email.includes('.')) {
            showError('Похоже, email введён некорректно');
            return;
        }

        if (!password) {
            showError('Придумайте пароль');
            return;
        }

        if (password.length < 8) {
            showError('Пароль должен быть минимум 8 символов');
            return;
        }

        if (password !== confirm) {
            showError('Пароли не совпадают');
            return;
        }

      
        errorBox.style.color = '#16a34a';
        errorBox.textContent = 'Отлично! Регистрация... (здесь будет запрос на сервер)';
        console.log('Форма валидна → отправляем на сервер:', {
            firstName, lastName, email, password
        });

    
    });

    function showError(message) {
        errorBox.textContent = message;
       
    }


    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (errorBox.textContent) {
                errorBox.textContent = '';
            }
        });
    });
});