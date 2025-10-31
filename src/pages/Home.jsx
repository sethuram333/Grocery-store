import React from "react";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import Products from "../components/Home/Products";
import Features from "../components/Home/Features";
import Process from "../components/Home/Process";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Features />
      <Products />
      <Process/>
    </div>
  );
};

export default Home;
