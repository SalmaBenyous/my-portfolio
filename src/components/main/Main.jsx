import React, { useEffect } from "react";
import { useState } from "react";
import "./main.css";
import { data } from "../../Data";
function Main({ id }) {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState(data);
  const [activeCategory, setActiveCategory] = useState("alle Projekte"); // New state to track active category
  // This function filters projects based on the selected category
  const filterByCategory = (category) => {
    setActiveCategory(category); // Set the active category when a button is clicked
    if (category === "alle Projekte") {
      setProjects(data); // If 'All Projects' is selected, show all projects
    } else {
      const filteredProjects = data.filter(
        (project) => project.category === category
      );
      setProjects(filteredProjects); // Filter the projects by the selected category
    }
  };
  useEffect(() => {
    //dispaly Categories
    const catecoriesList = [
      "alle Projekte",
      ...new Set(data.map((item) => item.category)),
    ];
    setCategories(catecoriesList);
  }, []);
  return (
    <main className="flex">
      <div className="left  flex">
        {categories.map((cat, i) => {
          return (
            <button
              key={i}
              className={cat === activeCategory ? "active" : ""}
              onClick={() => filterByCategory(cat)}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="rigth flex " id={id}>
        {projects.map((item,i) => {
          return (
            <article className="card " key={i}>
              <img width={243} src={item.img} alt="photo1" />
              <div style={{ width: "242px" }} className="box ">
                <h1 className="title">{item.titleProject}</h1>
                <p className="sub-title">
                  {item.description}
                </p>
                <div className="flex  icons-main">
                  <div className="flex" style={{ gap: "11px" }}>
                    {/* <div className="icon-link"></div> */}
                    <a href={item.linkGithu} className="icon-github" target="_blank">

                    </a>
                  </div>
                  <a href={item.link} className="link flex" target="_blank">
                  Website anzeigen
                    <span
                      style={{ alignSelf: "center" }}
                      className="icon-arrow-right grow "
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default Main;
