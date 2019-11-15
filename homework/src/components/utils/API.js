module.exports = {
  findAll: async function(req, res) {
    if(req === "") {
      req="iphone";
    }
    console.log(req)    
    return "hello" 
    
  }
}

    