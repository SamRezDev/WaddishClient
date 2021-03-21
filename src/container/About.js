import React from 'react';
import './About.css';
import twitter from '../icons/twitter.svg';
export default function About() {
	return (
		<div className="About">
			How does it work?
			<ul>
				<li> ADD YOUR FAVOURITE RECIPES </li>
				<li> CHECK THE HOMEPAGE </li>
				<li> CLICK TO GENERATE A RANDOM RECIPE FROM YOUR LIST </li>
				<li> GET RECOMMENDED A FRESH RECIPE </li>
				<li> You can choose to "forget" a suggested recipe for a set amount of days </li>
			</ul>
			<div className="Footer">
				{' '}
				<a href="https://twitter.com/SaRez_wd" target="_blank" rel="noreferrer">
					{' '}
					Made by SamRez <img src={twitter} alt="twitter icon" />{' '}
				</a>{' '}
			</div>
		</div>
	);
}
