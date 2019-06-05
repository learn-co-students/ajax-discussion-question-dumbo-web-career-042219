const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?




document.addEventListener("DOMContentLoaded", () => {
	const ourSpecialLittleButton = document.querySelector("button")
	ourSpecialLittleButton.addEventListener("click", function () {
	function fetchData(){
	        var data = fetch('https://randomuser.me/api/')
	          .then( res => res.json() )
	          .then( console.log )
	}
 
fetchData()
})

  console.log("CONTENT LOADED!");
});
