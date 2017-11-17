var countries = [
   "Chile", "Cuba", "Greenland", "Iraq",
   "Africa", "Brazil", "India"
]
countries.push("China")
countries.splice(4,0, "Iran")
countries.splice(7,1)
countries.reverse()
countries.splice(5,1)
countries.splice(5,0, "Argentina")
countries.push("Hawai")
countries.reverse()
countries.unshift("Barcelona")
console.log(countries)