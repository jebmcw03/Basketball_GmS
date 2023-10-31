fetch('HoustonRockets.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Log the fetched data
        let tableBody = document.querySelector('tbody');
        data.forEach(row => {
            let tr = document.createElement('tr');
            for (let key in row) {
                let td = document.createElement('td');
                td.textContent = row[key];
                tr.appendChild(td);
            }
            tableBody.appendChild(tr);
        });
    })
    .catch(error => {
        console.log('Fetch error: ', error.message);
    });

