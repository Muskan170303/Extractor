'use client'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../components/ui/button";
import { Spinner } from "../components/ui/spinner";
import { upload } from "@/lib/upl" 
import Link from "next/link"
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { Chat } from "@/components/chat";
import  InputFile  from "@/components/upload";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router= useRouter();
  return (  
    <main className="relative container flex min-h-screen flex-col">
      <div className=" p-4 flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <span className="font-bold">pdf-chat-ai-sdk</span>
        <DarkModeToggle />
      </div>
      <div className="p-8 text-xl font-bold flex h-14 items-center justify-between supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full bg-background/95 backdrop-blur">
      <h1>Welcome to Text Extractor</h1>  
      </div>
      <div className="flex flex-1 py-4">
        
        <div className="w-full flex flex-1 py-4 justify-center items-center">
          {/* <Chat /> */}
          <div className="grid w-full lg:max-w-sm items-center gap-1.5 rounded-2xl border   h-[30vh] flex flex-col justify-center ">
      <form action={upload}>
      <Label htmlFor="picture" className="text-xl "><h1 >Upload PDF</h1></Label>
      <Input
        id="picture"
        name="file"
        type="file"

        className="file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 file:border file:border-solid file:border-blue-700 file:rounded-md border-blue-600"
      />
      <Button onClick={()=>{
            
            router.push("/dashboard");
      }}  type="submit" value="Upload" className="w-24">
        Upload
        </Button> 
      </form>
    </div>
        </div>
      </div>
    </main>
  );
}