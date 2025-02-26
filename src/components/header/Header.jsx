import "./header.css";
export default function Header() {
  return (
    <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="widget">
                            <div className="footer-text text-left">
                                <a href="index.html"><img src="images/main/footer-logo.png" alt="" className="img-fluid" /></a>
                                <p>YTU BLog, Bilişim dünyası hakkında bilgilendirici yazıların yayınlandığı bağımsız bir kuruluştur.</p>
                                <div className="social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>              
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="widget">
                            <h2 className="widget-title">Kategoriler</h2>
                            <div className="link-widget">
                                <ul>
                                    <li><a href="#">Yazılım <span>(21)</span></a></li>
                                    <li><a href="#">Teknoloji <span>(15)</span></a></li>
                                    <li><a href="#">Gündem <span>(31)</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <br/>
                        <div className="copyright">&copy; YTU Blog Team</div>
                    </div>
                </div>
            </div>
        </footer>
    
  );
}