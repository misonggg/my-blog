'use client'
import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import Image from 'next/image'

export default function MarkdownViewer({content}: {content: string}) {
  return (
    <ReactMarkdown 
      className='prose md:prose-md max-w-none'
      remarkPlugins={[remarkGfm]}
      components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...props}
              style={materialDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          )
        },
        img: (image) => (
          <Image
            className='w-3/5 object-cover'
            src={image.src || ''} 
            alt={image.alt || ''} 
            width={500} 
            height={350} 
          />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
