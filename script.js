document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        bortsch: document.getElementById('bortsch').value,
        varenyky: document.getElementById('varenyky').value,
        holubtsi: document.getElementById('holubtsi').value,
        kotleta: document.getElementById('kotleta').value,
        salo: document.getElementById('salo').value,
        pampushky: document.getElementById('pampushky').value,
        kompot: document.getElementById('kompot').value,
        kvas: document.getElementById('kvas').value,
        ryazhenka: document.getElementById('ryazhenka').value,
        uzvar: document.getElementById('uzvar').value,
        horilka: document.getElementById('horilka').value
    };

    // Get the table body
    const tableBody = document.getElementById('resultsTable').getElementsByTagName('tbody')[0];

    // Create a new row
    const newRow = tableBody.insertRow();

    // Insert cells and add values
    Object.values(formData).forEach(value => {
        const newCell = newRow.insertCell();
        newCell.textContent = value;
    });

    // Clear the form
    document.getElementById('orderForm').reset();
})