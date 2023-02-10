import icon1 from '../../utils/assets/icon1.svg'
import icon2 from '../../utils/assets/icon2.svg'
import icon3 from '../../utils/assets/icon3.svg'
import icon4 from '../../utils/assets/icon4.svg'
import copyright from '../../utils/assets/copyright.svg'
import '../../utils/style/lateralBar.css'


function LateralBar (lateralBar) {
  
    return (

    <div key={lateralBar} className='lateralBar_container'>

        <div className='icon_container'>
        
        <img src={icon1} alt='icon yoga' className='icon' />

        <img src={icon2} alt='icon watersports' className='icon' />

        <img src={icon3} alt='icone cycling' className='icon' />

        <img src={icon4} alt='icone bodybuilding' className='icon' />

        </div>

        <img src={copyright} alt='copyright Sportsee' className='copyright' />

    </div>

    )

}

export default LateralBar