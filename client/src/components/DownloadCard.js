import React from 'react'
import { DownloadIcon } from './Icons'

export default function DownloadCard({ title }) {
    return (
        <div className='card'>
            <div className='card__hat'>
                <div className='card__hat-top' />
                <div className='card__hat-left' />
                <div className='card__hat-right' />
            </div>
            <div className='card__title'>{title}</div>
            <div className='card__button'>
                <DownloadIcon />
            </div>
        </div>
    )
}
