import React, { useState } from 'react';

const categories = [
  {
    id: 1,
    image: 'images/fastfoods.jfif',
    title: 'Fast Foods',
    recipes: [
      { id: 1, image: 'images/burger.jfif', title: 'Burger', link: 'https://www.allrecipes.com/recipe/25473/the-perfect-basic-burger/' },
      { id: 2, image: 'images/pizza1.jfif', title: 'Pizza', link: 'https://www.allrecipes.com/recipe/20171/quick-and-easy-pizza-crust/' },
      { id: 3, image: 'images/fries.jfif', title: 'Fries', link: 'https://www.allrecipes.com/recipe/50223/homemade-crispy-seasoned-french-fries/' },
    ]
  },
  {
    id: 2,
    image: 'images/drinks.jfif',
    title: 'Drinks',
    recipes: [
      { id: 1, image: 'images/lemonade.jfif', title: 'Lemonade', link: 'https://www.allrecipes.com/recipe/32385/best-lemonade-ever/' },
      { id: 2, image: 'images/smoothie.jfif', title: 'Smoothie', link: 'https://www.allrecipes.com/recipe/215189/fruit-and-yogurt-smoothie/' },
      { id: 3, image: 'images/cocktail.jfif', title: 'Cocktail', link: 'https://www.allrecipes.com/recipe/222416/margarita-cocktail/' },
    ]
  },
  {
    id: 3,
    image: 'images/salads.jfif',
    title: 'Salads',
    recipes: [
      { id: 1, image: 'images/ceasarsalad1.jpg', title: 'Caesar Salad', link: 'https://www.allrecipes.com/recipe/14172/caesar-salad-supreme/' },
      { id: 2, image: 'images/greeksalad.jfif', title: 'Greek Salad', link: 'https://www.allrecipes.com/recipe/14373/greek-salad-i/' },
      { id: 3, image: 'images/fruitsalad.jfif', title: 'Fruit Salad', link: 'https://www.allrecipes.com/recipe/214947/perfect-summer-fruit-salad/' },
    ]
  },
  {
    id: 4,
    image: 'images/deserts.jfif',
    title: 'Deserts',
    recipes: [
      { id: 1, image: 'images/cake.jfif', title: 'Cake', link: 'https://www.allrecipes.com/recipe/17528/extreme-chocolate-cake/' },
      { id: 2, image: 'images/icecream.jfif', title: 'Ice Cream', link: 'https://www.allrecipes.com/article/trend-soft-serve-is-cool-again/' },
      { id: 3, image: 'images/brownie.jpg', title: 'Brownie', link: 'https://www.allrecipes.com/recipe/238654/brookies-brownie-cookies/' },
    ]
  }
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage('category');
  };

  const handleNavClick = (page) => {
    setCurrentPage(page);
    if (page !== 'category') {
      setSelectedCategory(null);
    }
  };

  return (
    <div className="blog-page">
      <header className="header">
        <div className="header-content">
          <h1><strong>Yummy Recipes</strong></h1>
          <h3>Special Recipes for Special People.</h3>
        </div>
      </header>
      
      <nav className="navbar">
        <h1 className='recipie-categories'> Recipe Categories</h1>
        <ul>
          <li onClick={() => handleNavClick('home')}>Home</li>
          <li onClick={() => handleNavClick('about')}>About</li>
          <li onClick={() => handleNavClick('allRecipes')}>Recipes</li>
          <li onClick={() => handleNavClick('contact')}>Contact Us</li>
        </ul>
      </nav>

      {currentPage === 'home' && (
        <div className="category-list">
          {categories.map(category => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category)}
            >
              <img src={category.image} alt={category.title} />
              <h3>{category.title}</h3>
            </div>
          ))}
        </div>
      )}

      {currentPage === 'category' && selectedCategory && (
        <div className="recipe-detail">
          <h2>{selectedCategory.title}</h2>
          <div className="recipe-list">
            {selectedCategory.recipes.map(recipe => (
              <div key={recipe.id} className="recipe-card">
                <a href={recipe.link} target="_blank" rel="noopener noreferrer">
                  <img src={recipe.image} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentPage === 'allRecipes' && (
        <div className="recipe-detail">
          <h2>All Recipes</h2>
          <div className="recipe-list">
            {categories.flatMap(category => category.recipes).map(recipe => (
              <div key={`${recipe.title}-${recipe.id}`} className="recipe-card">
                <a href={recipe.link} target="_blank" rel="noopener noreferrer">
                  <img src={recipe.image} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentPage === 'about' && (
        <div className="about-page">
          <h2>About Us</h2>
          <p>Welcome to Yummy Recipes, where we share special recipes for special people. Enjoy exploring our diverse collection of recipes, ranging from fast foods to drinks, salads, and desserts. We hope you find something delicious to try and share with your loved ones. 😋</p>
        </div>
      )}

      {currentPage === 'contact' && (
        <div className="contact-page">
          <h1>Contact Us</h1>
          <p>If you have any questions or suggestions, feel free to reach out to us. We would love to hear from you!<br />
            <br /><p> <strong>Facebook: </strong>facebook.com/yummyrecipies</p> 
            <p> <strong>Instagram: </strong>instagram.com/yummyrecipies</p> 
            <p> <strong>X (Former Twitter): </strong>X.com/yummyrecipies</p> 
            
            </p>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2024 Yummy Recipes. All rights reserved.</p>
      </footer>
    </div>
  );
};
export default BlogPage;