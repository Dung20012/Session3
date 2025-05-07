import React from 'react'
import Form from './Form'

export default function TodoList() {
  const students = [
    {
      id: 1,
      studentCode: 'SV001',
      studentName: 'Nguyễn Văn A',
      age: 20,
      gender: 'Nam'
    },
    {
      id: 2,
      studentCode: 'SV002',
      studentName: 'Nguyễn Văn B',
      age: 21,
      gender: 'Nữ'
    },
    {
      id: 3,
      studentCode: 'SV003',
      studentName: 'Nguyễn Văn C',
      age: 19,
      gender: 'Nam'
    }
  ];

  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Basic React Lab</title>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <div className="card-header">
                <div className="row">
                  <div className="col-3">
                    <button type="button" className="btn btn-primary btn-icon-text">
                      Thêm mới sinh viên
                    </button>
                  </div>
                  <div className="col-6">
                    <form className="search-form" action="#">
                      <i className="icon-search" />
                      <input
                        type="search"
                        className="form-control"
                        placeholder="Search Here"
                        title="Search here"
                      />
                      <button className="btn btn-primary btn-icon-text">
                        Tìm kiếm
                      </button>
                    </form>
                  </div>
                  <div className="col-3 d-flex align-items-center">
                    <select className="form-control">
                      <option value="">Sắp xếp</option>
                      <option value="">ABC def</option>
                      <option value="">ABC def</option>
                      <option value="">ABC def</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* END CONTROL */}

              {/* START LIST STUDENT */}
              <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Mã sinh viên</th>
                        <th>Tên sinh viên</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student, index) => (
                        <tr key={student.id}>
                          <td>{index + 1}</td>
                          <td>{student.studentCode}</td>
                          <td>{student.studentName}</td>
                          <td>{student.age}</td>
                          <td>{student.gender}</td>
                          <td>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                              >
                                Xem
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                              >
                                Sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                              >
                                Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* END LIST STUDENT */}
            </div>
          </div>

          {/* START FORM SINH VIÊN */}
          <Form />
          {/* END FORM SINH VIÊN */}
        </div>
      </>
    </>
  )
}
