const { Client } = require("@notionhq/client");
exports.handler = async function (event) {
    const form = JSON.parse(event.body).payload.data;
    const notion = new Client({ auth: "secret_GKrDwBeqQrVkc85joZPwl6CG1s1usCAixKmB2O3TMZK" });
    try {
      const new_row = {
        parent: {
          database_id: "aad17cb22b894772af4364dafc4b2444?v=9cf26403319449199bfff37c0d99a3ec",
        },
        properties: {
          Email: {
            email: form.email
          },
          Date: {
            content: Date.now(),
          },
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