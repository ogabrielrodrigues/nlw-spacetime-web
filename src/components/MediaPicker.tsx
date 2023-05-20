'use client'

import { ChangeEvent, useState } from 'react'

export default function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        type="file"
        id="media"
        name="coverUrl"
        onChange={onFileSelected}
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {/* eslint-disable-next-line */}
      {preview && <img src={preview} alt="" className="aspect-video w-full rounded-lg object-cover" />}
    </>
  )
}
