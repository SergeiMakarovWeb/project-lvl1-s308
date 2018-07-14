const getRandomNum = (min = 1, max = 100) => {
  const random = Math.floor(Math.random() * ((max - min) + 1)) + min;
  return random;
};

export default getRandomNum;
