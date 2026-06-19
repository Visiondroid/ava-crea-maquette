// Toggle thème clair / sombre + switch logo + persistance localStorage
(function(){
  const STORAGE_KEY = 'ava-theme';
  const root = document.documentElement;

  function getInitial(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved === 'light' || saved === 'dark') return saved;
    // défaut : mode sombre (demande Ava 19/06) — le toggle clair reste disponible
    return 'dark';
  }

  function apply(theme){
    if(theme === 'light'){
      root.setAttribute('data-theme', 'light');
    }else{
      root.removeAttribute('data-theme');
    }
    document.querySelectorAll('[data-theme-icon]').forEach(el=>{
      el.textContent = theme === 'light' ? '🌙' : '☀️';
      el.setAttribute('aria-label', theme === 'light' ? 'Passer au mode sombre' : 'Passer au mode clair');
    });
  }

  // état initial (avant DOMContentLoaded pour éviter FOUC)
  const current = getInitial();
  apply(current);

  function bind(){
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        localStorage.setItem(STORAGE_KEY, next);
        apply(next);
      });
    });
    // menu mobile (burger) — ouvre / ferme la navigation
    const links = document.querySelector('.nav-links');
    document.querySelectorAll('.menu-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{ if(links) links.classList.toggle('open'); });
    });
    if(links){
      links.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>links.classList.remove('open')));
    }
    // reveal au scroll robuste — révèle tout ce qui est dans le viewport (au chargement,
    // au scroll ET au resize/zoom) → plus de sections blanches quand on dézoome.
    const reveals = document.querySelectorAll('.reveal');
    if(reveals.length){
      const revealVisible = ()=>{
        const limit = window.innerHeight + 120; // tout ce qui est en vue (+ un cran sous le pli)
        reveals.forEach(el=>{
          if(!el.classList.contains('in') && el.getBoundingClientRect().top < limit){
            el.classList.add('in');
          }
        });
      };
      window.addEventListener('scroll', revealVisible, {passive:true});
      window.addEventListener('resize', revealVisible);
      revealVisible();
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bind);
  }else{
    bind();
  }
})();
