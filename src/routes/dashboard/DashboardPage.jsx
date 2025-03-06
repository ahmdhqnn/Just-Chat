import './dashboardPage.css'

const DashboardPage = () => {
    return (
        <div className='dashboardPage'>
            <div className='texts'>
                <div className='logo'>
                    <img src='/logo.png' alt='' />
                    <h1>Just Chat</h1>
                </div>
                <div className='options'>
                    <div className='optiom'>
                        <img src='/chat.png' alt='' />
                        <span>Create a New Chat</span>
                    </div>
                    <div className='optiom'>
                        <img src='/image.png' alt='' />
                        <span>Analize Images</span>
                    </div>
                    <div className='optiom'>
                        <img src='/code.png' alt='' />
                        <span>Help me with my Code</span>
                    </div>
                </div>
            </div>
            <div className='formContainer'>
                <form>
                    <input type='text' placeholder='Ask me anything...'/>
                    <button>
                        <img src='/arrow.png' alt='' />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DashboardPage