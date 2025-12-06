// @ts-check

/**
 * @type {(props: { imageUrl: string }) => JSX.Element}
 */
export const DogImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="犬の画像" />
}

export default DogImage
