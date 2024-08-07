import React, { useEffect } from "react";
import {
  AddTagFormFieldType,
  ITagNode,
} from "../../../domain/category-context";
import { FormProps, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useAddTagMutation } from "../../../services/categorySlice";

export default function useAddTagNodeModal(
  isOpen: boolean,
  onSuccess: () => void
) {
  const [newTagForm] = useForm();
  const [addTag, addTagResult] = useAddTagMutation();

  const handleAddTag = async (newTagName: string) => {
    const response = await addTag({ name: newTagName });

    console.warn(response);

    if ("data" in response) {
      onSuccess();
    }
  };

  useEffect(() => {
    if (isOpen === true) newTagForm.resetFields();
  }, [isOpen]);

  const onFinish: FormProps<AddTagFormFieldType>["onFinish"] = async (
    values
  ) => {
    console.log(values);
    handleAddTag(values?.tagName);
  };
  const onFinishFailed: FormProps<AddTagFormFieldType>["onFinishFailed"] = (
    errorInfo
  ): void => {
    console.log("Failed:", errorInfo);
  };

  return { newTagForm, onFinish, onFinishFailed };
}
