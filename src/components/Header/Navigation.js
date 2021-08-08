import React from 'react';

const Navigation = () => {
    return (
        <div className="Navigation">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container  ml-auto">
                    <a className="navbar-brand" href="./">Restaurant</a>
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="./">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="./">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="./">Recipe</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="./">About</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navigation;