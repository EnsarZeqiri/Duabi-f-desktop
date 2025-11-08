document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Parandalon rifreskimin e faqes
  
    // Merr të dhënat nga fusha të input-it
    const serialNumber = document.getElementById('serial-number').value;
    const productName = document.getElementById('product-name').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;
  
    // Krijo një rresht të ri në tabelë
    const table = document.getElementById('product-table').querySelector('tbody');
    const row = table.insertRow();
  
    row.insertCell(0).textContent = serialNumber;
    row.insertCell(1).textContent = productName;
    row.insertCell(2).textContent = price;
    row.insertCell(3).textContent = quantity;
  
    // Pastro fushat e formularit
    document.getElementById('product-form').reset();
  });

  