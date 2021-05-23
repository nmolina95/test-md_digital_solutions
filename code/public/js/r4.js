window.addEventListener('load', () => {
    
    const TABLE = document.getElementById('table');

    /*====== Get table information via API ======*/
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            data.forEach(element => {

                // Use background color for even table rows, else leave normal
               if(element.id % 2 != 0){
                   TABLE.innerHTML += `
                <tr style="background-color: var(--background-even);">
                    <td>${element.name}</td>
                    <td>${element.username}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
                    <td>${element.website}</td>
                    <td>${element.company.name}</td>
                </tr>
               `
               }
               else{
                   TABLE.innerHTML += `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.username}</td>
                    <td>${element.email}</td>
                    <td>${element.phone}</td>
                    <td>${element.website}</td>
                    <td>${element.company.name}</td>
                </tr>
               `
               }
            })
        })
        .catch(err => console.log(err));

})