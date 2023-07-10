import { React, useRef } from 'react';
import { TopNav } from '../components/TopNav';
import './Recipes.css';
import { NavLink } from 'react-router-dom';


import logoshesha from './images/logoshesha.png';

const API_KEY = "87b8614592b54548bb52129611a38c16";

//{API_KEY,query,setQuery,recipes,setRecipes,isDoneLoading,setIsDoneLoading}

export const Recipes = (props) => {
  //main variables
  //const API_URL_normal = `https://api.spoonacular.com/recipes/complexSearch?query=curry&apiKey=87b8614592b54548bb52129611a38c16`;
  //let ApiUrl_searchFeature =`https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=${75}&apiKey=${API_KEY}`
  const videoEl = useRef();

  const handleSearch = async (e) => {
    e.preventDefault(); videoEl.current.play(); props.setIsDoneLoading("loading");
    let myTimeout = setTimeout(() => {
      props.setIsDoneLoading("");
      clearTimeout(myTimeout);
    }, 2000);
    const recipeData = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${props.query}&number=9&apiKey=87b8614592b54548bb52129611a38c16`).then(response => response.json()).then(jsonData => jsonData.results);
    props.setRecipes(recipeData);
    props.setQuery("");
    console.log(recipeData);
  }
  return (<>

    <TopNav />
    <section className={`Recipes`}>
      <form style={{ marginBottom: "60px", border: "none" }} onSubmit={(e) => handleSearch(e)}>
        <input placeholder="Search recipe using the ingredients you have"
          className={`RecipeSearchBar`}
          type="text"
          value={props.query}
          onChange={(e) => { console.log(props.query); props.setQuery(e.target.value); }} style={{ position: "relative", left: "17%", borderRadius: "10px", height: "50px", width: "60%", }} />
        <button style={{ position: "relative", left: "10%", }} className={`RecipeSearchButton`} type="submit">Search</button>
      </form>

      <div style={{ position: "relative", left: "10%", translate: "100px 200px", top: "50px", }} className={`${(props.isDoneLoading === "loading") ? "LoadingScreen" : "DisplayNone"}`}>
        <video ref={videoEl} src={`loading.mp4`} loop="true" className={`${(props.isDoneLoading === "loading") ? "LoadingScreen" : "DisplayNone"}`} style={{}} />
      </div>

      <div className={`RecipesContainer`}>
        <ul className={`RecipesList`}>
          {props.recipes && props.recipes.map((item) => (
            <li className={`RecipeListItem`} key={item.id}>
              <img className={`RecipeListImg`} src={item.image} alt={item.title} />
              <h3>{item.title}</h3><NavLink to={`/recipesMethods/${item.title}`} style={{ textDecoration: "underline", color: "black", color: "white ", width: "60%", height: "40px", }}>Click to view Method</NavLink>
            </li>
          ))}
        </ul>
      </div>

{/*Footer Section Started*/}
<div className="footer">
        {/*<h3 style={{ position: "relative", top: "10px", left: "4%", color: "lightgrey", fontWeight: "700", }}>Thank You For Visting Our Website<br /></h3>*/}
        <div className="sb_footer section_padding">
          <div className="sb_footer-links">
            <a href='/Home'><img src={logoshesha} alt="logoshesha.png" style={{ color: "white", }} /><em style={{ fontSize: "30px", textDecoration: "none", }}></em></a>
            <div className="sb_footer-links_div">
              <h3>Contact</h3>
              <a href="/Contact">
                <p style={{fontWeight:"600",}}><i>Linkedin</i></p>
              </a>
              <a href="/Lessons">
                <p style={{fontWeight:"600",}}><i>Facebook</i></p>
              </a>
              <a href="/Recipes">
                <p style={{fontWeight:"600",}}><i>GitHub</i></p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              <h3>Resources</h3>
              <a href="/Home">
                <p>Youtube</p>
              </a>
              <a href="/Recipes">
                <p>Royco Website</p>
              </a>
              <a href="/Recipes">
                <p>STV</p>
              </a>
            </div>
           
            <div className="sb_footer-links_div">
              <h3>Company</h3>
              <a href="/Home">
                <p>Home</p>
              </a>
              <a href="/Lessons">
                <p>Lessons</p>
              </a>
              <a href="/Recipes">
                <p>Recipe</p>
              </a>
              <a href="/Categories">
                <p>Categories</p>
              </a>
            </div>
            <div className="sb_footer-links_div">
              
            </div>
          </div>

          <hr></hr>

          <h6 style={{ color: "white", position: "relative", top: "20px", left: "18%", }}>Copyright @ Shesha Food Recipe. All right reserved.</h6>
          <div className="sb_footer-below">
            <div className="sb_footer-copyright">
              <p>

              </p>
            </div>
          </div>
        </div>
      </div>
      {/*End the footer Section Started*/}

    </section>

  </>)
}