exports.handler = async function (event) {
  const formData = JSON.parse(event.body);
  console.log(formData);

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: "Thank you for contacting us!",
    }),
  };
};
