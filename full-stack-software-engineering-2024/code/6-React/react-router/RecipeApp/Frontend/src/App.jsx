import "./index.css";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import RecipePage from "./pages/RecipePage";
import UpdateRecipePage from "./pages/UpdateRecipePage";
import MissingPage from "./pages/MissingPage";
import { ChakraProvider } from "@chakra-ui/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import { createContext, useState, useEffect } from "react";

export const context = createContext("");

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [Recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      setRecipes([]);
      try {
        const res = await fetch("http://localhost:4000/api/recipe/all");
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.error(error.mesaage);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const fetchRecipe = async (id) => {
    setIsLoading(true);
    setRecipe("");
    try {
      const res = await fetch(`http://localhost:4000/api/recipe/one/${id}`);
      const data = await res.json();
      setRecipe(data.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const createNewRecipe = async (newRecipe) => {
    try {
      const res = await fetch("http://localhost:4000/api/recipe/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });
      const data = await res.json();
      if (!data.success) return { success: false, message: error.message };
      setRecipes([...recipes, data.data]);
      return { success: true, message: data.message };
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchUpdateRecipe = async (rid, recipeToEdit) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/recipe/update/${rid}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipeToEdit),
        }
      );
      const data = await res.json();
      if (!data.success) {
        return { success: false, msg: error.msg };
      } else return { success: true, msg: data.msg };
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchDeleteRecipe = async (rid) => {
    try {
      const res = await fetch(
        `http://localhost:4000/api/recipe/delete/${rid}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data.success)
        return { success: true, message: "Recipe deleted succesfully" };
    } catch (error) {
      console.error(error.message);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="recipe/:id" element={<RecipePage />} />
        <Route path="update/:id" element={<UpdateRecipePage />} />
        <Route path="*" element={<MissingPage />} />
      </Route>
    )
  );
  return (
    <>
      <ChakraProvider>
        <context.Provider
          value={{
            darkMode,
            setDarkMode,
            isLoading,
            setRecipes,
            recipes,
            fetchRecipe,
            Recipe,
            createNewRecipe,
            fetchUpdateRecipe,
            fetchDeleteRecipe,
          }}
        >
          <RouterProvider router={router} />
        </context.Provider>
      </ChakraProvider>
    </>
  );
}

export default App;
