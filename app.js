const clock = document.querySelector('#live-clock');
const dateLabel = document.querySelector('#live-date');
const themeToggle = document.querySelector('#theme-toggle');
const filterButtons = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project-item');

function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour12: false });
  dateLabel.textContent = now.toLocaleDateString([], {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });
}

updateClock();
setInterval(updateClock, 1000);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  themeToggle.textContent = isLight ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((filter) => filter.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    projects.forEach((project) => {
      project.classList.toggle('hidden', filter !== 'all' && project.dataset.category !== filter);
    });
  });
});
