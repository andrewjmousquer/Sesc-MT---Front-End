import React from "react";
import './css/News.css'
import { TbNews } from 'react-icons/tb';

import newLetters from "../../../assets/newsLetter.png";
import news_double from "../../../assets/newsLetter1.png";

export default function News() {
    return (
      <div className='container_news'>
          <h1 className="news__title"><TbNews/> &ensp;Últimas notícias</h1>
           <p className="news_subtitle">Confira nossos últimos conteúdos em nosso portal de notícias!  </p>
             <div className="columns_news-">
              <div className="columns_double">
                <div className='content_news'>
                     <div className="news_background">
                     <img src={newLetters} alt="news" className="news__image" />
                     <p className="news_subtitle_poor">Competição de UNO e muitas brincadeiras na programação de férias no Sesc Cáceres</p>
                     <button className="button__news">+ detalhes</button>
                     </div>
                  </div>
                <div className='content_news_left'>
                     <img src={news_double} alt="news" className="news__image" />
                     <p className="news_subtitle_poor_left">Sesc-MT está com inscrições abertas para vagas com salários de até R$ 7,1 mil</p>  
                  </div>
              </div>
                  <div className="double_content">
                <div className='content_news_double'>
                     <div className="news_background_double">
                     <img src={newLetters} alt="news" className="news__image" />
                     <p className="news_subtitle_poor_double">Competição de UNO e muitas brincadeiras na programação de férias no Sesc Cáceres</p>
                     <button className="button__news">+ detalhes</button>
                     </div>
                 </div>
                <div className='content_news_double'>
                     <div className="news_background_double">
                     <img src={newLetters} alt="news" className="news__image" />
                     <p className="news_subtitle_poor_double">Competição de UNO e muitas brincadeiras na programação de férias no Sesc Cáceres</p>
                     <button className="button__news">+ detalhes</button>
                     </div>
                 </div>
                  </div>
                  <div className="double_content">
                <div className='content_news_double'>
                     <div className="news_background_double">
                     <img src={newLetters} alt="news" className="news__image" />
                     <p className="news_subtitle_poor_double">Competição de UNO e muitas brincadeiras na programação de férias no Sesc Cáceres</p>
                     <button className="button__news">+ detalhes</button>
                     </div>
                 </div>
                <div className='content_news_double'>
                     <div className="news_background_double">
                     <img src={newLetters} alt="news" className="news__image" />
                     <p className="news_subtitle_poor_double">Competição de UNO e muitas brincadeiras na programação de férias no Sesc Cáceres</p>
                     <button className="button__news">+ detalhes</button>
                     </div>
                 </div>
                  </div>
              </div>
        </div>
    )
}