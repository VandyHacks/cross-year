const { Client } = require('@notionhq/client');
exports.handler = async function (event) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  const form = JSON.parse(event.body).payload.data;
  const notion = new Client({
    auth: 'secret_QadiDv4dxiNN1LyLieHLUS3iZkBaC6ELEBpI74wJrg3',
  }); //Replace this with integration secret token
  try {
    const new_row = {
      parent: {
        database_id: '7be99c45f6604dd2ad71a77829341c97', //Replace this with the database id (found in url of notion page)
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: form.email,
              },
            },
          ],
        },
        Date: {
          rich_text: [
            {
              text: {
                content: today,
              },
            },
          ],
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
