import React from 'react'
import { createFileEncoderStream, CAREncoderStream } from 'ipfs-car'
const HandleUpload = async () => {

    const file = new Blob(['Hello priyanshu'])
    let rootCID

    await createFileEncoderStream(file)
        .pipeThrough(new TransformStream({
            transform(block, controller) {
                rootCID = block.cid
                controller.enqueue(block)
            }
        }))
        .pipeThrough(new CAREncoderStream())
        .pipeTo(new WritableStream())

    console.log(rootCID.toString())
}
const UploadFile = () => {
    return (
        <div>
            <button type="button" onClick={HandleUpload} className='btn btn-primary'>Upload File</button>
        </div>
    )
}

export default UploadFile
