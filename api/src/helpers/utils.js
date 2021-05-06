function checkUuid(uuid) {
  const uuidSplit = uuid.split("-");
  return uuid.length === 36 && uuidSplit.length === 5;
}

module.exports = {
  checkUuid,
};
