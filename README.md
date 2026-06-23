# QR Code Generator

A simple browser-based QR code generator. Enter any text or URL, pick a size and color, and instantly generate a downloadable QR code, no backend required.

## Features

- Generate a QR code from any text or URL
- Choose QR code size (100x100 up to 1000x1000)
- Choose a custom color for the QR code
- Download the generated QR code as a PNG image
- Fully responsive layout

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- [qrcode.js](https://github.com/davidshimjs/qrcodejs) | for QR code generation

## Demo

🔗 [Live Demo](https://awaishussainsoomro.github.io/QRCodeGenerator/)

## Getting Started

No build tools or installation needed, this is a static frontend project.

1. Clone the repository
   ```bash
   git clone https://github.com/YOUR_USERNAME/QRCodeGenerator.git
   ```
2. Navigate into the project folder
   ```bash
   cd QRCodeGenerator
   ```
3. Open `index.html` in your browser
   - You can simply double-click the file, or
   - Use the "Live Server" extension in VS Code for auto-reload

## How It Works

1. Type any text or URL into the input field
2. Select your preferred size and color
3. Click **Generate** to create the QR code
4. Click **Download** to save it as a PNG

## Project Structure

```
QRCodeGenerator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Future Improvements

- [ ] Add input validation for URLs
- [ ] Add a "copy to clipboard" option
- [ ] Support uploading a logo in the center of the QR code
- [ ] Dark/light theme toggle

## License

This project is open source and available under the [MIT License](LICENSE).
