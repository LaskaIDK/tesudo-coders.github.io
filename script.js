const navLinks = document.querySelectorAll('.nav-link');
const tabSections = document.querySelectorAll('.tab-section');

function setActiveTab(tabName) {
  navLinks.forEach((link) => link.classList.toggle('active', link.dataset.tab === tabName));
  tabSections.forEach((section) => section.classList.toggle('active-section', section.dataset.section === tabName));
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => setActiveTab(link.dataset.tab));
});

const form = document.getElementById('verify-form');
const codeInput = document.getElementById('certificate-code');
const message = document.querySelector('.form-message');
const modal = document.getElementById('certificate-modal');
const closeModal = document.querySelector('.modal-close');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const code = codeInput.value.trim().toUpperCase();
  message.className = 'form-message';

  if (code === 'TC-2024-8F92K') {
    message.textContent = 'Grandeza encontrada. Abrindo registro...';
    message.classList.add('success');
    setTimeout(() => modal.classList.add('open'), 350);
  } else {
    message.textContent = 'Grandeza não encontrada. Tente TC-2024-8F92K para testar.';
    message.classList.add('error');
  }
});

function hideModal() { modal.classList.remove('open'); }
closeModal.addEventListener('click', hideModal);
modal.addEventListener('click', (event) => { if (event.target === modal) hideModal(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') hideModal(); });

document.querySelector('.mobile-menu').addEventListener('click', () => {
  const nav = document.querySelector('.desktop-nav');
  const visible = nav.style.display === 'flex';
  nav.style.display = visible ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '74px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '24px 7vw';
  nav.style.background = '#17151b';
  nav.style.flexDirection = 'column';
  nav.style.gap = '24px';
});
