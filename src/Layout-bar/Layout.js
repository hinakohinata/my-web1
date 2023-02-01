import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        
            <div class="container " height="100%">
                <nav class="navbar navbar-expand-sm  bg-info text-white">

                    <ul class="navbar-nav bg-info text-white">
                        <li class="nav-item">
                            <Link to="/"class="nav-link text-white" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/cv"class="nav-link text-white" >CV</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/layout"class="nav-link text-white" >Layout</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/class"class="nav-link text-white" >Class</Link>
                        </li>
                    </ul>

                </nav>

                <Outlet />
            </div>

        
    )
};

export default Layout;