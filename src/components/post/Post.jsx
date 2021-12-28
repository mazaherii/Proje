import "./post.css"
import { Link } from "react-router-dom";
import CartIcon from "./home-7.jpg";
export default function Post() {
	return (
					<selection className="container col-lg-6">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row">		
		
									<div className="col-md-12">
										<div className="blog-box">
											<div className="post-media">
												<Link to="/">
													<img src={CartIcon} className="img-fluid" />
													<div className="hovereffect">
														<span></span>
													</div>
												</Link>
											</div>
											<div className="blog-meta big-meta">
												<h4><Link to="" title="">Galaksimizi Dolaşmak Mümkün Mu?</Link></h4>
												<p>Son bilgilere göre galaksimizi dolaşabilmek için gerekenler</p>
												<small><Link to="" title="">14 Ara, 2021</Link></small>
												<small><Link to="" title="">YTUBlog Tarafından</Link></small>
												<small><Link to="" title=""><i className="fa fa-eye"></i> 2887</Link></small>
											</div>
										</div>
									</div>
	</div></div></selection>
	)
}
