import { Link } from 'react-router-dom'
import './ChatList.css'

const ChatList = () => {
    return (
        <div className='chatList'>
            <span className='title'>DASHBOARD</span>
            <Link to="/dashboard">Create a new chat</Link>
            <Link to="/">Explore Just Chat</Link>
            <Link to="/">Contact</Link>
            <hr />
            <span className='title'>RECENT CHATS</span>
            <div className='List'>
                <Link to="/">Chat 1</Link>
                <Link to="/">Chat 2</Link>
                <Link to="/">Chat 3</Link>
                <Link to="/">Chat 4</Link>
                <Link to="/">Chat 5</Link>
            </div>
            <hr />
            <div className='upgrade'>
                <img src='/logo.png' alt='' />
                <div className='texts'>
                    <span>Upgrade to premium</span>
                    <span>Unlock more features</span>
                </div>
            </div>
        </div>
    );
};

export default ChatList