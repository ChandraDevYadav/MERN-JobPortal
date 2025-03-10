import React from 'react'
import DetailLeft from './DetailLeft'
import DetailRight from './DetailRight'
import MoreJob from './MoreJob'

const JobMain = () => {
    return (
        <div>
            <div className='grid grid-cols-6 gap-6 px-32 py-24'>
                <div className='col-span-4'>
                    <DetailLeft />
                </div>
                <div className='col-span-2'>
                    <DetailRight />
                </div>
                <div className='col-span-6'>
                    <MoreJob />
                </div>
            </div>
        </div>
    )
}

export default JobMain