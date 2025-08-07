"use server";

import { convertFormData } from "./convertFormData";

import { redirect } from "next/navigation";

export const postData = async (_: unknown, formData: FormData) => {
  const formDataObj = Object.fromEntries(formData);

  console.log(convertFormData(formDataObj));

  redirect("/resultaat");
};
