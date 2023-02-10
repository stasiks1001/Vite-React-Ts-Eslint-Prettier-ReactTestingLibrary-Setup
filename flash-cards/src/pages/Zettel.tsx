import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Zettel {
  id: number;
  title: string;
  description: string;
}

const zettel: Zettel = { id: 1, title: 'Zombie', description: 'cranberries' };

// const getZettel = (id: number): Promise<Zettel> => {
//   return Promise.resolve(zettel);
// };

const getZettel = (id: number|undefined): Promise<Zettel> => {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    // console.log(randomNumber);
    if (randomNumber > 0.3) {
      resolve(zettel);
    } else {
      reject(new Error('verboten'));
    }
  });
};
function Zettel() {
  const [isLoading, setIsLoading] = useState(false);
  const [zettel, setZettel] = useState<Zettel | null>(null);
  const { id } = useParams();

  const onClick = () => {
    setIsLoading(!isLoading);
  };
  async function getData(zettelid: number | undefined) {
    try {
      setIsLoading(true);
      const result = await getZettel(zettelid);
      setZettel(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    getData(+id);
  }, [id]);
  
  return (
    <div>
      <button type="button" onClick={onClick}>
        Click me!
      </button>
      {isLoading ? <>we are loading..</> : null}
      {zettel ? zettel.title : null}
    </div>
  );
}

export default Zettel;
