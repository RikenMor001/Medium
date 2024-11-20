"use client";

import { ChangeEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function Signup() {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await axios.post("/api/auth/signup", { username, password });
            if (response.status === 200) {
                router.push("/");
            }
        } catch (err: any) {
            setError(err.response?.data?.error || "Something went wrong");
        }
    };

    const Signinpage = () => {
        router.push("/signin");
    };

    return (
        <div>
            <div className="grid grid-cols-2">
                <div className="flex justify-center flex-col">
                    <div className="mb-3">
                        <div className="flex justify-center font-bold text-3xl">
                            Create an account
                        </div>
                        <div className="flex justify-center text-slate-500 text-md">
                            <div>Already have an account?</div>
                            <div className="hover:text-slate-900">
                                <button onClick={Signinpage}>Sign In</button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Input
                            label="Username"
                            placeholder="Enter your username"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && (
                        <div className="text-red-500 text-center mt-2">{error}</div>
                    )}
                    <div className="flex justify-center">
                        <button
                            className="bg-slate-900 text-white p-2 rounded-lg mt-3 w-1/6 text-center hover:bg-slate-800"
                            onClick={handleClick}
                        >
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="bg-slate-200 flex justify-center flex-col h-screen">
                    <div className="flex justify-center">
                        <div className="max-w-lg">
                            <div className="text-3xl font-bold">
                                &quot;The customer support I received was exceptional. The support team went above and beyond to address my concerns.&quot;
                            </div>
                            <div className="mt-2 max-w-md text-lg font-semibold text-left text-slate-800">
                                CEO | Acme corp.
                            </div>
                            <div className="max-w-md text-md font-semibold text-left text-slate-500">
                                -Riken Patel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface SignupProps {
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, placeholder, type, onChange }: SignupProps) {
    return (
        <div className="flex flex-col items-center text-center w-full">
            <div className="text-lg font-bold p-2">
                <label>{label}</label>
            </div>
            <div className="w-1/2">
                <input
                    placeholder={placeholder}
                    type={type}
                    onChange={onChange}
                    className="w-full bg-gray-50 text-gray-900 text-sm rounded-lg shadow-lg px-2 py-4 border border-gray-300"
                    required
                />
            </div>
        </div>
    );
}
