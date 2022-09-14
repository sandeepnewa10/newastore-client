import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getSingleOrder } from '../../pages/orders/orderAction';
import { setSelectedOrder } from '../../pages/orders/orderSlice';
import { Form, Button, Table } from 'react-bootstrap'
export const OrderEditForm = () => {
    const dispatch = useDispatch();
    const { _id } = useParams();
    const { orders, selectedOrder } = useSelector(state => state.orders)

    useEffect(() => {
        //check if we have orders in our state, if so selecte the order from the state
        if (orders.lenght) {
            const select = orders.filter(item => item._id === _id);
            dispatch(setSelectedOrder(select));
        } else {
            dispatch(getSingleOrder(_id))
        }
        //otherwise, fetch from the server
    }, [dispatch, orders, _id])

    const { cart } = selectedOrder;
    return (
        <div>
            {/* status  */}
            <div className="fw bold py-2 d-flex justify-content-between">
                <div className="">Status : {selectedOrder.status}</div>
                <div className="">
                    <Form className="d-flex">
                        <Form.Group>
                            <Form.Select>
                                <option value="">--- Select ---</option>
                                <option value="shipped">shipped</option>
                                <option value="cancel">Cancel</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant='warning'>Update</Button>
                    </Form>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">


                    {/* buyer info  */}

                    <div className="shippingInfo card p-4 mb-4">
                        <h4>Shipping Details</h4>
                        <hr />
                        <p>
                            Order Date: 20-2-2022<br />
                            Name: {selectedOrder?.buyer?.fName} {selectedOrder?.buyer?.lName}<br />
                            Phone: {selectedOrder?.buyer?.phone}<br />
                            Email: {selectedOrder?.buyer?.email}<br />
                            Shipping Address:{selectedOrder?.shipping?.street},
                            {selectedOrder?.shipping?.suburb}  ,
                            {selectedOrder?.shipping?.state} ,
                            {selectedOrder?.shipping?.countery}   <br />
                        </p>

                    </div>


                </div>

                <div className="col-md-6">
                    {/* payment info  */}
                    <div className="payment-info card p-4 mb-4">
                        <h4>Payment Info</h4>
                        <hr />
                        Status: {selectedOrder?.paymentInfo?.status} <br />
                        Total Paid: {selectedOrder?.paymentInfo?.paidAmount} <br />
                        Paid Date: {selectedOrder?.paymentInfo?.paidDate} <br />
                        Method: {selectedOrder?.paymentInfo?.method} <br />
                        Transaction: {selectedOrder?.paymentInfo?.transactionId} <br />

                    </div>
                </div>
            </div>

            {/* cart info  */}

            <div className="row">
                <div className="col-md-12">
                    <div className="paymeny-info card p-4 mb-4">
                        <h4>Cart Details</h4>
                        <hr />
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Thumbnail</th>
                                    <th>Name</th>
                                    <th>Unit Price</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.map((item, i) => <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td><img src={item.thumbnail} alt="" width="100px" /></td>
                                    <td>{item.productName}</td>
                                    <td>{item.salesPrice}</td>
                                    <td>{item.qty}</td>
                                    <td>{item.subTotal}</td>

                                </tr>)}
                                <tr>
                                    <td colSpan={5}> Total</td>
                                    <td>{selectedOrder.cartTotal}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                </div>
            </div>


            {/* add note form  */}
            <Form className='mb-5'>
                <Form.Group>
                    <Form.Label className='mb-3'>Add Note</Form.Label>
                    <Form.Control className='mb-3' as="textarea" placeholder="add some note" rows={5} />
                </Form.Group>
                <Button variant="primary">Add note</Button>
            </Form>


            {/* message history  */}
            <div className="a">
                <div className="note-history mb-3">
                    <span className='mb-3'>Date: 10-03-2022</span>
                    <div className="card p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis dolore, placeat quo ullam, facere voluptas itaque pariatur accusamus autem ea nisi rem? Quidem optio dolorum quam, nemo maxime consequuntur. Omnis quod iste eaque velit vero sed dolores dolore voluptas eum tenetur impedit ipsa accusantium odio minima, blanditiis unde est?
                    </div>
                </div>
                <div className="note-history mb-3">
                    <span className='mb-3'>Date: 10-03-2022</span>
                    <div className="card p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis dolore, placeat quo ullam, facere voluptas itaque pariatur accusamus autem ea nisi rem? Quidem optio dolorum quam, nemo maxime consequuntur. Omnis quod iste eaque velit vero sed dolores dolore voluptas eum tenetur impedit ipsa accusantium odio minima, blanditiis unde est?
                    </div>
                </div>
                <div className="note-history mb-3">
                    <span className='mb-3'>Date: 10-03-2022</span>
                    <div className="card p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis dolore, placeat quo ullam, facere voluptas itaque pariatur accusamus autem ea nisi rem? Quidem optio dolorum quam, nemo maxime consequuntur. Omnis quod iste eaque velit vero sed dolores dolore voluptas eum tenetur impedit ipsa accusantium odio minima, blanditiis unde est?
                    </div>
                </div>
                <div className="note-history mb-3">
                    <span className='mb-3'>Date: 10-03-2022</span>
                    <div className="card p-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veritatis dolore, placeat quo ullam, facere voluptas itaque pariatur accusamus autem ea nisi rem? Quidem optio dolorum quam, nemo maxime consequuntur. Omnis quod iste eaque velit vero sed dolores dolore voluptas eum tenetur impedit ipsa accusantium odio minima, blanditiis unde est?
                    </div>
                </div>
            </div>

        </div>

    )
}
