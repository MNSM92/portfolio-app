import React from 'react'
import {Link} from 'react-router-dom'
export default function HomePage () {
    return (
	<div>
		<Link to='/WebView'><div>WebView</div></Link>
		<Link to='/Frame1'><div>Frame1</div></Link>
	</div>
	)
}