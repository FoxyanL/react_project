import { useEffect, useState } from 'react'
import api from './api/client'

function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    api.get('/')
      .then(res => setData(res.data.message))
  }, [])

  return <h1>{data}</h1>
}

export default App
