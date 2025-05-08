import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../components/BottomNav";
<script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src="/images/logo.png" alt="Mini Logo" className="mini-logo" />
        <input type="text" placeholder="Search food..." className="search-bar" />
      </header>
      <h1 class="heading">our <span>speciality</span></h1>
      <main className="categories">


<section class="popular" id="popular">


    <div class="box-container">

        <div class="box">
        <Link to="/food" className="category">
            <span class="price"> ₫450 - ₫950 </span>
            <img src="/images/food-icon.png" alt=""/>
            <h3>tasty dishes </h3>
          </Link>
        </div>
        <div class="box">
        <Link to="/dessert" className="category">
            <span class="price"> ₫60 - ₫200 </span>
            <img src="/images/dessert-icon.png" alt=""/>
            <h3>special dessert</h3>
            </Link>
        </div>
        <div class="box">
        <Link to="/drink" className="category">
            <span class="price"> ₫100 - ₫200 </span>
            <img src="/images/drink-icon.png" alt=""/>
            <h3>original DRINKS</h3>
          </Link>
        </div>
    </div>

</section>


<BottomNav />


      </main>
    </div>
  );
}

export default Home;


