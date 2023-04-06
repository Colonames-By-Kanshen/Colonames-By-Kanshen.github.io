const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', searchColors);

function searchColors() {
    const searchQuery = searchInput.value.toLowerCase().replace(/\s+/g, "");
    const colorDivs = document.querySelectorAll('.colorbox');

    colorDivs.forEach(colorDiv => {
        const name = colorDiv.querySelector('#colorname').innerText.toLowerCase();
        const hex = colorDiv.querySelector('#colorhex').innerText.toLowerCase();

        if (name.includes(searchQuery) || hex.includes(searchQuery)) {
            colorDiv.style.display = 'flex';
        } else {
            colorDiv.style.display = 'none';
        }
    });
}
