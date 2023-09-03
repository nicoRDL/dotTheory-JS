const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      const s_bar = document.getElementById('sidebar');
      s_bar.innerHTML = xhr.responseText;
    };
  };
};
xhr.open('GET', 'sidebar.html');
xhr.send();
