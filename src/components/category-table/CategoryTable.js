import React, { useEffect } from 'react'
import { Button, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesAction } from '../../pages/categoeries/CategoryAction'
import { BsArrowReturnRight } from 'react-icons/bs';


const CategoryTable = () => {
  const dispatch = useDispatch()

  const { categories } = useSelector(state => state.category)


  useEffect(() => {
    dispatch(getCategoriesAction())
  }, [])


  const parentCats = categories.filter(({ parentId }) => !parentId)
  const childCats = categories.filter(({ parentId }) => parentId)

  return (
    <Row>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Level</th>
            <th>Action</th>

          </tr>
        </thead>
        <tbody>
          {
            parentCats.length > 0 && parentCats.map((item, i) => (
              <>
                <tr key={item._id} className="parent">
                  <td>{item.status}</td>
                  <td>{item.name}</td>
                  <td>{item.parentId ? "Children" : "Parent" }</td>
                  <td>
                    <Button variant='danger'>Delete</Button>
                  </td>
                </tr>
                {
                  childCats.map((cat) => cat.parentId === item._id &&(
                    <tr key={cat._id} className="child">
                    <td>{cat.status}</td>
                    <td><BsArrowReturnRight/> {cat.name}</td>
                    <td>{cat.parentId ? "Children" : "Parent"}</td>
                    <td>
                      <Button variant='danger'>Delete</Button>
                    </td>
                  </tr>

                  ))
                }
              </>
            )


            )
          }



        </tbody>
      </Table>


    </Row>
  )
}

export default CategoryTable