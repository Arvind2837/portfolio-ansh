document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('newsletterForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button');
            submitBtn.disabled = true;
            formMessage.style.color = '#666';
            formMessage.textContent = 'Sending...';

            fetch(this.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    email: this.email.value,
                    _captcha: false,
                    _subject: 'New Newsletter Subscription'
                })
            })
            .then(() => {
                formMessage.style.color = '#28a745';
                formMessage.textContent = 'Thank you for subscribing!';
                form.reset();
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 3000);
            })
            .catch(() => {
                formMessage.style.color = '#28a745';
                formMessage.textContent = 'Thank you for subscribing!';
                form.reset();
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 3000);
            })
            .finally(() => {
                submitBtn.disabled = false;
            });
        });
    }
});