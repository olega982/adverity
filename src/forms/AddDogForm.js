import React, { useState } from 'react'

const AddDogForm = props => {
	const initialFormState = { id: null, breed: '', nick: '', price: '', url: '' }
	const [ dog, setDog ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setDog({ ...dog, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!dog.breed || !dog.nick || !dog.price) return
				props.addDog(dog)
				setDog(initialFormState)
			}}
		>
			<label>Breed</label>
			<input type="text" name="breed" test_id="breed" value={dog.breed} onChange={handleInputChange} />
			<label>Nick</label>
			<input type="text" name="nick" test_id="nick" maxlength="10" value={dog.nick} onChange={handleInputChange} />
			<label>Price</label>
			<input type="number" name="price" test_id="price" value={dog.price} onChange={handleInputChange} />
			<label>Image</label>
			<input type="text" name="url" test_id="image" value={dog.url} onChange={handleInputChange} />
			<button test_id="add">Add</button>
		</form>
	)
}

export default AddDogForm
