document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form data
        var formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send form data to server-side script or third-party service
        sendFormData(formData);
    });

    function sendFormData(formData) {
        // Simulate sending form data to an imaginary server-side script using Axios
        axios.post('https://clo-it.com/send-email', formData)
            .then(function (response) {
                // Handle success
                alert('Your message has been sent successfully!');
            })
            .catch(function (error) {
                // Handle error
                console.error('Error:', error);
                alert('An error occurred while sending your message. Please try again later.');
            });
    }
});
