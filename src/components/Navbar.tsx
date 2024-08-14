import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/rewrite-tool">Rewrite Tool</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar