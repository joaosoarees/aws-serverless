class Handler {
  async main() {
    try {
      return {
        statusCode: 200,
        body: 'Hello'
      }
    }
    catch (error) {
      return {
        statusCode: 500,
        body: 'Internal error'
      }
    }
  }
}

// factory
const handler = new Handler()
module.exports = handler.main.bind(handler)