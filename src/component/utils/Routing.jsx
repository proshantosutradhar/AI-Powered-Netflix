import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signin from '../Signin'
import Browse from '../Browse'

const Routing = () => {
    let appRouter = createBrowserRouter([{
        path: '/',
        element: <Signin />

    },
    {
        path:'Browse',
        element:<Browse/>
    }
])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Routing
