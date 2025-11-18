document.getElementById('downloadBtn').addEventListener('click', () => {
  const btn = document.getElementById('downloadBtn');
  btn.textContent = "⏳ Preparing…";
  setTimeout(() => {
    btn.textContent = "⬇️ Download Now";
  }, 800);
});
