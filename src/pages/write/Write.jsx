import "./write.css"

export default function Write() {
	return (
		<div className="col-lg-12 write">
			<div className="col-lg-12">
			<img src="https://images.unsplash.com/photo-1585435465945-bef5a93f8849?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="writeImg" />
			</div>
			<form className="writeForm">
			<div className="writeFormGroup  col-lg-9">
				<label htmlFor="fileInput">
				<i className="writeIcon fas fa-plus"></i>
				</label>
				<input type="file" id="fileInput" style={{display:"none"}} />
				<input type="text" placeholder="Title" className="writeInput" autoFocus={true} />	
			</div>
			<div className="writeFormGroup col-lg-9">
				<textarea placeholder="Yazmaya Basla... " type="text" className="writeInput writeText"></textarea>
			</div>
			<div className="writeFormGroup col-lg-3">
			<button className="btn btn-primary"> Publish </button>
			</div>
			</form>
		</div>
	)
}
