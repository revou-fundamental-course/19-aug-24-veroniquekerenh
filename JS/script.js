function formValidation() {
    // Retrieve values from form fields
    let name = document.getElementById('name').value.trim(); // Trim to remove leading/trailing spaces
    let message = document.getElementById('message').value.trim(); // Trim to remove leading/trailing spaces

    // Check if either field is empty
    if (name === '' || message === '') {
        alert('Please fill in both the name and message fields.');
    } else {
        // Display values in designated HTML elements
        document.getElementById('result').innerHTML = name;
        document.getElementById('themessage').innerHTML = message;
    }

    // Log name to console for debugging
    console.log(name);
}

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;
    if (indexBanner < 1) indexSlide = listImage.length;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
}
