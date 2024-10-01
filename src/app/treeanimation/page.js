'use client'
import dynamic from 'next/dynamic'
import React from 'react'

const TreeAnimation = dynamic(() => import('@/modules/TreeAnimation'), {
    ssr: false,
})

export default function page() {
    return (
        <TreeAnimation />
    )
}
