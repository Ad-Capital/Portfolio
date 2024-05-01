"use client";

import { useState, FormEvent } from "react";
import Rounded from "@/common/RoundedButton";

type ErrorResponse = {
    msg: string[];
    success: boolean;
};

export default function ContactForm() {
    const [fullname, setFullname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [service, setService] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [error, setError] = useState<string[]>([]);
    const [success, setSuccess] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                fullname,
                email,
                service,
                message,
            }),
        });

        const { msg, success }: ErrorResponse = await res.json();
        setError(msg);
        setSuccess(success);

        if (success) {
            setFullname("");
            setEmail("");
            setService("");
            setMessage("");
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="py-4 md:px-24 px-6 w-full flex flex-col gap-5 justify-center items-center"
            >
                <div className="form mt-[20vh]">
                    <label htmlFor="fullname" className="text-white font-bold md:text-[2vw]">Your Name</label>
                    <input
                        onChange={(e) => setFullname(e.target.value)}
                        value={fullname}
                        type="text"
                        id="fullname"
                        placeholder="John Doe"
                        className="formInput"
                    />
                </div>

                <div className="form">
                    <label htmlFor="email" className="text-white font-bold md:text-[2vw]">Your Email</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        id="email"
                        placeholder="john@gmail.com"
                        className="formInput"
                    />
                </div>

                <div className="form">
                    <label htmlFor="service" className="text-white font-bold md:text-[2vw]">What service do you require?</label>
                    <input
                        onChange={(e) => setService(e.target.value)}
                        value={service}
                        type="text"
                        id="service"
                        placeholder="Web Design, Web Development..."
                        className="formInput"
                    />
                </div>

                <div className="form">
                    <label htmlFor="message" className="text-white font-bold md:text-[2vw]">Your Message</label>
                    <textarea
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        className="h-32 formInput"
                        id="message"
                        placeholder="Type your message here..."
                    ></textarea>
                </div>

                <button type="submit">
                    <Rounded backgroundColor={"black"}>
                        <p className='text-white'>Send</p>
                    </Rounded>
                </button>
            </form>

            <div className="bg-slate-100 flex flex-col">
                {error &&
                    error.map((e, index) => (
                        <div
                            key={index}
                            className={`${success ? "text-green-800" : "text-red-600"} px-5 py-2`}
                        >
                            {e}
                        </div>
                    ))}
            </div>
        </>
    );
}
