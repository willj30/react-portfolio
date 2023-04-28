import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div id="home" className="intro route bg-image background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />
            <div className="App">
                <Sidebar />
                <div className="page">
                    <span className="tags top-tags"></span>

                    <Outlet />

                    <span className="tags bottom-tags">
                        <br />
                        <span className="bottom-tag-html"></span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Layout
