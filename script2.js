const reviewBlock = document.querySelector('.reviews');


for (let i = 0; i < localStorage.length; i++) {
    const h3El = document.createElement('h3');
    h3El.classList.add('review-header');

    const pBlock = document.createElement('div');
    pBlock.classList.add('hidden');
    pBlock.classList.add('subblock-reviews');

    h3El.textContent = localStorage.key(i);
    reviewBlock.appendChild(h3El);

    let allComments = localStorage.getItem(localStorage.key(i)).split(';');

    allComments.forEach(element => {
        const pEl = document.createElement('p');
        const deleteBtn = document.createElement('span');
        deleteBtn.id = 'delete';
        deleteBtn.textContent = '   Удалить';

        pEl.textContent = element;
        pBlock.appendChild(pEl);
        pBlock.appendChild(deleteBtn);
    });
    reviewBlock.appendChild(pBlock);
}

const h3El = document.querySelectorAll('.review-header');
h3El.forEach(el => {
    el.addEventListener('click', function() {
        if (el.nextElementSibling.classList.contains('hidden')) {
            el.nextElementSibling.classList.remove('hidden');
        } else {
            el.nextElementSibling.classList.add('hidden');
        }
    })
})

const delBtn = document.querySelectorAll('#delete');
delBtn.forEach(el => {

    el.addEventListener('click', function() {
        let currentComment = el.previousElementSibling;
        currentComment.classList.add('hidden');
        el.id = '';
        el.classList.add('hidden');

        let newArray = [];
        let oldArray = currentComment.parentElement.childNodes;
        let parentKey = el.parentElement.previousElementSibling.textContent;

        console.log(parentKey);

        for (let i = 0; i < oldArray.length; i++) {
            if (!oldArray[i].classList.contains('hidden') && oldArray[i].id !== 'delete') {
                newArray.push(`${oldArray[i].textContent};`)
            }
        }

        localStorage.setItem(parentKey, newArray);
        if (localStorage.getItem(parentKey) === '') {
            localStorage.removeItem(parentKey)
        }
    })

    // let parentKey = el.parentElement.parentElement.previousElementSibling.textContent;
    // el.addEventListener('click', function(e) {
    //     let listOfLocalStorage = localStorage.getItem(parentKey).split(';');
    //     let listOfParentElement = el.parentElement.parentElement.childNodes;
    //     console.log(listOfLocalStorage);
    //     for (let i = 0; i < listOfParentElement.length; i++) {
    //         if (listOfParentElement[i].contains(el)) {
    //             console.log(listOfParentElement[i]);
    //         }
    //     }

    // })
})