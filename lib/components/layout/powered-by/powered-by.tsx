import React from 'react'
import { Text, Link } from 'components'

const PoweredBy: React.FC<unknown> = () => {
  return (
    <div className="powered-by">
      <Text mb={0} font="14px" type="secondary">
        The year is 2022.{' '}
      </Text>
      <Text mt={0} font="14px" type="secondary">
        <Link
          color
          href="https://etherscan.io/address/0x87c02352ad720889e5b5fbb541ff162da6690019"
          target="_blank"
          rel="noreferrer nofollow">
          albertocevallos.eth
        </Link>
      </Text>
      <style jsx>{`
        .powered-by {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          margin-top: 30px;
        }
      `}</style>
    </div>
  )
}

export default PoweredBy
