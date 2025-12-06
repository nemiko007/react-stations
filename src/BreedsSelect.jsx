// @ts-check

/**
 * @type {(props: { breeds: string[], selectedBreed: string, onBreedChange: (breed: string) => void }) => JSX.Element}
 */
export const BreedsSelect = ({ breeds, selectedBreed, onBreedChange }) => {
  return (
    <select value={selectedBreed} onChange={(e) => onBreedChange(e.target.value)}>
      <option value="">犬種を選択してください</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

export default BreedsSelect
