export const handleSubmit = async (body) => {
  try {
    const response = await fetch("http://157.230.22.122:8888/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
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
