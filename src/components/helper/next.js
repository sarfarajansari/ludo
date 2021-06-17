const nextTurn = (colorId) => {
  if (colorId >= 3) {
    return 0;
  } else {
    return colorId + 1;
  }
};
const nextPlayer = (colorId, playerList) => {
  if (playerList.includes(nextTurn(colorId))) {
    return nextTurn(colorId);
  }
  return nextPlayer(nextTurn(colorId), playerList);
};

export default nextPlayer;
