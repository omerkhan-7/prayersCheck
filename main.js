document.getElementById('namazForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value;
    const prayers = Array.from(document.querySelectorAll('input[name="prayers"]:checked'))
                        .map(checkbox => checkbox.value);
    
    if (date && prayers.length > 0) {
        const submittedDataContainer = document.getElementById('submittedData');
        const dataBlock = document.createElement('div');
        dataBlock.className = 'submitted-data';
        
        const dateElement = document.createElement('p');
        dateElement.innerHTML = '<strong>Date:</strong> ' + date;
        const prayersElement = document.createElement('p');
        prayersElement.innerHTML = '<strong>Prayers:</strong> ' + prayers.join(', ');
        
        dataBlock.appendChild(dateElement);
        dataBlock.appendChild(prayersElement);
        
        submittedDataContainer.appendChild(dataBlock);
        
        document.getElementById('namazForm').reset();
        document.getElementById('responseMessage').innerText = 'Data Saved Successfully!';
    } else {
        document.getElementById('responseMessage').innerText = 'Please fill out the form completely!';
    }
});
