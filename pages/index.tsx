import React from 'react'
import { NextPage } from 'next'
import { useTheme, Image, Link } from 'components'

const Application: NextPage<{}> = () => {
  const theme = useTheme()

  return (
    <>
      <div className="layout">
        <div className="hero">
          <div className="box">
            <Image
              src="https://pbs.twimg.com/profile_images/1529951834315554816/TvQVejZ5_400x400.jpg"
              width={10}
              height={10}
              className="profileImage"
            />
            <div>
              <p>
                I'm the founder of{' '}
                <Link href="#" target="_blank" color>
                  Green Oak
                </Link>
                , an engineering & investment for Web3. My focus is on market
                microstructure, how the design of protocols and tokens affect the capital
                markets they drive. <br />
                <Link href="http://twitter.com/albertocevalls" target="_blank" color>
                  You can find me on Twitter.
                </Link>
              </p>
              <p>
                Outside of crypto, my interests include history, philosophy, physics and
                botany. I believe in combining technology and economics to tackle the
                world's toughest problems.{' '}
              </p>
              <p>
                <Link href="/writing" color>
                  I write about some of these topics here.
                </Link>{' '}
              </p>
              <p>
                In the past I've been an entrepreneur, salsa dancer and sailor. I helped
                launch a{' '}
                <Link href="https://badger.com" target="_blank" color>
                  DAO to bring Bitcoin to DeFi
                </Link>
                , a{' '}
                <Link href="https://travala.com" target="_blank" color>
                  crypto travel booking platform{' '}
                </Link>{' '}
                and studied Mathematics and Economics at the University of British
                Columbia in Canada.
              </p>
              <p>
                I enjoy contributing to OSS and building useful apps -{' '}
                <Link href="/r&d" color>
                  you can check them out here.
                </Link>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
          margin-top: 24em;
        }
        .layout {
          min-height: calc(100vh - var(--geist-page-nav-height));
          max-width: ${theme.layout.pageWidthWithMargin};
          margin: 0 auto;
          padding: 0 ${theme.layout.gap} calc(${theme.layout.gap} * 2);
          box-sizing: border-box;
        }
        .hero {
          height: calc(100vh - var(--geist-page-nav-height) - 300px);
          min-height: 30vh;
          max-width: 1000px;
          margin: 0 auto;
          text-align: left;
          align-items: left;
          justify-content: center;
          display: flex;
          flex-direction: column;
        }
        .title {
          font-size: 3.75rem;
          font-weight: 700;
          margin: 0;
        }
        .desc {
          color: ${theme.palette.accents_5};
          font-size: 1.5rem;
          font-weight: 500;
          margin: 0 0 ${theme.layout.gap};
        }

        @media screen and (min-width: 768px) {
          .box {
            display: flex;
            align-items: center;
            margin-top: 0;
          }
        }
        p {
          word-wrap: break-word;
          max-width: 600px;
        }
      `}</style>
    </>
  )
}

export default Application
