"use client";
import { linkToShortAction } from "@/actions/link";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";

export default function ShortUrlForm() {

    const [state, action] = useFormState(linkToShortAction, {
        message: null,
        error: null
    });
    const formRef = useRef(null);
    useEffect(() => {
        if (state?.message) {
            formRef.current.reset();
        }
    }, [state]);

    return (
        <form ref={formRef} action={action} method="post">
            <input type="text" name="long_url" placeholder="kısaltmak istediğin URL" />
            <button type="submit">Linki Kısalt</button>
        </form>
    )
}