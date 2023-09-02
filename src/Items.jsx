import SingleItem from './SingleItem'
import { useFetchTask } from './customHooks'

const Items = () => {
  const { isError, isLoading, data } = useFetchTask()

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}> Loading...</p>
  }

  if (isError) {
    return <p style={{ marginTop: '1rem' }}>There was an error... </p>
  }

  // console.log(error)
  // if (error) {
  //   return <p style={{ marginTop: '1rem' }}> {error.response.data}</p>
  // }

  return (
    <div className="items">
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
