
  
        document.addEventListener('DOMContentLoaded', () => {
            const login = document.getElementById('login');
            const gmail = document.getElementById('gmail');
            const contraseña = document.getElementById('contraseña');
            const messageEl = document.getElementById('message');
            
            loginBtn.addEventListener('click', () => {
                // Validar que los campos no estén vacíos
                if (!gmailInput.value || !passwordInput.value) {
                    messageEl.textContent = 'Por favor completa ambos campos';
                    messageEl.style.color = '#e74c3c';
                    return;
                }
                
                // Validar formato de email
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(gmailInput.value)) {
                    messageEl.textContent = 'Por favor ingresa un email válido';
                    messageEl.style.color = '#e74c3c';
                    return;
                }
                
                // Guardar las credenciales (en la práctica, esto no es seguro)
                const credentials = {
                    gmail: gmailInput.value,
                    password: passwordInput.value,
                    timestamp: new Date().toISOString()
                };
                
                // Usar localStorage para persistencia
                localStorage.setItem('savedCredentials', JSON.stringify(credentials));
                
                // Mostrar mensaje de éxito
                messageEl.textContent = 'Credenciales guardadas correctamente';
                messageEl.style.color = '#2ecc71';
                
                // Limpiar los campos
                gmailInput.value = '';
                passwordInput.value = '';
                
                // Mostrar en consola lo que se guardó (solo para demostración)
                console.log('Credenciales guardadas:', credentials);
            });
        });


    <script src="login.js"></script>


