import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import logoML from '../assets/images/logo_ml.png';
import iconSearch from '../assets/images/ic_search.png';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function SerachBox() {
    const firstRender = useRef(true);
    const history = useHistory();

    const [item, setItem] = useState('');
    
    let query = useQuery();
    let searchQuery = query.get("search");

    useEffect(() => {
		if (firstRender.current) firstRender.current = false; 
		if (searchQuery) setItem(searchQuery);
	}, [searchQuery]);
    
    const handleChange = (e) => {
        setItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (item) {
            history.push({
                pathname: '/items',
                search: `?search=${item}`
            });
        }
    };

    const goToHome = () => {
        history.push('/');
    };

    return (
        <header className='header'>
            <div>
                <img
                    src={logoML}
                    alt="logo_ml"
                    title="Mercado Libre - Donde comprar y vender de todo"
                    className='meli-logo'
                    onClick={ () => goToHome()}
                />
                <form onSubmit={e => handleSubmit(e)} >
                    <input
                        type="text"
                        id="serach_input"
                        name="search"
                        value={item}
                        placeholder="Buscar productos, marcas y más"
                        onChange={e => handleChange(e)}
                    />
                    <button>
                        <img src={iconSearch} alt="ic_search" title="Buscar" />
                    </button>
                </form>
            </div>
        </header>
    );
}

export default SerachBox;