import React from 'react'
import Link from 'next/link'
import styles from '../src/components/styles.module.css'

const Page = () => (<div className={styles.foo}>
    <h1>Index Page</h1>
    <Link href={"/notes"}>
        Notes
    </Link>
</div>)

export default Page