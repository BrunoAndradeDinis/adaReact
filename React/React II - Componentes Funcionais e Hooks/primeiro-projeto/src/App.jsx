import React, { Fragment, useEffect, useState } from "react";
import "./styles/App.css";
import { Navbar } from "./components/NavBar/Navbar";
import { Article } from "./components/Article/Article";
// import { Counter } from "./components/Counter/Counter";
import axios from "axios";
import { Vortex } from "react-loader-spinner";

// Componente em classe é uma classe que herda a classe component do react e retorna HTML dentro do método Render

// Componente funcional é uma função que retorna um HTML

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles/?format=json"
      );
      const newsData = response.data.results;

      console.log(newsData);
      setNews(newsData);
    }
    loadNews();
  }, []);
  // mètodo responsável por rederizar o conteúdo HTML do nosso componente
  return (
    <>
      <Navbar />

      {/* <Counter /> */}
      <section className="articles">
        {news.length === 0 ? (
          <div style={{height: '400px', width:'100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Vortex
              visible={true}
              height="80"
              width="80"
              ariaLabel="vortex-loading"
              wrapperStyle={{}}
              wrapperClass="vortex-wrapper"
              colors={["white", "white", "white", "white", "white", "white"]}
            />
          </div>
        ) : (
          news.map((article) => {
            console.log("este é o :", article);
            return (
              <Article
                title={article.title}
                thumbnail={article.image_url}
                provider={article.news_site}
                description={article.summary}
                key={article.id}
                link={article.url}
              />
            );
          })
        )}
      </section>
    </>
  );
}

export default App;
