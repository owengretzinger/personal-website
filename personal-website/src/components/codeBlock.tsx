'use client';
import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("tsx", tsx);


export default function SyntaxHighlightCodeBlock({ ...props }: any) {
    return (
        <SyntaxHighlighter
        className="text-xs"
            language={props.language}
            children={props.children}
            PreTag="div"
            style={oneDark}
            useInlineStyles={true}
            {...props}
        />
    )
}
