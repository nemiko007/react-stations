// @ts-check
import { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg')

  const handleUpdate = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await response.json()
      setDogUrl(data.message)
    } catch (error) {
      console.error('犬の画像取得に失敗しました:', error)
    }
  }

  return (
    <div className="dog-image-container">
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={handleUpdate}>更新</button>
    </div>
  )
}

export default Description
