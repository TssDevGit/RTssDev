import { Row, Col, Button, Form, Table, Card, CardTitle, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import Tsearch from "../components/dashboard/Search";
import { useTranslation } from 'react-i18next';
import Pagination from 'react-paginate';
import { useEffect,useState } from "react";
import { FALSE } from "node-sass";


const Home = () => {
  const cc ={
    data:[
      {
        id:"1234567800001",
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
        id:"1234567800002",
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
        id:"1234567800003",
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

  
  const handlePageClick = (data)=>{
    console.log(data.selected);
  }
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/register`; 
    navigate(path);
  }
  const { t }  = useTranslation(['page'])

  const[tdata,setData] =useState([]);
  useEffect(()=>{
    (async function(){
      const body = await (await fetch(`https://rtssdev.azurewebsites.net/api/rTest`)).json();
      setData(body);
    })();
  },[]);
  console.log(tdata[0]);
  console.log(tdata.length);
 
 
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
                  <th className="">ID</th>
                  <th className="anken">{t(`page:home.subjectname`)}</th>
                  <th>{t(`page:home.updateuser`)}</th>
                  <th>{t(`page:home.updatedate`)}</th>
                  <th className="chline">{t(`page:home.status`)}</th>
                  <th className="chline">{t(`page:home.selectcondition`)}</th>
                  <th className="default">{t(`page:home.jobstage`)}</th>
                </tr>
              </thead>
              <tbody>
                  {tdata.map((item)=>{return (
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>{item.SubjectID}</td>
                  <td>{item.SubjectName}</td>
                  <td>担当A</td>
                  <td>2022/07/31</td>                   
                  <td>{item.PrintStatus}</td>
                  <td>{item.konpi ===1 ? "✔":" "}</td>
                  <td>{item.print ===1 ? "✔":" "}</td>
                  <td>{item.csv ===1 ? "✔":" "}</td>
                  <td></td>
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
