import CreateRecipe from "./components/create-recipe/CreateRecipe";
import Header from "./components/header/Header";
import RecipeItem from "./components/recipe-item/RecipeItem";
import User from "./components/user/user";
import { useGetRecipesQuery } from "./store/api/api";

function App() {

  const { isLoading, data } = useGetRecipesQuery()

  return (
    <section>
      <Header />
      <CreateRecipe />
      {/* <User /> */}
      <div className="App">
        {isLoading ? <div>Loading...</div> :
          data ? data.map(recipe =>
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
            />
          ) : <div>Not Found</div>}
      </div>
    </section>
  );
}

export default App;
