const btnForm = document.querySelector('.review-form-btn');
const answForm = document.querySelector('.review-form-answer');

let counterStorageReview = localStorage.length;

btnForm.addEventListener('click', function() {
    const inputForm = document.querySelector('.review-form-input');
    const textAreaForm = document.querySelector('.review-form-textarea');

    if (inputForm.value.length === 0 || textAreaForm.value.length === 0) {
        answForm.textContent = 'Поля не могут быть пустыми!'
    } else {
        let reviewsArray = [];

        if (localStorage.getItem(inputForm.value)) {

            let newValue = `${textAreaForm.value}; ${localStorage.getItem(inputForm.value)}`;

            reviewsArray.push(newValue)

            localStorage.setItem(inputForm.value, reviewsArray);
            answForm.textContent = 'Отзыв успешно сохранен.'

        } else {
            reviewsArray.push(textAreaForm.value);
            localStorage.setItem(inputForm.value, reviewsArray);
            answForm.textContent = 'Отзыв успешно сохранен.'
        }
    }
})


// localStorage.clear();

// let newReview = [{
//     product: inputForm.value,
//     review: textAreaForm.value
// }];

// counterStorageReview++;

// localStorage.setItem(`newReview${counterStorageReview}`, JSON.stringify(newReview));
// answForm.textContent = 'Отзыв успешно сохранен.'