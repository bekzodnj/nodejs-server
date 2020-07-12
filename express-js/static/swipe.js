document.addEventListener('touchstart', handleTouchStart, false);

function handleTouchStart(evt) {
  console.log(evt.touches[0].clientX, evt.touches[0].clientY);
}
