/** @jsxRuntime classic /
 /* @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

const Page = ({notes}) => {
    // const notes = new Array(15).fill(1).map((e, i) => ({id: i, title: `This is my note ${i}`}))

    return (
        <div sx={{variant: 'containers.page'}}>
            <h1>My Notes</h1>

            <div  sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
                {notes.map((note, i) => (
                    <div sx={{width: '33%', p: 2}} key={note.id}>
                        <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
                            <a sx={{textDecoration: 'none', cursor: 'pointer'}}>
                                <div sx={{variant: 'containers.card',}}>
                                    <strong>{note.title}</strong>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Page

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/note/`)
    const {data} = await res.json()

    return {
        props: {notes: data}
    }
}