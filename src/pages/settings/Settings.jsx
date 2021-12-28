import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
	return (
		<div className="settings col-lg-9">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<h4>Update Your Account</h4>
					<span className="dangeri">Delete Account</span>

				</div>
				<form className="settingsForm">
					<label> Profile Picture</label>
					<div className="settingsPP">
						<img src="https://static.toiimg.com/thumb/resizemode-4,msid-76729536,width-1200,height-900/76729536.jpg" alt=""/>
						<label htmlFor="fileInput">
						<i className="settingsPPIcon far fa-user-circle"></i>
						</label>

						<input type="file" id="fileInput" style={{display: "none"}} />
					
					</div>

					<label >Username</label>
					<input type="text" placeholder="Group G"/>
					<label>Email</label>
					<input type="email" placeholder="GroupG@gmail.com" />
					<label >Password</label>
					<input type="password" palceholder="****"/>
					<button className="gangeri">Update</button>
				</form>
					
			</div>
			<Sidebar/>
		
		</div>
	)
}
