const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', searchColors);

function searchColors() {
    const searchQuery = searchInput.value.toLowerCase().replace(/\s+/g, "");
    const colorDivs = document.querySelectorAll('.color');

    colorDivs.forEach(colorDiv => {
        const name = colorDiv.querySelector('.color-name').innerText.toLowerCase();
        const hex = colorDiv.querySelector('.color-hex').innerText.toLowerCase();

        if (name.includes(searchQuery) || hex.includes(searchQuery)) {
            colorDiv.style.display = 'block';
        } else {
            colorDiv.style.display = 'none';
        }
    });
}
