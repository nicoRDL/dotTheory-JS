console.log("Got JS");
let getRooms =  new XMLHttpRequest();

getRooms.onreadystatechange = function () {
  if (getRooms.readyState === 4) {
    if(getRooms.status === 200) {
      const rooms = JSON.parse(getRooms.responseText);
      let getRoomStatusHTML = '<ul class = "rooms">';

      for(let i = 0; i < rooms.length; i += 1) {
        if(rooms[i].available) {
          getRoomStatusHTML += '<li class = "empty">';
        } else {
          getRoomStatusHTML += '<li class = "full">';
        }
        getRoomStatusHTML += rooms[i].room;
        getRoomStatusHTML += '</li>';
      }
      getRoomStatusHTML += '</ul>';

      document.getElementById('roomList').innerHTML = getRoomStatusHTML;
    }
  }
};
getRooms.open('GET', 'data/rooms.json');
getRooms.send();

