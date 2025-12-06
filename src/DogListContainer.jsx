// @ts-check
import { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('reizeiin')
  const [dogImages, setDogImages] = useState([])

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const data = await response.json()
        const breedsList = Object.keys(data.message)
        setBreeds(breedsList)
      } catch (error) {
        console.error('犬種一覧の取得に失敗しました:', error)
      }
    }

    fetchBreeds()
  }, [])

  const handleBreedChange = (breed) => {
    setSelectedBreed(breed)
  }

  const handleShowImages = async () => {
    if (!selectedBreed) {
      alert('犬種を選択してください')
      return
    }

    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      const data = await response.json()
      setDogImages(data.message)
    } catch (error) {
      console.error('犬の画像取得に失敗しました:', error)
    }
  }

  return (
    <div>
      <h2>犬種一覧</h2>
      <p>取得した犬種: {breeds.length}種</p>
      <div>
        <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={handleBreedChange} />
        <button onClick={handleShowImages}>表示</button>
      </div>
      <div className="dog-images-grid">
        {dogImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`${selectedBreed}の画像${index + 1}`} />
        ))}
      </div>
    </div>
  )
}

export default DogListContainer
