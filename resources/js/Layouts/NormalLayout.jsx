import React from 'react';

export default function NormalLayout({ children }) {
    const headerStyle = {
        height: '80px',
        backgroundColor: 'rgb(136, 19, 55)'
    };
    
    return (
        <>
            <header className="d-flex align-items-center justify-content-between" style={headerStyle}>
                <div className="ms-5">
                    <a href="/">
                        <img src="site_logo.gif" alt='site-logo' />
                    </a>
                </div>
                
                <nav class="me-5">
                    <ul class="nav">
                        <NavigationItem name='articles' label='解説記事' />
                        <NavigationItem name='columns' label='コラム' />
                        <NavigationItem name='' label='大会' />
                        <NavigationItem name='' label='サイトについて' />
                    </ul>
                </nav>
            </header>
            
            <main className="container w-80 m-auto">{children}</main>
        </>
    );
}

const NavigationItem = (props) => {
    const {label, name } = props;
    
    return (
        <li class="nav-item">
            <a className="nav-link fw-bold fs-4" style={{ color: 'rgb(254, 169, 16)' }} href={`/${name}`}>{label}</a>
        </li>
    );
};