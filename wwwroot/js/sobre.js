//Função dos botões de missão, visão e valores.
function toggleContent(id) {
  var content = document.getElementById(id);

  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
