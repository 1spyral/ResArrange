import { Document, Page, pdfjs } from "react-pdf"

import "react-pdf/dist/Page/TextLayer.css"
import "react-pdf/dist/Page/AnnotationLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString()

export default function PDFViewer() {
    return (
        <div className="bg-dark-background h-full flex-1 overflow-auto p-[10px_10px_0_10px]">
            <Document file="sample.pdf">
                <Page pageNumber={1} />
            </Document>
        </div>
    )
}
