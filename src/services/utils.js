export const getRandomRgbColor = () => {
  const red = Math.floor((Math.random() * 256) / 1.2);
  const green = Math.floor((Math.random() * 256) / 1.2);
  const blue = Math.floor((Math.random() * 256) / 1.2);

  return `rgb(${red}, ${green}, ${blue})`;
};
