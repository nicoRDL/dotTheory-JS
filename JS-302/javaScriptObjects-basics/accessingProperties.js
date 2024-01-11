const player1 = {
  name: 'Ashley',
  color: 'purple',
  isTurn: true,
  play: function(){
      if (this.isTurn) {
        return(`${this['name']} is now playing!`);
      };
  }
}
