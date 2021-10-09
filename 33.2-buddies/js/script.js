function loadUsers() {
    fetch('https://randomuser.me/api/?gender=male')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
loadUsers();

function displayUsers(data) {
    const users = data.results[0];
    const card = document.querySelector('.card-body');
    card.innerHTML = `
            <img src="${users.picture.large}">
            <p>Hi, My name is</p>
            <h2>${users.name.first} ${users.name.last}</h2>
            <p>${users.email}</p>
            <p>City: ${users.location.city}, ${users.location.country}</p> 
        `
}

