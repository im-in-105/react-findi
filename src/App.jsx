import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8080/api/hello')
            .then(res => {
                setMessage(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <div>
            <h1>SpringBoot에서 온 메시지:</h1>
            <p>{message}</p>
        </div>
    )
}

export default App
