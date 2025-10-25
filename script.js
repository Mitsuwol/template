const copyEmailButton = document.getElementById('copy-email');
const emailLink = document.getElementById('email-link');

if (copyEmailButton && emailLink) {
    copyEmailButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(emailLink.textContent.trim());
            copyEmailButton.textContent = 'Copied!';
            copyEmailButton.classList.add('button--success');
            setTimeout(() => {
                copyEmailButton.textContent = 'Copy email address';
                copyEmailButton.classList.remove('button--success');
            }, 2500);
        } catch (error) {
            copyEmailButton.textContent = 'Unable to copy';
            setTimeout(() => {
                copyEmailButton.textContent = 'Copy email address';
            }, 2500);
        }
    });
}
