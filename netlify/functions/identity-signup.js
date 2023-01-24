exports.handler = async function (event, context) {
  console.log('identity-signup!')
  console.log(event);
  console.log(context);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // TODO: Tighten security here
    },
    body: JSON.stringify({ message: 'success' }),   
  }
}