import Post from "../post/Post"
import "./posts.css"

export default function Posts() {
	return (
		<div className='posts'>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			<Post/>
			
		<selection className="ortala">
			<div className="col-md-3">
				<nav aria-label="Page navigation">
					<ul className="pagination justify-content-start">
						<li className="page-item"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item">
							<a className="page-link" href="#">Sonraki</a>
						</li>
					</ul>
				</nav>
			</div>
		</selection>
		</div>
	)
}
