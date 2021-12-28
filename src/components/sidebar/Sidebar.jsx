import "./sidebar.css"
import { Link } from "react-router-dom";
export default function Sidebar() {
	return (


			<div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">

                            <div className="widget">
                                <h2 className="widget-title">Popüler Postlar</h2>
                                <div className="blog-list-widget">
                                    <div className="list-group">
                                        <Link to="single-post.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="upload/pop-1.jpg" alt="" className="img-fluid float-left" />
                                                <h5 className="mb-1">Robotik Dünyanın Gözde Robotu</h5>
                                                <small>14 Ara, 2021</small>
                                            </div>
                                        </Link>

                                        <Link to="single-post.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 justify-content-between">
                                                <img src="upload/pop-2.jpg" alt="" className="img-fluid float-left" />
                                                <h5 className="mb-1">Proje Yönetimi Nedir?</h5>
                                                <small>14 Ara, 2021</small>
                                            </div>
                                        </Link>

                                        <Link to="single-post.html" className="list-group-item list-group-item-action flex-column align-items-start">
                                            <div className="w-100 last-item justify-content-between">
                                                <img src="upload/pop-3.jpg" alt="" className="img-fluid float-left" />
                                                <h5 className="mb-1">Milestone Nedir?</h5>
                                                <small>14 Ara, 2021</small>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            <div className="widget">
                                <h2 className="widget-title">Bizi Takip Edin:</h2>

                                    <div className="social">
                                    <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></Link>              
                                    <Link to="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></Link>

                                </div>
                            </div>

                        </div>
            </div>
	)
}
