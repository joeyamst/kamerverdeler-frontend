"use server";

export const postData = async (_: unknown, formData: FormData) => {
  const formDataObj = Object.fromEntries(formData);

  console.log(formDataObj);
};
