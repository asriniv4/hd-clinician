exports.handler = async function (event, context) {
  const { identity, user } = context.clientContext;
  console.log('identity-login!')
  console.log(identity);
  console.log(user);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // TODO: Tighten security here
    },
    body: JSON.stringify({ message: 'success' }),   
  }
}