import React from "react"
import { Button } from "react-bootstrap"

const LogoutBtn = ({ logoutHandler }) => (
	<Button variant="primary" onClick={logoutHandler}>
		Log Out
	</Button>
)

export default LogoutBtn
