const recipes = [
  {
    id: 1,
    name: "سلطة الخضروات",
    description: "سلطة طازجة ومغذية.",
    image: "salad.png",
    category: ["healthy", "vegan"],
    mealType: "lunch",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quantities: `
      - 2 كوب خس مقطعة
      - 1 كوب طماطم مقطعة
      - 1 كوب خيار مقطع
      - 1/2 كوب زيتون أسود
      - 2 ملعقة كبيرة صلصة الزيتون
      - 1 ملعقة صغيرة ملح
      - 1/2 ملعقة صغيرة فلفل أسود
    `,
    preparation: "1. قم بتجهيز المكونات. 2. اخلطها معًا. 3. أضف التوابل.",
    time: "15 دقائق",
    servings: "4 أشخاص"
  },
  {
    id: 2,
    name: "الدجاج المشوي",
    description: "طبق لذيذ وسهل التحضير.",
    image: "kfc.png",
    category: ["quick", "healthy"],
    mealType: "dinner",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quantities: `
      - 500 جرام صدور دجاج مقطعة
      - 2 ملعقة كبيرة صلصة الصويا
      - 1 ملعقة صغيرة عصير ليمون
      - 1 ملعقة صغيرة بهارات مشكلة
      - 1/2 ملعقة صغيرة ملح
      - 1/4 ملعقة صغيرة فلفل أسود
    `,
    preparation: "1. قم بتتبيل الدجاج. 2. شويه في الفرن لمدة 25 دقيقة.",
    time: "30 دقائق",
    servings: "6 أشخاص"
  },
  {
    id: 3,
    name: "المكرونة بالجبن",
    description: "وجبة سريعة ولذيذة.",
    image: "mak.png",
    category: ["quick"],
    mealType: "lunch",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quantities: `
      - 250 جرام مكرونة
      - 100 جرام جبن موزاريلا مبشور
      - 1/2 كوب كريمة حامضة
      - 1 ملعقة صغيرة ملح
      - 1/2 ملعقة صغيرة فلفل أسود
      - 1/2 كوب صلصة الطماطم
    `,
    preparation: "1. اطبخ المكرونة. 2. أضف الجبن والصلصة. 3. اخبز في الفرن.",
    time: "20 دقائق",
    servings: "3 أشخاص"
  },
  {
    id: 4,
    name: "حساء العدس",
    description: "حساء دافئ ومغذي.",
    image: "عدس.png",
    category: ["healthy", "vegan"],
    mealType: "breakfast",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quantities: `
      - 1 كوب عدس مغسول
      - 1 بصلة مفرومة
      - 2 ملعقة كبيرة زيت زيتون
      - 1 كوب طماطم مقطعة
      - 1/2 ملعقة صغيرة بهارات مشكلة
      - 1 ملعقة صغيرة ملح
      - 1/2 ملعقة صغيرة فلفل أسود
      - 3 أكواب ماء
    `,
    preparation: "1. اقلي البصل حتى يصبح ذهبيًا. 2. أضيفي العدس والماء. 3. اتركيه حتى ينضج.",
    time: "45 دقائق",
    servings: "5 أشخاص"
  },
  {
    id: 5,
    name: "كعك الشوكولاتة",
    description: "كعكة لذيذة مليئة بالشوكولاتة.",
    image: "كيكه.png",
    category: ["dessert"],
    mealType: "dinner",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quantities: `
      - 2 كوب دقيق
      - 1 1/2 كوب سكر
      - 3 بيضات
      - 1 كوب شوكولاتة مذابة
      - 1/2 كوب زبدة مذابة
      - 1 ملعقة صغيرة خميرة
      - 1/2 ملعقة صغيرة ملح
    `,
    preparation: "1. اخلطي المكونات معًا. 2. اخبزيها في الفرن لمدة 30 دقيقة.",
    time: "40 دقائق",
    servings: "8 أشخاص"
  },
  {
    id: 6,
    name: "سمبوسة اللحم",
    description: "طبق شرقي تقليدي ولذيذ.",
    image: "سمبوسه.png",
    category: ["snack"],
    mealType: "lunch",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    quantities: `
      - 250 جرام عجين السمبوسة
      - 200 جرام لحم مفروم
      - 1 بصلة مفرومة
      - 1 ملعقة صغيرة بهارات مشكلة
      - 1/2 ملعقة صغيرة ملح
      - 1/4 ملعقة صغيرة فلفل أسود
      - زيت للقلي
    `,
    preparation: "1. اعدي الحشوة من اللحم المفروم. 2. ضعيها داخل العجين. 3. اقليها حتى تصبح ذهبية.",
    time: "35 دقائق",
    servings: "4 أشخاص"
  }
];

 

    function renderRecipes(filteredRecipes) {
      const recipeList = document.getElementById("recipeList");
      recipeList.innerHTML = "";
      filteredRecipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.dataset.id = recipe.id;
        card.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.name}" />
          <h3>${recipe.name}</h3>
          <p>${recipe.description}</p>
          <button class="favorite-btn">أضف إلى المفضلة</button>
        `;
        recipeList.appendChild(card);

        // Add event listeners
        const favoriteBtn = card.querySelector(".favorite-btn");
        const isFavorited = JSON.parse(localStorage.getItem("favorites")) || [];
        if (isFavorited.includes(recipe.id)) {
          favoriteBtn.classList.add("favorited");
        }

        favoriteBtn.addEventListener("click", () => {
          let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
          if (favorites.includes(recipe.id)) {
            favoriteBtn.classList.remove("favorited");
            favorites = favorites.filter(favId => favId !== recipe.id);
          } else {
            favoriteBtn.classList.add("favorited");
            favorites.push(recipe.id);
          }
          localStorage.setItem("favorites", JSON.stringify(favorites));
        });

        card.addEventListener("click", () => {
          window.location.href = `recipe.html?id=${recipe.id}`;
        });
      });
    }

    function filterRecipes() {
      const searchInput = document.getElementById("searchInput").value.toLowerCase();
      const filters = Array.from(document.querySelectorAll(".filter-options input:checked")).map(
        checkbox => checkbox.value
      );
      const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(searchInput) &&
        (filters.length === 0 || filters.includes(recipe.mealType))
      );
      renderRecipes(filteredRecipes);
    }

    document.getElementById("searchInput").addEventListener("input", filterRecipes);
    document.querySelector(".filter-options").addEventListener("change", filterRecipes);

    // Initialize the app by rendering all recipes
    renderRecipes(recipes);
    
   