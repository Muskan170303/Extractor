"use client";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { upload } from "@/lib/upl" 
import Link from "next/link"

import { writeFile } from 'fs/promises'
import { join } from 'path'
import { ss } from "@/scripts/pinecone-prepare-docs"



export default function InputFile() {
    
  return (
    <div className="grid w-full lg:max-w-sm items-center gap-1.5 rounded-2xl border   h-[30vh] flex flex-col justify-center ">
      <form action={upload}>
      <Label htmlFor="picture" className="text-xl "><h1 >Upload PDF</h1></Label>
      <Input
        id="picture"
        name="file"
        type="file"

        className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:border file:border-solid file:border-blue-700 file:rounded-md border-blue-600"
      />
      <Button  type="submit" value="Upload" className="w-24">
        <Link href={"/"}>
        Upload
        </Link>
         
        </Button> 
      </form>
    </div>
  )
}

// export async function getStaticProps() {
//   let res = getChunkedDocsFromPDF;
//  }


