// script.js - small helpers for autoplay and subtle animations
document.addEventListener('DOMContentLoaded', function(){
  const v = document.getElementById('vance-bg-video');
  // Try to play if browser blocked autoplay
  function tryPlay() {
    if (!v) return;
    const p = v.play();
    if (p !== undefined) {
      p.catch(()=> {
        // autoplay blocked: keep muted and wait for interaction
        v.muted = true;
      });
    }
  }
  window.addEventListener('load', tryPlay);
  // slight entrance animation for content
  const center = document.querySelector('.center-wrap');
  if(center){ center.style.opacity = 0; setTimeout(()=>{ center.style.transition='opacity 900ms ease'; center.style.opacity=1 }, 300); }
});