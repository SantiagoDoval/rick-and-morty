import { useState, useReducer, useMemo, useRef, useCallback} from 'react'
import Search from './Search';
import useCharacters from '../hooks/useCharacters';

const initialState = {
    favorite: []
}

const URL = 'https://rickandmortyapi.com/api/character'   

const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                favorite: [...state.favorite, action.payload]
            }
        default:
            return state;
    }
}


const Characters = () => {

    

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null);

    const characters = useCharacters(URL);

    const handleClick = (favorite) => {
        dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })        
    }

    // const handleSearch = () => {
    //     console.log(searchInput)
    //     setSearch(searchInput.current.value)
    // }

    const handleSearch = useCallback(()=>{
        setSearch(searchInput.current.value)
    },[])

    // const filteredUsers = characters.filter(user=>{
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // })

    const filteredUsers = useMemo(() => 
        characters.filter(user => {
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        [characters,search]
    )

    return (
        <>
            <Search searchInput={searchInput} search={search} handleSearch={handleSearch}/>
            <section>
                <ul className='favorites'>
                    {favorites.favorite.map(fav => (
                        <img className='cover-fav' src={fav.image} key={fav.id} />
                    ))}
                </ul>
            </section>
            <section className="characters">
                <ul>
                    {filteredUsers.map(item => (
                        <li key={item.id} className='li-card'>
                            <figure>
                                <img className='cover-card' src={item.image} alt="" />
                            </figure>
                            <div className="info">
                                <p className='name-info'>{item.name}</p>
                                <p>Gender: <span>{item.gender}</span></p>
                                <p>Specie: <span>{item.species}</span></p>
                                <p className={item.status}>{item.status}</p>
                                <button className='fav-btn' type='button' onClick={() => handleClick(item)}>♥</button>
                            </div>

                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Characters