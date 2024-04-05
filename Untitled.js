var unminified = false
if(typeof ModAPI.mcinstance.$currentScreen !== 'undefined'){
  alert("you are using a unminified version of eaglerforge!")
  unminified = true
} else {
  alert("you are using a minified version of eaglerforge!")
  unminified = false
}