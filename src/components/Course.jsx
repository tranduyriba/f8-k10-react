import React from 'react'

const course = {
    id: 1,
    title: "Hoc HTML, CSS",
    price: 500,
}
function CourseItem(props) {
    return (
        <div className="course-card">
            <h2>Tên khóa học: {props.title}</h2>
            <p>Giá: {props.price}</p>
        </div>
    )
}

const Course = () => {
    return (
        <>
        <h1>Danh sach khoa hoc</h1>
        
        </>
    )
}
export default function Course() {
  return (
    <div>Course</div>
  )
}
