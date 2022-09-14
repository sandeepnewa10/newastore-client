import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomCard from "../../components/custom-card/CustomCard";
import CustomTable from "../../components/custome-table/CustomTable";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { getProductsAction } from "../products/productAction";

const Dashboard = () => {
  const dispatch = useDispatch()
  const {productList} = useSelector((state)=> state.products);

  useEffect (()=>{
    !productList.length && dispatch(getProductsAction())
  }, [])

  const clientTableHead = ["First Name", "Last Name", "Joined Data"];
  const clientInfo = [
    {
      fName: "sandeep",
      lName: "prajapati",
      joinedDate: "20-03-2022"
    },
  ]

  const orderHead = ["Status", "Payment Status", "Name", "Ordered Date", "Total Qty", "Order Total"]
  const orderInfo =[
    ["Pending", "paid", "Prem Acharya", "2-2-2022", 2, 888],
    ["shipped", "paid", "Prem Acharya", "2-2-2022", 2, 888],
    ["cancelled", "paid", "Prem Acharya", "2-2-2022", 2, 888],
    ["Pending", "paid", "Prem Acharya", "2-2-2022", 2, 888],
  ]

  const activeProduct = productList.filter((item) => item.status ==="active");
  return <AdminLayout>

    <h4>Dashboard</h4>

    {/* product summary */}

    <div className="products">
      <h5>Product Summary</h5>
      <hr />
      <Row className="g-3">
        <Col md={4}><CustomCard count={productList.length} title="Total Product" /></Col>
        <Col md={4}><CustomCard count={activeProduct.length} title="Active" /></Col>
        <Col md={4}><CustomCard count={productList.length - activeProduct.length } title="Inactive" /></Col>
      </Row>
    </div>


    {/* client summary  */}

    <Row>
      <h5>New Client</h5>
      <hr />
      <CustomTable tableHead={clientTableHead} tableData={clientInfo} />
    </Row>

    {/* last 5 order  */}
    <Row>
      <h5>Recent Order {" "}
      <Link to="/order"> View all</Link></h5>
      <hr />
      <CustomTable tableHead={orderHead} tableData={orderInfo} />
    </Row>

  </AdminLayout>;
};

export default Dashboard;
