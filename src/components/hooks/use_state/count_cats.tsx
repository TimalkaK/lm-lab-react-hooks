import { useState } from 'react';

export function CountCats() {

  const [countCats, setCountCats] = useState<Array<string>>([]);

  const handleClick = () => {
    setCountCats([...countCats, "🐈"]);
  };

  return (
    <>
    <h2>useState</h2>

    <p>{countCats.map(() => {return "🐈"})}</p>

    <button onClick={handleClick}>
      There are {countCats.length} cats 🥳
    </button>
    </>
  );
}