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
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
        <div class="card shadow">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h3 class="card-title">${meal.strMeal}</h3>
                <p class="card-text">${meal.strInstructions.slice(0, 160)}</p>
            </div>
        </div>
        `;
        searchResults.appendChild(div);
    })
}