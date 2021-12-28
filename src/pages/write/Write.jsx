import "./write.css"

export default function Write() {
	return (
		<div className="col-lg-12 write">
			<div className="writeImg">
			<img src="https://dersaadetcafe.com/cdn/new-post.jpg" className="writeImg" />
			</div>
			<form className="writeForm">
			<div className="writeFormGroup  col-lg-12">
				<label htmlFor="fileInput">
				<i className="writeIcon fas fa-plus"></i>
				</label>
				<input type="file" id="fileInput" style={{display:"none"}} />
				<input type="text" placeholder="Title" className="writeInput" autoFocus={true} />	
			</div>
			<div className="writeFormGroup col-lg-12">
				<textarea placeholder="Yazmaya Basla... " type="text" className="writeInput writeText"></textarea>
			</div>
			<div className="writeFormGroup col-lg-3">
			<button className="gangeri"> Publish </button>
			</div>
			</form>
		</div>
	)
}
