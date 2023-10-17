const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

updateSlider();

function Comment() {
    // Запросим имя
    this.author = prompt("Как вас зовут ?")
    if (this.author == null) {
        this.empty = true
        return
    }

    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if (this.text == null) {
        this.empty = true
        return
    }

    // Сохраним текущее время
    this.date = new Date().toLocaleString()
}

function addComment()
{
    let comment = new Comment()

    if (comment.empty) {
        return;
    }

    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (enableLikes) {

        let review = Object.create(comment)

        review.rate = 0;

        writeReview(review)
    } else {

        writeReview(comment)
    }
}

function addLike(id)
{

    let element = document.getElementById(id);

    let array = element.innerText.split(' ')


    let resultNum = parseInt(array[array.length - 1], 10);


    resultNum += 1


    array[array.length - 1] = `${resultNum}`


    element.innerText = array.join(' ')
}

const writeReview = review => {
    let likeCounter = '';

    if (review.hasOwnProperty('rate')) {

        let commentId = Math.random();

        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }
    document.getElementsByClassName('reviews')[0].innerHTML += ' <div class="review-    text">\n' + `<p> <i> <b>${review['author']}</b> ${review['date']}${likeCounter}</i></p>` + `<p>${review['text']}</p>` + '</div>';
}

