import React from 'react'
import { NextPage } from 'next'
import { useTheme, Grid, Avatar, Image, Link } from 'components'
import PackageIcon from '@geist-ui/icons/package'
import FeatherIcon from '@geist-ui/icons/feather'
import GitHubIcon from '@geist-ui/icons/github'
import { HomeCell } from 'lib/components'

const Application: NextPage<{}> = () => {
  const theme = useTheme()
  const { palette } = useTheme()

  return (
    <>
      <div className="layout">
        <div className="hero">
          <div className="box">
            <Image
              src="https://pbs.twimg.com/profile_images/1529951834315554816/TvQVejZ5_400x400.jpg"
              width={10}
              height={10}
            />
            <div>
              <p>
                I'm the founder of{' '}
                <Link href="#" target="_blank" color>
                  Green Oak
                </Link>
                , a Web3 investment firm where I build and back early-stage teams. My
                focus is on market microstructure and how the design of Web3 protocols
                affect the capital markets they drive.{' '}
                <Link href="http://twitter.com/albertocevalls" target="_blank" color>
                  You can find me on Twitter.
                </Link>
              </p>
              <p>
                My interests include physics, history, philosophy and botany. I'm
                particularly interested in how economics can be combined with technology
                to tackle the world's toughest problems.{' '}
              </p>
              <p>
                <Link href="/en-us/writing" color>
                  I write about some of these topics here.
                </Link>{' '}
              </p>
              <p>
                In the past I've been an entrepreneur, salsa dancer and sailor. I helped
                launch a{' '}
                <Link href="#" target="_blank" color>
                  DAO to bring Bitcoin to DeFi
                </Link>
                , a{' '}
                <Link href="#" target="_blank" color>
                  crypto travel booking platform{' '}
                </Link>{' '}
                and studied Mathematics at the University of British Columbia in Canada.
              </p>
              <p>
                I enjoy building useful stuff and contributing to OSS -{' '}
                <Link href="/en-us/r&d" color>
                  you can check it out here.
                </Link>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
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
