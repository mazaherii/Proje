
import "./singlePost.css"
import CartIcon from "./home-7.jpg";
import { Link } from "react-router-dom";
export default function SinglePost() {
	return (
		<section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-grid-system">
                                <div className="row">		
		
									<div className="col-md-1">
										<div className="blog-box">
											<div className="post-media">
												<Link to="" title="">
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
	</div></div></div></div></div></div></section>
	)
}
