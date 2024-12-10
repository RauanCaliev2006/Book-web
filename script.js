new Vue({
    el: '#app',
    data: {
        books: [
            { title: 'Война и мир', price: 1500, link: 'Война и мир.html' },
            { title: 'Преступление и наказание', price: 1200, link: 'Преступление и наказание.html' },
            { title: 'Мастер и Маргарита', price: 1800, link: 'Мастер и Маргарита.html' }
        ],
        newBook: {
            title: '',
            price: '',
            link: ''
        }
    },
    methods: {
        sortBooksByPrice() {
            this.books.sort((a, b) => a.price - b.price);
            toastr.success('Список книг отсортирован по цене!');
        },
        addBook() {
            if (this.newBook.title && this.newBook.price && this.newBook.link) {
                this.books.push({ ...this.newBook });
                this.newBook.title = '';
                this.newBook.price = '';
                this.newBook.link = '';
                toastr.success('Книга успешно добавлена!');
            } else {
                toastr.error('Пожалуйста, заполните все поля для добавления книги.');
            }
        },
        removeLastBook() {
            if (this.books.length > 0) {
                this.books.pop();
                toastr.info('Последняя книга удалена.');
            } else {
                toastr.error('В списке больше нет книг для удаления.');
            }
        },
        sortDeliveryOptions() {
            const table = document.getElementById('delivery-options');
            const rows = Array.from(table.rows).slice(1);

            rows.sort((a, b) => {
                const priceA = parseFloat(a.cells[1].textContent.replace('тг', ''));
                const priceB = parseFloat(b.cells[1].textContent.replace('тг', ''));
                return priceA - priceB;
            });

            rows.forEach(row => table.appendChild(row));

            toastr.success('Варианты доставки отсортированы по стоимости!');
        }
    }
});

$(document).ready(function() {
    // Метод для работы с CSS
    $('#jquery-css-button').click(function() {
        $('#intro').css({
            'border': '2px solid blue',
            'background-color': 'lightyellow',
            'padding': '20px'
        }).addClass('animate__animated animate__fadeIn');
    });

    // Метод для работы с HTML
    $('#jquery-html-button').click(function() {
        $('#intro').html('<p>Контент был изменен!</p>').addClass('animate__animated animate__bounce');
    });

    // Метод для добавления элемента
    $('#jquery-append-button').click(function() {
        $('#intro').append('<p>Новый элемент добавлен!</p>').addClass('animate__animated animate__fadeIn');
    });

    // Обработка событий
    $('#jquery-button').click(function() {
        toastr.info('Кнопка была нажата!');
    });

    // Визуальные эффекты
    $('#jquery-css-button').click(function() {
        $('#intro').fadeOut(1000).fadeIn(1000);
    });
});
