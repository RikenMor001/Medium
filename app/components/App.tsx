"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export function Appbar() {
    const router = useRouter();
    const [search, setSearch] = useState<string>("");
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

    const suggestions = ["Applications", "Books", "Christmas", "Diamond", "English", "Football", "Geography", "HarveySpecter", "Italy","Joker", "KillianMBappe", "LeoMessi", "Messi", "Nigga", "Operations", "Palace", "Quest", "RIKEN", "Sexy", "Tortoise", "UVRays", "Violet", "Welcome", "Xmas", "Yyz", "Zebra"];

    function handleSignOut() {
        router.push("/signin");
    }

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
        setShowSuggestions(true);
    }

    function handleSuggestionClick(suggestion: string) {
        setSearch(suggestion);
        setShowSuggestions(false);
    }

    return (
        <div>
            <div className="flex justify-between items-center text-slate-900 p-3 font-semibold border border-b">
                <div className="flex justify-center items-center">
                    <div className="text-3xl">Medium</div>
                    <div className="relative">
                        <Input
                            placeholder="Search"
                            type="text"
                            value={search}
                            onChange={handleInputChange}
                        />
                        {showSuggestions && search && (
                            <div className="absolute top-full left-0 w-full bg-white border rounded shadow-md z-10">
                                {suggestions
                                    .filter((s) =>
                                        s.toLowerCase().includes(search.toLowerCase())
                                    )
                                    .map((suggestion, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleSuggestionClick(suggestion)}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                        >
                                            {suggestion}
                                        </div>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-3 text-sm text-slate-500">Write</div>
                    <div className="mr-3 text-sm text-slate-500">Bell</div>
                    <div className="mr-3 text-sm text-slate-500">
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface SearchProps {
    placeholder: string;
    type: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, type, value, onChange }: SearchProps) {
    return (
        <div>
            <input
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                className="mt-1 ml-3 text-sm text-black rounded-3xl bg-slate-100 py-2 px-2 font-semibold border border-slate-200 pl-5"
            />
        </div>
    );
}
