document.getElementById('select-option').addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  });

  //ketu fillon kodi per shtimin  e produkteve
  document.getElementById('product-form').addEventListener('submit' , function(event){
    event.preventDefault();
    const mumS = document.getElementById('numri-serik').value;
    const emri = document.getElementById('Emri').value;
    const sasia = document.getElementById('sasia').value;

    const table = document.getElementById('product-table').querySelector('tbody');
    const row = table.insertRow();

    row.insertCell(0).textContent=mumS;
    row.insertCell(1).textContent=emri;
    row.insertCell(2).textContent=sasia;

    document.getElementById('product-form').reset();

  
  }
  )


  