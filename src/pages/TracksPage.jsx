import React from 'react'
import ImageSection from '../components/ImageSection'
import TracksComponent from '../components/TracksComponent'

function TracksPage() {
    return (<>
        <ImageSection Tracks={true} />
        <TracksComponent />
    </>
    )
}

export default TracksPage
