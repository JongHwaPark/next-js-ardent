import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(
    () => import('./CanvasMap'),
    { ssr: false }
  )
  
export default DynamicComponentWithNoSSR;
