import nc from 'next-connect'

const handler = nc()
    .get((req, res) => {
        console.log('herre')
        res.json({message: 'Hello from the api'})
    })
    .post((req, res) => {
        res.json({message: 'posted'})
    })


export default handler