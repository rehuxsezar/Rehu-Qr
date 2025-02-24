const textInput = document.getElementById('text-input');
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');
const qrcodeContainer = document.getElementById('qrcode');

let qrcode = null;

// Generate QR Code
generateBtn.addEventListener('click', () => {
    const text = textInput.value.trim();

    if (!text) {
        alert('Please enter some text or a URL.');
        return;
    }

    // Clear previous QR code
    qrcodeContainer.innerHTML = '';

    // Generate new QR code
    qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 200,
        height: 200,
    });

    // Enable download button
    downloadBtn.disabled = false;
});

// Download QR Code
downloadBtn.addEventListener('click', () => {
    if (!qrcode) {
        alert('No QR code generated yet.');
        return;
    }

    // Get the QR code image element
    const qrImage = qrcodeContainer.querySelector('img');

    if (!qrImage) {
        alert('Failed to generate QR code image.');
        return;
    }

    // Create a temporary link to download the image
    const link = document.createElement('a');
    link.href = qrImage.src;
    link.download = 'qrcode.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
