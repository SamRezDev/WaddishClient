import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContainerRecipe.css';
export default function ContainerRecipe(props) {
	const [ randomDish, setrandomDish ] = useState('');
	const [ randomValue, setrandomValue ] = useState(0);
	const [ Recipe, setRecipe ] = useState();
	const [ ForgottenDays, setForgottenDays ] = useState(1);
	const [ Fresh, setFresh ] = useState(true);
	const [ FreshDisplay, setFreshDisplay ] = useState(false);

	const UserID = props.id;
	useEffect(
		() => {
			axios
				.get('https://waddish-back.herokuapp.com/Recipe/' + UserID)
				.then((response) => {
					setRecipe(response.data);
				
				})
				.catch((error) => {
					
				});
		},
		[ Recipe ]
	);

	useEffect(
		() => {
			let CurrentDate = new Date(Date.now());
			if (compareTime(randomDish.ForgetUntilDate, CurrentDate)) {
				setFresh(false);
			} else {
				setFresh(true);
			}
		},
		[ Fresh, randomDish.ForgetUntilDate ]
	);

	

	function compareTime(time1, time2) {
		return new Date(time1) >= new Date(time2); // true if time1 is later
	}

	const newDish = () => {
		{
			setFreshDisplay(true);
			if (Recipe) {
				let value = Math.floor(Math.random() * Recipe.length);
				while (randomValue === value) {
					value = Math.floor(Math.random() * Recipe.length);
				}
				setrandomValue(value);

				setrandomDish(Recipe[randomValue]);
			

			
			
				let today = new Date('02-09-2021');
			} else {
			
			}
		}
	};

	const forgetDish = (e) => {
		let d = new Date(randomDish.ForgetUntilDate);
		let current = new Date();

		d.setDate(current.getDate() + ForgottenDays);

		const RecipeUpdated = {
			ForgetUntilDate: d
		};
		axios
			.post('https://waddish-back.herokuapp.com/Recipe/update/' + randomDish._id, RecipeUpdated)
			.then(setRecipe(Recipe))
			.catch();
	};

	function countProperties (obj) {
		var count = 0;
	
		for (var property in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, property)) {
				count++;
			}
		}
	
		return count;
	}
	return (
		<div style={{ marginTop: '50px' }}>
			{
				<div
					className="ContainerRecipe"
					style={
						Fresh ? (
							{ backgroundColor: 'green', color: 'white' }
						) : (
							{ backgroundColor: 'red', color: 'black' }
						)
					}
				>
					<div className="TitleRecipe">{randomDish.Title}</div>
					<div className="Description">{randomDish.Description}</div>
					<div className="Waddishornot" style={FreshDisplay ? { display: 'block' } : { display: 'none' }}>
						{' '}
						{Fresh ? ' GO AHEAD' : 'you should try something else'}{' '}
					</div>
				</div>
			}
			
		{countProperties(Recipe) >1 ? <button className="ReCheck" onClick={newDish} >
				WADDISH ?
			</button>
			
			
			: <button className="ReCheckRecipe"  >
				ADD A DISH FIRST 
			</button>	}
			<div className="ForgetCont">
				<button className="Forget" onClick={forgetDish}>
					Forget about this for..
				</button>
				<div className="ForgetDays">
					<button
						style={ForgottenDays === 1 ? { color: 'red' } : { color: 'white' }}
						onClick={() => setForgottenDays(1)}
					>
						1 day{' '}
					</button>
					<button
						style={ForgottenDays === 3 ? { color: 'red' } : { color: 'white' }}
						onClick={() => setForgottenDays(3)}
					>
						3 days{' '}
					</button>
					<button
						style={ForgottenDays === 5 ? { color: 'red' } : { color: 'white' }}
						onClick={() => setForgottenDays(5)}
					>
						5 days{' '}
					</button>
				</div>
			</div>
		</div>
	);
}
