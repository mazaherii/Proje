import { Link } from "react-router-dom";
import "./topbar.css"

export default function TopBar() {
	const user = true;
	return (
		<div className='top'>
			<div className="tech-header header">
            <div className="container-fluid">
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link className="navbar-brand" to="/"><img src="images/main/logo.png" alt="" /></Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">ANASAYFA</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">YAZILIM</Link>
                            </li>                   
                            <li className="nav-item">
                                <Link className="nav-link" to="/">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/write">WRITE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">{user && "LOGOUT"}</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mr-2">
							<li className="nav-item">
                                <Link className="nav-link" to="/">
								{user ? (
									<Link to="/settings">
										<img className="topImg" src="https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg" alt="blog"  />
									</Link>
									) : (
									<ul className="nav-item">
											<li className="nav-link">
											<Link className="nav-link" to="/login">
											LOGIN
											</Link>
											</li>
											<li className="nav-item">
											<Link className="nav-link" to="/register">
											REGISTER
											</Link>
											</li>
									</ul>
									)}
								</Link>
                            </li>
							<li className="nav-item">
                                <Link className="nav-link" href="#"><i className="fa fa-google"></i></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
		</div>
  	);
}
