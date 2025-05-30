import { Sidebar } from "@/components/sidebar"
import Editor from "@/components/Editor"
import PDFViewer from "@/components/pdf/PDFViewer.tsx"

export default function MainPage() {
    return (
        <div className="bg-paper-yellow flex h-screen flex-row justify-between">
            <Sidebar />
            <Editor />
            <PDFViewer />
        </div>
    )
}
