// Marrim elementet HTML
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');

// Shtojmë një "event listener" për formën
productForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Parandalon rifreskimin e faqes

    // Marrim të dhënat nga forma
    const productType = document.getElementById('productType').value;
    const productCode = document.getElementById('productCode').value;
    const productQuantity = document.getElementById('productQuantity').value;

    // Krijojmë një element të ri për të paraqitur produktin
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
        <p><strong>Lloji:</strong> ${productType}</p>
        <p><strong>Kodi:</strong> ${productCode}</p>
        <p><strong>Sasia:</strong> ${productQuantity}</p>
    `;

    // Shtojmë produktin në listë
    productList.appendChild(productItem);

    // Pastrojmë fushat e formës
    productForm.reset();
});
