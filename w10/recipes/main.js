import recipes from "./recipes.mjs";

// -------------------- RANDOM RECIPE FUNCTIONS --------------------
function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

// -------------------- TEMPLATE FUNCTIONS --------------------
function tagsTemplate(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join("");
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `
        <div class="recipe-card">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-content">
                <div class="tags">${tagsTemplate(recipe.tags)}</div>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p>${recipe.description}</p>
            </div>
        </div>
    `;
}

// -------------------- RENDER FUNCTION --------------------
function renderRecipes(recipeList) {
    const container = document.querySelector(".recipes");

    if (!recipeList.length) {
        container.innerHTML = `<p class="no-results">No recipes match your search.</p>`;
        return;
    }

    container.innerHTML = recipeList.map(recipeTemplate).join("");
}

// -------------------- SEARCH SYSTEM --------------------
function filterRecipes(query) {
    query = query.toLowerCase();

    return recipes
        .filter(recipe => {
            return (
                recipe.name.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query) ||
                recipe.ingredients.find(i => i.toLowerCase().includes(query)) ||
                recipe.tags.find(tag => tag.toLowerCase().includes(query))
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(event) {
    event.preventDefault();

    const query = document.querySelector("#search-input").value.trim().toLowerCase();
    const results = filterRecipes(query);
    renderRecipes(results);
}

// -------------------- INIT --------------------
function init() {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);

    document.querySelector("#search-button").addEventListener("click", searchHandler);
}

init();
