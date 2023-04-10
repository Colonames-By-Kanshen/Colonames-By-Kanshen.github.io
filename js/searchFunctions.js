const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', searchColors);

function searchColors() {
    const searchInput = document.getElementById('searchInput');
    const searchQuery = searchInput.value.toLowerCase().replace(/\s+/g, "");
    const colorDivs = Array.from(document.querySelectorAll('.colorbox')).slice(0, -1);
    const Div404 = document.querySelector("div#ColorNotFound");

    colorDivs.forEach(colorDiv => {
        const name = colorDiv.querySelector('#colorname').innerText.toLowerCase();
        const hex = colorDiv.querySelector('#colorhex').innerText.toLowerCase();

        if (name.includes(searchQuery) || hex.includes(searchQuery)) {
            colorDiv.style.display = 'flex';
        } else {
            colorDiv.style.display = 'none';
        }
    });

    if (colorDivs.some(colorDiv => colorDiv.style.display === 'flex')) {
        Div404.style.display = 'none';
    } else {
        Div404.style.display = 'flex';
    }
}
