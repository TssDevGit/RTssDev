import { Row, Col, Button, Form, Table, Card, CardTitle, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";
import Tsearch from "../components/dashboard/Search";
import { useTranslation } from 'react-i18next';
const Home = () => {
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
              <Button className="btn-1" color="primary" onClick={routeChange}>{t(`page:home.create`)}</Button>
              <Button className="btn-1" color="secondary" onClick={() => {  }}>{t(`page:home.copy`)}</Button>
              <Button className="btn-1" color="danger" onClick={() => {  }}>{t(`page:home.delete`)}</Button>       
            </Col>          
            </Row> 
        </CardTitle>
      </Form>

      {/***Table ***/}
      <Col lg="12">
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-card-text me-2"> </i>
            案件一覧
          </CardTitle>
          <CardBody className="">
            <Table bordered striped className="tb-center">
              <thead className="homeichiran">
                <tr>
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
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>2022年度○○募集 A</td>
                  <td>2022/8/1</td>
                  <td>2022/12/31</td>
                  <td >✔</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>案件B</td>
                  <td>2022/8/1</td>
                  <td>2022/12/31</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td>無効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>案件C</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>案件D</td>
                  <td>2023/1/1</td>
                  <td>2021/4/1</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td></td>
                  <td>✔</td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>案件E</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>案件F</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>案件G</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>案件H</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
                <tr>
                  <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                  <td>案件I</td>
                  <td>2023/1/1</td>
                  <td>2023/3/31</td>
                  <td>✔</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>有効</td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Home;
