const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('on'); });
}, {threshold: 0.08});
document.querySelectorAll('.rv').forEach(el => obs.observe(el));

document.getElementById('btnEnviar').addEventListener('click', () => {
  const nombre = document.getElementById('f-nombre').value.trim();
  const email  = document.getElementById('f-email').value.trim();
  const edad   = document.getElementById('f-edad').value.trim();
  const curso  = document.getElementById('f-curso').value;
  const msg    = document.getElementById('f-msg').value.trim();
  if(!nombre){ alert('Por favor ingresa tu nombre.'); return; }
  const txt = `Hola Frederick! Me interesa Programación Para Niños 🎮\n\n👤 Nombre: ${nombre}\n📧 Email: ${email||'No indicado'}\n🎂 Edad del niño/a: ${edad||'No indicado'}\n📚 Curso: ${curso||'No indicado'}${msg?'\n💬 Mensaje: '+msg:''}`;
  window.open('https://wa.me/573507687220?text='+encodeURIComponent(txt),'_blank');
});