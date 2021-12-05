import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import { CanvasMapContainer } from '../containers'


const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/organisms/CanvasMap'),
  { ssr: false }
)

const Home: NextPage = () => {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  )
}

export default Home
