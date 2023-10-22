import React, { useState } from 'react'


const MeditationForm = () => {
    const [meditationType, setMeditationType] = useState('')

  return (
		<form>
			<label htmlFor='type'>Where Would You Like to Meditate?:
                <select
                    name='type'
                    id='type'
                    value={meditationType}
                    onChange={event => {
                        setMeditationType(event.target.value);
                    }}
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
                    placeholder='5'
				/>
			</label>
		</form>
	);
}

export default MeditationForm