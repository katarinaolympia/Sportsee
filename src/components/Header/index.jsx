import Logo from '../../utils/assets/logo.svg'
import '../../utils/style/header.css'

function Header(header) {

    return (

        <div key={header} className='header_container'>

            <img src={Logo} alt='logo' className='logo' />

            <nav className='nav_container'>

                    <ul className='nav'>Accueil</ul>
                    <ul className='nav'>Profil</ul>
                    <ul className='nav'>Réglage</ul>
                    <ul className='nav'>Communauté</ul>

            </nav>

        </div>
    )

}

export default Header