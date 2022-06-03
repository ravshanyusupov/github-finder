import React from 'react';

function Footer(props) {
    const year = new Date().getFullYear()
    return (
        <footer className='footer p-5 bg-neutral text-primary-content footer-center'>
                <div>
                    <p>Copyright &copy; {year} All rights reserved</p>
                </div>
        </footer>
    );
}

export default Footer;