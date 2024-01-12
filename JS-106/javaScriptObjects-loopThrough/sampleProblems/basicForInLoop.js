const composer = {
  name: 'Edward Ellington',
  nickname: 'Duke',
  genres: ['jazz', 'swing'],
  instrument: 'piano'
};

for (let prop in composer) {
  console.log(`${prop}: ${composer[prop]}`);
};
