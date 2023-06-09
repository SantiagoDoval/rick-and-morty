import { useContext } from 'react'
import { contexto } from '../Context/UseContext'

const Header = () => {   

    const {darkMode,handleClick}=useContext(contexto)


    return (
        <>
            <div className='Header'>
                <h2>React Hooks</h2>
                <div>
                    <button className='btn' type='button' onClick={handleClick}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
                </div>
            </div>
            <div className="title-section">
                <h2>Rick & Morty</h2>
            </div>
        </>
    )
}

export default Header