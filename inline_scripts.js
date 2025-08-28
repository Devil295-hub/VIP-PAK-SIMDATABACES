
        // Prevent form resubmission on page reload
        if (window.history.replaceState) {
            window.history.replaceState(null, null, window.location.href);
        }
        // Debounce form submission to prevent double-clicks
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.querySelector('form');
            let isSubmitting = false;
            form.addEventListener('submit', (e) => {
                if (isSubmitting) {
                    e.preventDefault();
                } else {
                    isSubmitting = true;
                    setTimeout(() => { isSubmitting = false; }, 2000);
                }
            });
            // Show popup only once per session
            if (!sessionStorage.getItem('popupShown')) {
                const popup = document.getElementById('welcome-popup');
                popup.style.display = 'flex';
                sessionStorage.setItem('popupShown', 'true');
            }
            // Open WhatsApp channel in new tab on button click
            document.getElementById('join-channel').addEventListener('click', () => {
                window.open('https://whatsapp.com/channel/0029Vb5zr9CCsU9Hgk6ARV3w', '_blank');
                document.getElementById('welcome-popup').style.display = 'none';
            });
        });
    