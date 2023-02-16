import { nanoid } from 'nanoid';
import { useLocalStorage } from './useLocalStorage';

export const useArrayHandler = (key, initialState = []) => {
  const [array, setArray] = useLocalStorage(key, initialState);

  const addNewObject = newObject => {
    const object = { ...newObject, id: nanoid() };
    setArray(prevArray => [...prevArray, object]);
  };

  const deleteObject = id => {
    setArray(prevArray => prevArray.filter(object => object.id !== id));
  };

  const editObject = updatedObject => {
    setArray(prevArray =>
      prevArray.map(object => {
        return object.id !== updatedObject.id ? object : updatedObject;
      })
    );
  };

  return { array, addNewObject, deleteObject, editObject };
};
