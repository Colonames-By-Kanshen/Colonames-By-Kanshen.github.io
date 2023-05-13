const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', searchColors);

function searchColors() {
    const searchQuery = searchInput.value.toLowerCase().replace(/\s+/g, "");
    const colorDivs = Array.from(document.querySelectorAll('.colorbox')).slice(0, -1);
    const Div404 = document.querySelector("div#ColorNotFound");
    const BlurpleDivs = document.querySelectorAll("div.projectblurple");

    colorDivs.forEach(colorDiv => {
        const name = colorDiv.querySelector('#colorname').innerText.toLowerCase();
        const hex = colorDiv.querySelector('#colorhex').innerText.toLowerCase();

        if (name.includes(searchQuery) || hex.includes(searchQuery)) {
            colorDiv.style.display = 'flex';
        } else {
            colorDiv.style.display = 'none';
        }
    });

    if (searchQuery.toLowerCase() === '#projectblurple') {
        BlurpleDivs.forEach(blurpleDiv => {
          blurpleDiv.style.display = 'flex';
        });
      } else {
        BlurpleDivs.forEach(blurpleDiv => {
          blurpleDiv.style.display = 'none';
        });
      }

      if (colorDivs.some(colorDiv => colorDiv.style.display === 'flex') || BlurpleDivs.some(blurpleDiv => blurpleDiv.style.display === 'flex')) {
        Div404.style.display = 'none';
      } else {
        Div404.style.display = 'flex';
      }
}
