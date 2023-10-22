import React, { useContext } from 'react'
import { MedtationOptionsContext } from './MeditationMenu';



const MeditationForm = () => {

    const { meditationType , handleFormInputs, time} = useContext(MedtationOptionsContext)
   
			return (
				<form>
					<label htmlFor='type'>
						Where Would You Like to Meditate?:
						<select
							name='type'
							id='type'
							value={meditationType}
							onChange={handleFormInputs}
						>
							<option value='ocean'>ocean</option>
							<option value='thunder'>thunder</option>
							<option value='forest'>forest</option>
						</select>
					</label>

					<label htmlFor='duration'>
						Meditation Minutes:
						<input
							type='number'
							name='duration'
							id='duration'
							min='5'
							max='30'
							step='5'
                            value={time}
							onChange={handleFormInputs}
						/>
					</label>
				</form>
			);
};

export default MeditationForm