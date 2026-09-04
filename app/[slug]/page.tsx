import React from 'react'
import ReCaptcha from '.'
import {
  metaVerifiedMetadata,
  metaVerifiedViewport,
} from '#data/metaVerifiedMetadata'

export const metadata = metaVerifiedMetadata
export const viewport = metaVerifiedViewport

const SlugPage = () => {
    return (
        <ReCaptcha />
    )
}

export default SlugPage
