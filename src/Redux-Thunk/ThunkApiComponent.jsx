import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "./Action"

const ThunkApiComponent = () => {
  const dispatch = useDispatch()
  const { data, isApiCall, error } = useSelector(state => state);
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  return (
    <>
      <h3>
        {
          isApiCall ? "Api Calling" : ""
        }
      </h3>
      <h4>{error ? "Error" : ""}</h4>
      <ul>
        {
          data && data.map((i) => {
            return (
              <>
                <li key={i.id}>{i.title}</li>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default ThunkApiComponent