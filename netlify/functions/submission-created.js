const {Client} = require("@notionhq/client")
const form = JSON.parse(event.body).payload.data

exports.handler = async function (event) {
    const notion = new Client({ auth: "secret_GKrDwBeqQrVkc85joZPwl6CG1s1usCAixKmB2O3TMZK" });
    const form = JSON.parse(event.body).payload.data

      const new_row = {
        // Parent information
        properties: {
              Email: {
                    text: {
                      content: form.email,
              },
              Date: {
                date: Date.now(),
              },
          },
          parent: {
            database_id: "aad17cb22b894772af4364dafc4b2444?v=9cf26403319449199bfff37c0d99a3ec",
          }
        }
    }
    return {
      statusCode: 200
    }
  }