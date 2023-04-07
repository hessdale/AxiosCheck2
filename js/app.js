let get_meal = document.querySelector(`#get_meal`);
let meal_html = document.querySelector(`#meal`);

function successFunction1(response) {
    meal_html.innerHTML = `<h1>${response.data.meals[0].strMeal}</h1><p>${response.data.meals[0].strArea}</p><p>${response.data.meals[0].strInstructions}</p><img src="${response.data.meals[0].strMealThumb}" width="400px">`
};
function failureFunction1(response) {
    meal_html.insertAdjacentHTML(`afterend`, `<h1>error please try again</h1>`);
};

let meal_input = document.querySelector(`#input_for_meal`);


function randommeal(details) {
    let meal_search = meal_input[`value`];
    axios.request({
        url: `https://www.themealdb.com/api/json/v1/1/filter.php`,
        params: {
            c: meal_search
        }
    }).then(successFunction1).catch(failureFunction1);
};
get_meal.addEventListener(`click`, randommeal);





function successFunction2(response) {
    meal_html.innerHTML = `<h1>posted</h1>`
};
function failureFunction2(response) {
    meal_html.insertAdjacentHTML(`afterend`, `<h1>error please try again</h1>`);
};

let button_json = document.querySelector(`#get_json`);


function json_get(details) {
    let title_json = document.querySelector(`#title_json`);
    let body_json = document.querySelector(`#body_json`);
    let id_json = document.querySelector(`#id_json`);
    let title_json_value = title_json[`value`];
    let body_json_value = body_json[`value`];
    let id_json_value = id_json[`value`];
    axios.request({
        url: `https://jsonplaceholder.typicode.com/posts`,
        method: `POST`,
        data: {
            title: title_json_value,
            body: body_json_value,
            id: id_json_value
        }
    }).then(successFunction2).catch(failureFunction2);
};


button_json.addEventListener(`click`, json_get);