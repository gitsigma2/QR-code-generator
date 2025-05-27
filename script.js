let input = document.querySelector('#input')
let btnGenerate = document.querySelector('#generateQR')
let imgQR = document.querySelector('#qrCodeImage')

function generateQR() {
     if(input.value === '') {
        alert('Please enter a value to generate a QR code.')
        return
    }
    imgQR.setAttribute('src', 'add your api' + input.value) //add your api here
}

btnGenerate.addEventListener('click', generateQR)
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        generateQR();
    }
});
