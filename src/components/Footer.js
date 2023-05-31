import React from 'react';

function Footer({ loggedIn }) {
  return (
    loggedIn &&
    <footer className="footer">
        <div className='footer__container'>
          <p className="footer__copyright">© 2023 Biozavr</p>
        </div>
    </footer>
  );
}

export default Footer; 