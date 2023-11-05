function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

const http =require("https");
const server =http.createServer((req,res) => {
  res.end("hello from the other side");
});

server.listen(9000,"127.0.0.1" ,() =>{
  console.log("listening to the port no 9000")
}); 