const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '★★★★'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '★★★★★'
	},
	{
		id: 3,
		title: 'The School for Good and Evil',
		date: 'May 14, 2013',
		description:
			'The first kidnappings happened two hundred years before. Some years it was two boys taken, some years two girls, sometimes one of each. But if at first the choices seemed random, soon the pattern became clear. One was always beautiful and good, the child every parent wanted as their own. The other was homely and odd, an outcast from birth. An opposing pair, plucked from youth and spirited away.',
		imgSrc:
			'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1538034910i/42080479.jpg',
		imgAlt: 'Book cover for The School for Good and Evil',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '★★★★'
	}
]

function createArticle(item) {
	const article = document.createElement('article');
	article.classList.add('post');

	const template = `
		<aside class="sidebar-left">
            <div class="date">${item.date}</div>
            <div>${item.ages}</div>
            <div>${item.genre}</div>
            <div class="rating">${item.stars}</div>
        </aside>

        <section class="content">
            <h2>${item.title}</h2>
            <img src="${item.imgSrc}" alt="${item.imgAlt}">
            <p>
				${item.description}
            	<a href="#">Read More...</a>
            </p>
        </section>
	`;

	article.innerHTML = template;
	return article;
}

function displayArticles(articleList) {
	const container = document.querySelector('.articles');

	articleList.forEach((item) => {
		const articleElement = createArticle(item);
		container.appendChild(articleElement);
	});
}

displayArticles(articles);