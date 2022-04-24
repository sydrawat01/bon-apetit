import { FC } from 'react'

interface MarkerPinProps {
  markerSize: number
}

const MarkerPin: FC<MarkerPinProps> = ({ markerSize }) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 503.467 503.467"
      style={{
        width: `${markerSize * 4}px`,
        height: `${markerSize * 4}px`,
      }}
      xmlSpace="preserve"
    >
      <g transform="translate(15 1)">
        <path
          style={{ fill: '#FF7474' }}
          d="M236.733,3.267c70.827,0,128,57.173,128,128s-57.173,128-128,128c-70.827,0-128-57.173-128-128
     S165.907,3.267,236.733,3.267"
        />
        <path
          style={{ fill: '#ECF4F7' }}
          d="M236.733,447c61.44,0,110.933,11.093,110.933,25.6s-49.493,25.6-110.933,25.6
     c-61.44,0-110.933-11.093-110.933-25.6S175.293,447,236.733,447"
        />
      </g>
      <path
        style={{ fill: '#51565F' }}
        d="M251.733,503.467c-46.08,0-115.2-7.68-115.2-29.867c0-21.333,61.44-27.307,80.213-29.013
   c2.56,0,4.267,1.707,4.267,4.267c0,2.56-1.707,4.267-4.267,4.267c-49.493,3.413-72.533,14.507-72.533,20.48
   c0,7.68,36.693,21.333,106.667,21.333S357.547,481.28,357.547,473.6c0-5.973-23.04-16.213-72.533-20.48
   c-2.56,0-4.267-2.56-4.267-4.267c0-2.56,2.56-4.267,4.267-4.267c18.773,1.707,81.067,7.68,81.067,29.013
   C366.933,495.787,297.813,503.467,251.733,503.467z M251.733,469.333c-2.56,0-4.267-1.707-4.267-4.267V264.533
   c-70.827-2.56-128-60.587-128-132.267C119.467,59.733,179.2,0,251.733,0S384,59.733,384,132.267c0,71.68-57.173,129.707-128,132.267
   v200.533C256,467.627,254.293,469.333,251.733,469.333z M251.733,8.533C183.467,8.533,128,64,128,132.267S183.467,256,251.733,256
   s123.733-55.467,123.733-123.733S320,8.533,251.733,8.533z M335.36,93.867c-1.707,0-3.413-0.853-3.413-2.56
   c-8.533-16.213-22.187-30.72-39.253-39.253c-1.707-0.853-2.56-3.413-1.707-5.973c0.853-1.707,3.413-2.56,5.973-1.707
   c17.92,9.387,33.28,24.747,42.667,42.667c0.853,1.707,0,4.267-1.707,5.973C336.213,93.867,336.213,93.867,335.36,93.867z"
      />
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  )
}

export default MarkerPin
