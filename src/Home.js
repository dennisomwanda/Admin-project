// Filename - App.js 

import React, { useState } from "react";
import './Home.css'
function Home () { 
	const [value, setValue] = useState(""); 
	const [result, setResult] = useState(""); 
	function handleSubmit(e) { 
		e.preventDefault(); 
		setResult( 
			"Submitted successful with Input: " + 
				value 
		); 
	} 

	function handleChange(e) { 
		setValue(e.target.value); 
		setResult(""); 
	} 
	return ( 
		<div 
			style={{ textAlign: "center", margin: "auto" }} 
		> 
			<h1 style={{ color: "Green" }}> 
				Welcome to your space 
			</h1> 
			<h3> 
				Select the respective service 
			</h3> 
			<form onSubmit={handleSubmit}> 
				<label> </label> 
				<select 
					value={value} 
					onChange={handleChange} 
				> 
					<option value={"SERVICE 1"}>SERVICE 1</option> 
					<option value={"SERVICE 2"}>SERVICE 2</option> 
					<option value={"SERVICE 3"}>SERVICE 3</option> 
                    <option value={"SERVICE 4"}>SERVICE 4</option> 
				</select> 
				<br /> 
				<br /> 
				<button type="submit">Submit</button> 
			</form> 
			<br /> 
			<div> 
				<h4>{result}</h4> 
			</div> 
		</div> 
	); 
}  

export default Home;
