import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo_aanikirja.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">

<li><a target="top" href="http://freeclassicaudiobooks.com/">Freeclassicaudiobooks.com</a></li>
<li><a target="top" href="http://www.audiobookscorner.com/free.html">Audiobookscorner.com ilmaiset kirjat</a></li>
<li><a target="top" href="http://www.talking-book-store.com/free.html">Talking-book-store.com kirjakauppa</a></li>
<li><a target="top" href="http://www.audiobooks.net/lp/abnet-lp.html">Audiobooks.net</a></li>
<li><a target="top" href="http://www.gutenberg.org/wiki/Gutenberg:The_Audio_Books_Project">Project Gutenberg</a></li>
<li><a target="top" href="http://fi.wikipedia.org/wiki/%C3%84%C3%A4nikirja">Wiki tietoa &auml;&auml;nikirjoista</a></li>
<li><a target="top" href="http://www.like.fi/kirjat.php?ryhma2=194">Like &auml;&auml;nikirjat</a></li>
<li><a target="top" href="http://librivox.org/list-translated-pages-finnish/">Librivox</a></li>
<li><a target="top" href="http://librivox.org/newcatalog/search_advanced.php?title=&author=&cat=&genre=&status=all&type=&language=Finnish&date=&reader=&bc=&mc=&action=Search">Librivox - &auml;&auml;nikirjoja suomeksi</a></li>
<li><a target="top" href="http://www.otava.fi/kirjat/aanikirjat/">Otavan &auml;&auml;nikirjat</a></li>
<li><a target="top" href="http://www.wsoy.fi/index.jsp?c=/products&main=10&sub=2#">WSOY &auml;&auml;nikirjat</a></li>

</ul>
               </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">

<li><a target="top" href="http://www.suurikuu.fi/PublishedService?file=page&pageID=3&action=view&groupID=288">Suurikuu.fi</a></li>
<li><a target="top" href="http://www.adlibris.com/fi/mp3default.aspx">Adlibris kirjakauppa</a></li>
<li><a target="top" href="http://www.voicebook.com/">Voicebook.com</a></li>
<li><a target="top" href="http://www.audiobooks.org/">AudioBooks.org</a></li>
<li><a target="top" href="http://www.audioeditions.com/">Audioeditions</a></li>
<li><a target="top" href="http://www.40bestaudiobooks.co.uk/">40BestAudioBooks.co.uk</a></li>
<li><a target="top" href="http://www.audible.co.uk/">Audible</a></li>
<li><a target="top" href="http://www.best-audiobooks.com/">Best-audiobooks.com</a></li>
<li><a target="top" href="http://www.audiobooksforfree.com/home">Audiobooksforfree.com</a></li>

                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
