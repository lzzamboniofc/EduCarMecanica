const nav = document.querySelector('.fixed-nav');
const menu = document.getElementById('navbarMenu');
const bsMenu = menu && window.bootstrap ? bootstrap.Collapse.getOrCreateInstance(menu, {toggle: false}) : null;

window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.scrollY > 35));
document.querySelectorAll('#navbarMenu a').forEach(link => link.addEventListener('click', () => {
  if (window.innerWidth < 992 && bsMenu) bsMenu.hide();
}));

const sectionLinks = [...document.querySelectorAll('#navbarMenu .nav-link[href^="#"]')];
const trackedSections = sectionLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const setActiveSection = id => sectionLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${id}`));
if (trackedSections.length) {
  const navObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setActiveSection(visible.target.id);
  }, {rootMargin: '-28% 0px -58% 0px', threshold: [0, .15, .4]});
  trackedSections.forEach(section => navObserver.observe(section));
  sectionLinks.forEach(link => link.addEventListener('click', () => setActiveSection(link.getAttribute('href').slice(1))));
}

const phoneInput = document.getElementById('phone');
phoneInput?.addEventListener('input', e => {
  let value = e.target.value.replace(/\D/g, '').slice(0, 11);
  value = value.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
  e.target.value = value;
});

document.getElementById('diagnosticForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
  const name = document.getElementById('name').value;
  const vehicle = document.getElementById('vehicle').value || 'não informado';
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value || 'Gostaria de agendar uma avaliação.';
  const symptoms = [...document.querySelectorAll('input[name="symptom"]:checked')].map(item => item.value);
  const whatsappNumber = window.educCarConfig?.whatsappNumber || '';
  const text = encodeURIComponent(`Olá, Mecânica EduCar! Meu nome é ${name}.\nVeículo: ${vehicle}\nAssunto: ${service}\nSinais percebidos: ${symptoms.length ? symptoms.join(', ') : 'não informados'}\nRelato: ${message}`);
  if (whatsappNumber) window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener');
  else if (window.bootstrap) bootstrap.Toast.getOrCreateInstance(document.getElementById('formToast')).show();
  else alert('Mensagem preparada. Defina o número oficial do WhatsApp no arquivo JavaScript.');
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), {threshold: .12});
document.querySelectorAll('.service-card, .process-line article, .values-list>div').forEach(element => {
  observer.observe(element);
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
