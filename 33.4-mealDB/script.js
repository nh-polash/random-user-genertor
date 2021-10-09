document.getElementById('button-search').addEventListener('click', function () {
    const searchFiled = document.getElementById('search-input');
    const searchText = searchFiled.value;
    searchFiled.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
})


const displaySearchResult = meals => {
    const searchResults = document.getElementById('search-results');
    meals.forEach(meal => {
        console.log(meal)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 200)}.</p>
            </div>
        </div>
        `;
        searchResults.appendChild(div);
    })
}