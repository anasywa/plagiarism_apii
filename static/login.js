        lucide.createIcons();

        const leafContainer = document.getElementById('leaf-container');
        const leafCount = 20;

        for (let i = 0; i < leafCount; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            
            const startX = Math.random() * 20;
            const startY = Math.random() * 100;
            const duration = 10 + Math.random() * 15;
            const delay = Math.random() * 20;
            const size = 5 + Math.random() * 15;

            leaf.style.left = `-${startX}vw`;
            leaf.style.top = `${startY}vh`;
            leaf.style.width = `${size}px`;
            leaf.style.height = `${size}px`;
            leaf.style.animationDuration = `${duration}s`;
            leaf.style.animationDelay = `-${delay}s`;
            
            leafContainer.appendChild(leaf);
        }

        const toggleBtn = document.querySelector('#togglePassword');
        const passwordInput = document.querySelector('#passwordInput');
        const eyeIcon = document.querySelector('#eyeIcon');

        toggleBtn.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';
            eyeIcon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
            lucide.createIcons();
        });

        const form = document.querySelector('#loginForm');
        const btn = document.querySelector('#submitBtn');
        const container = document.querySelector('.login-container');

        container.classList.add('animate-in');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            btn.disabled = true;
            btn.innerHTML = `
                <div class="spinner-border spinner-border-sm me-2" role="status"></div>
                <span>Memproses...</span>
            `;

            container.classList.remove('animate-in');
            container.classList.add('animate-out');

            setTimeout(() => {
                form.submit();
            }, 500);
        });