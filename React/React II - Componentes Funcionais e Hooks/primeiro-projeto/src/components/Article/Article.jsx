import React from "react";
// import articleImg from '../../assets/images/article1.jpg'
import './styles.css'

export function Article({title, provider, description, thumbnail}){
  // this.props

    return(
      <article id="article">
        <img src={thumbnail} alt={title} width={'20%'}/>
        <div className="article-infos">
          <h2>{title}</h2>
          <h3>{provider}</h3>
          <p>
            {description}
          </p>
        </div>
      </article>
    )
}