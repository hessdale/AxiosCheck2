let get_meal = document.querySelector(`#get_meal`);
let meal_html = document.querySelector(`#meal`);

function successFunction(response) {
    meal_html.innerHTML = `<h1>${response.data.meals[0].strMeal}</h1><p>${response.data.meals[0].strArea}</p><p>${response.data.meals[0].strInstructions}</p>`
};
function failureFunction(response) {
    meal_html.insertAdjacentHTML(`afterend`, `<h1>error</h1>`);
};

function randommeal(details) {
    axios.request({
        url: `https://www.themealdb.com/api/json/v1/1/random.php`
    }).then(successFunction).catch(failureFunction);
};
get_meal.addEventListener(`click`, randommeal);