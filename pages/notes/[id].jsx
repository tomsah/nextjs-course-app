/** @jsxRuntime classic /
 /* @jsx jsx */
import { jsx } from 'theme-ui'

const Page = ({note}) => {
    // this what you will do for client side
    // const router = useRouter()
    // const { id }= router.query
    console.log(note)
    return (
        <div sx={{variant: 'containers.page'}}>
            <h1>Note: {note.title} </h1>
        </div>
    )
}
export default Page

export async function getServerSideProps({params, req, res}) {
    const response = await fetch(`http://localhost:3000/api/note/${params.id}`)
    // if you cannot find the note redirect to the main note page
    if (!response.ok) {
        res.end()
        res.writeHead(302, { Location: '/notes' })
        return {props: {}}
    }

    const {data} = await response.json()

    return {
        props: {note: data}
    }
}