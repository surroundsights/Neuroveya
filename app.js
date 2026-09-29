
(() => {
  const backend = String(window.NEUROVEYA_BACKEND?.url || '').trim();
  const modal = document.getElementById('backendModal');

  function backendReady(){
    return /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec(?:\?.*)?$/.test(backend);
  }

  function openBackend(testType=''){
    if(!backendReady()){
      modal.classList.remove('hidden');
      return;
    }
    const u = new URL(backend);
    u.searchParams.set('source','github');
    if(testType) u.searchParams.set('start',testType);
    location.href = u.toString();
  }

  document.querySelectorAll('[data-start]').forEach(btn=>{
    btn.addEventListener('click',()=>openBackend(btn.dataset.start||''));
  });
  document.querySelectorAll('[data-open-app]').forEach(btn=>{
    btn.addEventListener('click',()=>openBackend(''));
  });
  document.querySelectorAll('[data-close-modal]').forEach(btn=>{
    btn.addEventListener('click',()=>modal.classList.add('hidden'));
  });
})();
