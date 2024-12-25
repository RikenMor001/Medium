"use client"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export function Appbar() {
    const router = useRouter();
    const [ serach, setSearch ] = useState<string>(" ");
    const [ suggestion, setSuggestions ] = useState<boolean>(false);
    
    const suggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5"];

    function Signout(){
        signOut();
        router.push("/signin")
    }

    function setSearchHandleClick(e: ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value);
        setSuggestions(true);
    }

    function suggestionHandleClick(suggestions: string){
        setSearch(suggestions);
        setSuggestions(false);
    }

    return <div>
        <div className="flex justify-between items-center text-slate-900 p-3 font-semibold border boder-b">
            <div className="flex justify-center items-center">
                <div className="text-3xl">
                    Medium 
                </div>
                <div>
                <Input
                placeholder="Search"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                />
                </div>
            </div>
            <div className="flex">
                <div className="mr-3 text-sm text-slate-500">
                    Write
                </div>
                <div className="mr-3 text-sm text-slate-500">
                    Bell
                </div>
                <div className="mr-3 text-sm text-slate-500">
                    <button onClick={Signout}>
                        Sign Out
                    </button>
                </div>
            </div>
            
        </div>
    </div> 
}


interface SearchProps{
    placeholder: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function Input({placeholder, type, onChange}: SearchProps){
    return <div>
        <input        
            placeholder = { placeholder }
            type = { type }
            onChange = {onChange}
            className="mt-1 ml-3 text-sm text-black rounded-3xl bg-slate-100 py-2 px-2 font-semibold border border-slate-200 pl-5"
        />
    </div>        
}
