import { Link } from 'react-router-dom'
import './homePage.css'

const HomePage = () => {
    return (
        <div className='homePage'>
            <img src='/' alt='' className='orbital'/>
            <div className='left'>
                <h1>Just Chat</h1>
                <h2>Supercharge your craativity and productivity</h2>
                <h3>lorem ipsum dolor sit amet conaaf dafagrgs gsewgsgs sggsgsg, sfsg gsgsgsewtwgcw twtw.</h3>
                <Link to='/dashboard'>Get Started</Link>
            </div>
            <div className='right'>
                <div className='imgContainer'>
                    <div className='bgContainer'>
                        <div className='bg'>
                        </div>
                        <img src='/bot.png' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage