export const handleSubmit = async (body) => {
  try {
    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      alert("Successfully Submmited!");
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    alert("There was an error submitting the form. Please try again.");
  }
};
