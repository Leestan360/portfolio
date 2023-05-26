import React from 'react'

type Props = {
    key: number;
    jd: any;
}

const JDEntry = ({key, jd}: Props) => {
  return (
        <li key={key} className="flex">
            {jd}
        </li>
  )
}

export default JDEntry