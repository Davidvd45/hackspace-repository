function randombg(){
  var random = Math.floor(Math.random() * 9);
  var imgarray = ["url('https://image.ibb.co/izSNHm/dragon1.png')",
                 "url('https://image.ibb.co/fEZrA6/dragon2.jpg')",
                 "url('https://image.ibb.co/gE3Jq6/dragon3.jpg')",
                 "url('https://image.ibb.co/cpYwcm/dragon4.jpg')",
                 "url('https://image.ibb.co/mZHiOR/dragon5.png')",
                 "url('https://image.ibb.co/kYnNHm/dragon6.jpg')",
                 "url('https://image.ibb.co/eBvL3R/dragon7.jpg')",
                 "url('https://image.ibb.co/hHxNHm/dragon8.jpg')",
                 "url('https://image.ibb.co/i8BVYR/smalldragon.png')"];
  document.getElementById("random").style.backgroundImage=imgarray[random];
}