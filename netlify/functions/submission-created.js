const { Client } = require("@notionhq/client");
exports.handler = async function (event) {
    const form = JSON.parse(event.body).payload.data;
    const notion = new Client({ auth: "secret_GKrDwBeqQrVkc85joZPwl6CG1s1usCAixKmB2O3TMZK" }); //Replace this with integration secret token
    try {
      const new_row = {
        parent: {
          database_id: "9cf26403319449199bfff37c0d99a3ec", //Replace this with the database id (found in url of notion page)
        },
        properties: {
            Email: {
                title: [
                  {
                    text: {
                      content: form.email
                    },
                  },
                ],
              },
              Date: {
                rich_text: [
                  {
                    text: {
                      content: Date.now()
                    },
                  },
                ],
              }
        },
      };
      await notion.pages.create(new_row);
    } catch {
      console.log(error);
    }
    return {
      statusCode: 200,
    };
  };