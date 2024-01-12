const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    if(xhr.status === 200) {
      const sidebar = document.getElementById('sidebar');
      sidebar.innerHTML = xhr.responseText;
    };
  };
};
xhr.open('GET', 'sidebar.html');
xhr.send();
