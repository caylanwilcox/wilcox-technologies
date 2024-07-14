function openMessenger() {
    const name = document.getElementById('name').value;
    const message = `Hi ${name}, we would appreciate your feedback on our services!`;
    const url = `https://m.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

function showEmailForm() {
    document.getElementById('emailForm').style.display = "block";
}

function hideEmailForm() {
    document.getElementById('emailForm').style.display = "none";
}

document.getElementById('emailFormContent').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailData = {
        to: email,
        from: 'reviews@feedback.live',
        replyTo: 'contactus@yourvisionstudios.com',
        subject: 'Request for Review',
        text: `Hi ${name},\n\nWe would love to hear your feedback on our services. Please click the link below to leave a review.\n\nThank you!`
    };

    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    })
    .then(response => response.text())
    .then(result => {
        alert('Email sent successfully!');
        hideEmailForm();
    })
    .catch(error => {
        console.error('Error sending email:', error);
        alert('Failed to send email.');
    });
});
