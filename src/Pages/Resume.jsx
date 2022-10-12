import React from "react"
import {Document,Page,pdfjs} from "react-pdf"
import resume from "../asserts/KiranKumar_Resume.pdf"

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const Resume=(props)=>{
    const {} = props;
    return(
        <div>
            <Document file={resume}>
                <Page pageNumber={1} scale={0.5}/>
            </Document>
        </div>
    )
}