import { PropsWithChildren, useState } from "react"
import { IImageUpload, ImageUploadStyleType } from "./ImageUpload.types.ts"
import "./ImageUpload.style.scss"
import { PlusOutlined } from "@ant-design/icons"
import { Image, Upload } from "antd"
import type { GetProp, UploadFile, UploadProps } from "antd"

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0]

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })

export default function ImageUpload({ children = "text", styleType = ImageUploadStyleType.PRIMARY, ...props }: PropsWithChildren<IImageUpload>) {
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState("")
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType)
    }

    setPreviewImage(file.url || (file.preview as string))
    setPreviewOpen(true)
  }

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => setFileList(newFileList)

  const uploadButton = (
    <button style={{ border: 0, background: "none", color: "white" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8, color: "white" }}>Upload</div>
    </button>
  )

  return (
    <>
      <Upload fileList={fileList} onPreview={handlePreview} onChange={handleChange} className={`image-upload image-upload--${styleType}`} {...props}>
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  )
}
