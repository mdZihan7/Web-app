'use client';

import React from 'react'
import styles from './TeacherCard.module.css'

interface TeacherCardProps {
    name: string;
    subject: string;
    imgSrc: string;
}


const TeacherCard: React.FC<TeacherCardProps> = ({ name, subject, imgSrc }) => {
    return (
        <div className={styles.card}>
            <h3>{name}</h3>
            <p>{subject}</p>
            <img src={imgSrc} alt={`${name}'s picture`} width={100} height={100} />
            <button className={styles.button}>Book a Class</button>
        </div>
    );
};

export default TeacherCard
