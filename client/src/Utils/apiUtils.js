export const handleSubmit = async (body) => {
  try {
    const response = await fetch("https://raf-server-production.up.railway.app/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Methods": "*"
      },
      body: JSON.stringify(body)
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      return json;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    alert("There was an error submitting the form. Please try again.");
  }
};
