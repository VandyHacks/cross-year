const { Client } = require("@notionhq/client");
exports.handler = async function (event) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    const form = JSON.parse(event.body).payload.data;
    const notion = new Client({ auth: "secret_GKrDwBeqQrVkc85joZPwl6CG1s1usCAixKmB2O3TMZK" }); //Replace this with integration secret token
    try {
      const new_row = {
        parent: {
          database_id: "aad17cb22b894772af4364dafc4b2444", //Replace this with the database id (found in url of notion page)
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
                      content: today
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