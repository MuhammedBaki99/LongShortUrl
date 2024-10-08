"use client";
import { linkToShortAction } from "@/actions/link";
import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import "./shortform.css"

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
        <div className="shortformCont">
            <form ref={formRef} action={action} method="post">
                <input type="text" name="long_url" placeholder="kısaltmak istediğin URL" />
                <button type="submit">Linki Kısalt</button>
            </form>
            <h3>Hayat kısa, linkin de öyle olsun!</h3>
        </div>
    )
}