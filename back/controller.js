module.exports = {
  sayHello: (request, response) => {
    response.status(200).send("Hello!")
  },

  home: (request, response) => {
    response.status(200).send("Home is where this code is.")
  }
}
