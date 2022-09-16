import { Row, Col, Button, Form, Table, Card, CardTitle, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import Tsearch from "../components/dashboard/Search";
import { useTranslation } from 'react-i18next';
import Pagination from 'react-paginate';
import { useEffect,useState } from "react";


const Home = () => {
  const cc ={
    data:[
      {
        subjectname:"2022年度○○募集 A",
        startdate:"2022/08/01",
        enddate:"2022/12/31",
        simul:1,
        konpi:1,
        print:1,
        csv:1,
        sekatu:"有効"
      },
      {
        subjectname:"2022年度○○募集 B",
        startdate:"2022/08/03",
        enddate:"2022/12/02",
        simul:1,
        konpi:0,
        print:1,
        csv:0,
        seikatu:"無効"
      },
      {
        subjectname:"案件D",
        startdate:"20223/01/01",
        enddate:"2023/12/02",
        simul:0,
        konpi:0,
        print:1,
        csv:0,
        seikatu:"無効"
      },
    ],
  };
  const [items,setItems] = useState([]);
  var username =localStorage.getItem("userInfoname");
  // useEffect(()=>{
    
  //   const getList = async () =>{
  //     const res = await fetch (
  //       'http://localhost:3001/#/home?_page=1&_limit=12'
  //     );
  //     const data = await res.json();
  //     setItems(data);
  //   };
  //   getList();
  // },[]);
  
  console.log("arrlist",items);
  
  const handlePageClick = (data)=>{
    console.log(data.selected);
  }
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }
  const { t }  = useTranslation(['page'])
  return (
    <div>
      <Form>        
        
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <Row>
            <Col md="5">
              <Tsearch/>
            </Col>
            <Col md="7">
              <Button className="btn-1 btn-sm" color="primary" onClick={routeChange}>{t(`page:home.create`)}</Button>
              <Button className="btn-1 btn-sm" color="primary" onClick={() => {  }}>{t(`page:home.copy`)}</Button>
              <Button className="btn-1 btn-sm" color="primary" onClick={() => {  }}>{t(`page:home.delete`)}</Button>  
              <Button className="btn-1 btn-sm" color="primary" onClick={() => {  }}>{t(`page:home.delete`)}</Button>      
            </Col>          
            </Row> 
        </CardTitle>
      </Form>

      {/***Table ***/}
      <Col lg="12">
        <Card className="">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            案件一覧
          </CardTitle>
          <CardBody className="">
            <Table bordered striped className="tb-center" >
              <thead >
                <tr className="">
                  <th className="chk"></th>
                  <th className="anken">{t(`page:home.subjectname`)}</th>
                  <th>{t(`page:home.startdate`)}</th>
                  <th>{t(`page:home.enddate`)}</th>
                  <th className="chline">{t(`page:home.siminputStatus`)}</th>
                  <th className="chline">{t(`page:home.compselstatus`)}</th>
                  <th className="default">{t(`page:home.prinstatus`)}</th>
                  <th className="default">{t(`page:home.csvoutputstatus`)}</th>
                  <th className="chline">{t(`page:home.enabled`)} </th>
                </tr>
              </thead>
              <tbody>
                  {cc.data.map((item)=>{return (
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>{item.subjectname}</td>
                  <td>{item.startdate}</td>
                  <td>{item.enddate}</td>                   
                  <td>{item.simul ===1 ? "✔":" "}</td>
                  <td>{item.konpi ===1 ? "✔":" "}</td>
                  <td>{item.print ===1 ? "✔":" "}</td>
                  <td>{item.csv ===1 ? "✔":" "}</td>
                  <td>{item.seikatu ==="無効" ? "無効" :"有効"}</td>
                </tr>
                  );
                  })}
                
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      <Pagination
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item'}            
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Home;
