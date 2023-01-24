exports.handler = async function (event, context) {
  console.log('identity-login!');
  const { identity, user } = context.clientContext;
  console.log(identity);
  console.log(user);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // TODO: Tighten security here
    },
    body: JSON.stringify({ message: 'success' }),   
  };
}