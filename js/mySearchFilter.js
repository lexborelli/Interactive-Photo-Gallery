const search = document.getElementById('search');

search.addEventListener("keyup", e =>{
  let value = e.target.value.toLowerCase();
  let photos = document.querySelectorAll ('[data-caption]');

  photos.forEach((photos) => {
    const caption = photos.getAttribute('data-caption').toLowerCase();
    if(caption.includes(value)){
      photos.style.display = 'block';
    } else {
      photos.style.display = 'none';
    }
  })
})
