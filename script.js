// Select all social media links
const socialIcons = document.querySelectorAll('.social-icon');

// Add click event listener to each social icon
socialIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        alert('You are now leaving to visit ' + this.href);
    });
});
