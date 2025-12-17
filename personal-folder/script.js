const projects = [
  { title: 'Illustration Piece', category: 'illustration', img: 'images/work1.png' },
  { title: 'Illustration Piece', category: 'illustration', img: 'images/work2.jpg' },
  { title: 'Illustration Piece', category: 'illustration', img: 'images/work3.jpg' }
];

const gallery = document.getElementById('gallery');
const buttons = document.querySelectorAll('.filter-btn');

function renderGallery(items) {
  if (!gallery) return;
  gallery.innerHTML = '';
  items.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<img src="${item.img}" alt="${item.title}">`;
    gallery.appendChild(div);
  });
}

renderGallery(projects);

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    const result = filter === 'all'
      ? projects
      : projects.filter(p => p.category === filter);
    renderGallery(result);
  });
});