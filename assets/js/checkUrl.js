$(document).ready(function(){
  $("a[href^='http']:not([href^='https://terminalroot.com/'])").attr("target","_blank");
  $("a[href^='http']:not([href^='https://terminalroot.com/'])").attr("rel","noopener noreferrer");
});
