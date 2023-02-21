import React, { useRef, useState } from 'react'

import Avatar from 'react-avatar-edit'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassMinus, faMagnifyingGlassPlus, faRotateRight } from '@fortawesome/free-solid-svg-icons';




export default function ImageModal(props) {
    const { ShowModal, setShowModal, image, setimage, imageBorder ,CropedImg, setCropedImg} = props
    const [ImageCrop, setImageCrop] = useState(false)
    const cropperRef = useRef(null);
    const handleClick = () => {
      const imageElement = cropperRef?.current;
      const cropper = imageElement?.cropper;
      const img = cropper.getCroppedCanvas().toDataURL();
      setimage(img);
      setShowModal(false)
    };
    const rotateRight = () => {
      const imageElement = cropperRef?.current;
      const cropper = imageElement?.cropper;
      cropper.rotate(90);
    };
    const ZoomIn = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        cropper.zoom(0.1);
      };
      const ZoomOut = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        cropper.zoom(-0.1);
      };
  
    const onCrop = (view) => {
        setImageCrop(view)

    }
    const onclose = () => {
        setImageCrop(null)
    }

    const saveImage = () => {
        setimage(ImageCrop)
    }


    return (
        ShowModal ?
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-[auto] my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-xl font-semibold">
                                    Upload Photo
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative w-full w-[600px] h-[600px] p-6 flex-auto">
                                
                               
                               <div className='flex space-x-5 mb-3 items-center'>
                                <button onClick={ZoomIn}> <FontAwesomeIcon className=' space-y-8 text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2' icon={faMagnifyingGlassPlus}></FontAwesomeIcon> </button>
                                <button onClick={ZoomOut}> <FontAwesomeIcon className=' space-y-8 text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2' icon={faMagnifyingGlassMinus}></FontAwesomeIcon></button>
                                <button onClick={rotateRight}><FontAwesomeIcon className=' space-y-8 text-[#A8B0B9] text-lg cursor-pointer hover:text-primary2' icon={faRotateRight}></FontAwesomeIcon></button>
                                </div>
                                <Cropper
        src={CropedImg}
        style={{ width: "100%" , height:'500px'}}
        // Cropper.js options
        initialAspectRatio={4 / 4}
        guides={false}
        ref={cropperRef}
      />
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-balck active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={handleClick}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </> : null
    )
}
