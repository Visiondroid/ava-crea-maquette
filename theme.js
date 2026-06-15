// Toggle thème clair / sombre + switch logo + persistance localStorage
(function(){
  const STORAGE_KEY = 'ava-theme';
  const root = document.documentElement;

  function getInitial(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved === 'light' || saved === 'dark') return saved;
    // sinon : préférence système
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
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
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', bind);
  }else{
    bind();
  }
})();
