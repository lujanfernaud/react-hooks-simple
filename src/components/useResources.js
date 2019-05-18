import { useState, useEffect } from 'react'
import axios from 'axios'

import { API_URL } from '../constants'

const useResources = resource => {
  const [resources, setResources] = useState([])

  const fetchResource = async resource => {
    const response = await axios.get(`${API_URL}${resource}`)

    setResources(response.data)
  }

  useEffect(() => {
    fetchResource(resource)
  }, [resource])

  return resources
}

export default useResources
