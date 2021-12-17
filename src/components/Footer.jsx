import React from "react";
import { Col, Row } from "react-bootstrap";
import "./styles/Footer.css";

export default function Footer() {

	return (

		<footer>
		<Row className="footer-row">
		<Col xs="auto">
			<h6>Quick Links:</h6>
			<li><a href="https://www.shieldcrest.co.uk/about/">About ShieldCrest</a></li>
			<li><a href="https://www.shieldcrest.co.uk/enquiry-form/">Submit your manuscript</a></li>
			<li><a href="https://www.shieldcrest.co.uk/my-account/">My account</a></li>
			<li><a href="https://www.shieldcrest.co.uk/shop/">Bookshop</a></li>
		</Col>
		<Col xs="auto">
		  <h6>Site Policies:</h6>
			<li><a href="https://www.shieldcrest.co.uk/about/our-data-protection-policy-gdpr/">Data Protection & Privacy Policy</a></li>
			<li><a href="https://www.shieldcrest.co.uk/publishing/terms-conditions/">Terms & Conditions</a></li>
			<li><a href="https://www.shieldcrest.co.uk/cookie-policy/">Cookie Policy</a></li>
		</Col>
		<Col xs="auto">

			<h6>Contact Us:</h6>
			<li><a href="https://www.shieldcrest.co.uk/contact-us/">Contact Form</a></li>
			<li><a href="https://www.shieldcrest.co.uk/enquiry-form/">Enquiry Form</a></li>
			<hr />
			<b>Tel: 0333 8000 890</b>

			<div id="address">
			<b>Address:</b>
			<p>ShieldCrest Publishing</p>
			<p>The Hawthorns,</p>
			<p>Cemetery Road,</p>
			<p>Bicker,</p>
			<p>Boston,</p>
			<p>Lincolnshire</p>
			<p>PE30 3BT</p>
			</div>

		</Col>

		</Row>
		</footer>
	)
}
