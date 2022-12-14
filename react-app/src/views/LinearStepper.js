import React, { useState } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import {
  Typography,
  TextField,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
  List,
  FormText,
  ListGroup,
} from "reactstrap";

import MultiSelect from  'react-multiple-select-dropdown-lite';

import  'react-multiple-select-dropdown-lite/dist/index.css';

import "../assets/css/style.css";

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';


import { Checkbox } from 'primereact/checkbox';

import Popup from "../components/dashboard/Popup";
import PopupFit from "../components/dashboard/PopupFit";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "案件登録",
    "ビジネスドライバー・Fitの選択",
    "コンピテンシー選択",
    "結果確認",
  ];
}

function getStepContent(step, setOpenPopup,setOpenPopupFit) {
  const { t }  = useTranslation(['page']);
  const url="https://rtsssubject.azurewebsites.net/api/HttpTrigger2";
 
  const [data,setData] = useState({
    subjectID:"",
    subjectname:"",
    startdate:"",
    enddate:"",
    subjectgroup:"",
    name:""
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url,{
      subjectID: data.subjectID,
      subjectname: data.subjectname,
      startdate: data.startdate,
      enddate: data.enddate,
      subjectgroup: data.subjectgroup,
      name: data.name
    })
      .then(res =>{
          console.log("tjdrhd??")
          console.log(res.data)
      })
  }

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] =e.target.value
    setData(newdata)
    console.log(newdata)
  }
  const  options  = [
    { label:  'Option 1', value:  'option_1'  },
    { label:  'Option 2', value:  'option_2'  },
    { label:  'Option 3', value:  'option_3'  },
    { label:  'Option 4', value:  'option_4'  },
  ]

  const [val,setVal] = React.useState([]);
  
  const  handleChange  = e => {
    if (val.includes(e.target.value)) {
      setVal(val.filter(item => item !== e.target.value));
    } else {
      setVal([...val, e.target.value]);
     }
     chkcol();
  };
  function chkcol(){
   var chksub= document.getElementsByClassName(`chk`);
   for(let i=0;i<chksub.length;i++){
    if(chksub[i].checked == true){
      document.getElementsByName("subc")[i].className="change";
      console.log("??",i,chksub[i].checked,chksub[i].value)
    }else{
      document.getElementsByName("subc")[i].className="unchange";
      console.log("??",i,chksub[i].checked,chksub[i].value)
    }
    
   }
  }

  switch (step) {
    case 0:
      return (
        <Row>
          <Col>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-bell me-2"> </i>
                案件情報
              </CardTitle>
              <CardBody>
                <Form onSubmit={(e)=>submit}>
                  <FormGroup>
                    <Label for="exampleEmail">{t("page:home.subjectid")}</Label>
                    <Input
                      onChange={(e)=>handle(e)} value={data.subjectID}
                      id="subjectID" 
                      name="subjectID"
                      placeholder={t("page:text")}
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">{t("page:home.subjectname")}</Label>
                    <Input
                     onChange={(e)=>handle(e)} value={data.subjectname}
                      id="subjectname"
                      name="subjectname"
                      placeholder="必須"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">案件グループ</Label>
                    <Input id="subjectgroup" name="subjectgroup" type="select" >
                      <option value={data.subjectgroup}>1</option>
                      <option value={data.subjectgroup}>2</option>
                      <option value={data.subjectgroup}>3</option>
                      <option value={data.subjectgroup}>4</option>
                      <option value={data.subjectgroup}>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">説明</Label>
                    <Input id="name" name="name" type="textarea" onChange={(e)=>handle(e)} value={data.text} />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">添付</Label>
                    <Input id="name" name="upload" type="file"  />
                  </FormGroup>
                  <FormGroup>
                    <Button onClick={submit}>submit(任意)</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );

    case 1:
      return (
        <Row>
          <Col>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
              <CardBody>
                <Form>
                {/* border-bottom p-3 mb-0 */}
                  <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                  {t("businessdriver")}
                    <Button className="btn-1 btn-sm" color="primary" onClick={() => { setOpenPopup(true); }}>クリック</Button>
                      <List className="Linearlihtml1">
                        <li>(説明と指示文：未作成)</li>
                        <li>コンピテンシーを選択してください。選択されたビジネスドライバーに関連性が高いものから順に表示しています。</li>
                        <li>コンピテンシーとは、ｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘ。</li>
                      </List>
                  </CardTitle>
                </Form>
                  <div id="test" className="testlist"></div>                      
                  </CardBody>
              <CardBody>
                <Form>
                  <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                    Fit
                    <Button className="btn-1 btn-sm" color="primary" onClick={() => { setOpenPopupFit(true); }}>クリック</Button>
                      <List className="Linearlihtml1">
                        <li>(説明と指示文：未作成)</li>
                        <li>組織適合の要素を最大３つまで選択してください。色分けされた３つのカテゴリから一つバランス良く選択することを推奨します。</li>
                        <li>組織適合とは、ｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘ。</li>
                      </List>
                  </CardTitle>
                </Form>
                  <div id="test2" className="testlist"></div>
              </CardBody>
            </Card>     
          </Col>
        </Row>
      );
    case 2:
      return (
        <div>
          {/***Table ***/}
          <Row>
            <Col lg="12">
              <Card id="mycard">
                <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                  <i className="bi bi-card-text me-2"> </i>
                  コンピテンシー選択
                </CardTitle>
                <CardBody className="">
                  <Row className="konpitextbox">  
                      <Col md='6' >                           
                        <List className="LinearliBD">
                          <li className="BDTitle">選択したビジネスドライバー</li>
                          <li className="Linearlib">成果重視型の文化の構築</li>
                          <li className="Linearlib">顧客重視の風土形成</li>
                          <li className="Linearlib">戦略的なビジネス提携（アライアンス）の構築（社外／組織外）</li>
                        </List>
                      </Col>
                      <Col md='6'>                           
                        <List className="LinearliBD">
                          <li className="BDTitle">職務</li>
                          <li className="Linearlib">セールス・ディレクター</li>                      
                        </List>
                        <Row>
                          <Col sm>
                            <List className="LinearliBD">
                              <li className="BDTitle">職務ステージ</li>
                              <li className="Linearlib">Lv5</li>
                            </List>
                          </Col>
                        </Row>
                      </Col>
                </Row>              
              <h5 className="konpititle3">コンピテンシー選択欄</h5>
              <Row>
                <Col md='10'>
                  <Table className="table table-bordered tablechk" >
                    <tbody>
                      <tr>
                        <td className="bhidden1">高</td>
                        <td>
                          <ul className="konpi3">
                            <li>
                              <label name="subc" className="unchange" >
                                <input type={"checkbox"} className="chk chkmargin" value="業務運営上の意思決定" onChange={handleChange} checked={val.includes('業務運営上の意思決定')} />
                                業務運営上の意思決定
                             </label>
                            </li>
                          </ul>                         
                        </td>
                        <td>
                          <ul className="konpi3">
                            <li>
                              <label name="subc" className="unchange">
                                <input type={"checkbox"} className="chk chkmargin" value="財務感覚" onChange={handleChange} checked={val.includes('財務感覚')} />
                                財務感覚
                             </label>
                            </li>
                          </ul>                         
                        </td>
                        <td>
                          <ul className="konpi3">
                            <li>
                              <label name="subc" className="unchange">
                                <input type={"checkbox"} className="chk chkmargin" value="戦略的方向性の設定" onChange={handleChange} checked={val.includes('戦略的方向性の設定')} />
                                戦略的方向性の設定
                              </label>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="bhidden1" >BDスコア</td>
                        <td>
                          <ul className="konpi3">
                            <li>
                              <label  name="subc" className="unchange">
                                <input type={"checkbox"} className="chk chkmargin" value="起業家感覚" onChange={handleChange} checked={val.includes('起業家感覚')} />
                                起業家感覚
                              </label>
                            </li>
                            <li>
                              <label  name="subc" className="unchange">
                                <input type={"checkbox"} className="chk chkmargin" value="変革リーダーシップ" onChange={handleChange} checked={val.includes('変革リーダーシップ')} />
                                変革リーダーシップ
                             </label>
                            </li>
                          </ul>
                        </td>
                        <td >
                          <ul className="konpi3">
                            <li> 
                              <label name="subc" className="unchange">
                                <input type={"checkbox"} className="chk chkmargin" value="ビジネス手腕" onChange={handleChange} checked={val.includes('ビジネス手腕')} />
                                ビジネス手腕
                             </label>
                            </li>
                          </ul>
                        </td>  
                        <td></td>                      
                      </tr>
                      <tr>
                        <td className="bhidden1">低</td>
                        <td>
                          <ul className="konpi3">
                            <li>
                              <label name="subc" className="unchange">
                              <input type={"checkbox"} className="chk chkmargin" value="組織の鼓舞・活性化" onChange={handleChange} checked={val.includes('組織の鼓舞・活性化')} />
                              組織の鼓舞・活性化
                              </label>
                            </li>
                            <li>
                              <label name="subc" className="unchange">
                                <input type={"checkbox"} className="chk chkmargin" value="意思決定" onChange={handleChange} checked={val.includes('意思決定')} />
                                意思決定
                              </label>
                            </li>
                            <li>
                              <label name="subc" className="unchange">
                                <input type={"checkbox"} className="chk chkmargin" value="ロジカル・コミュニケーション" onChange={handleChange} checked={val.includes('ロジカル・コミュニケーション')} />
                                ロジカル・コミュニケーション
                              </label>
                            </li>
                          </ul>                      
                        </td>   
                        <td></td>
                        <td>
                          <ul className="konpi3">
                            <li>
                              <label name="subc" className="unchange">
                              <input type={"checkbox"} className="chk chkmargin" value="説得力のあるコミュニケーション" onChange={handleChange} checked={val.includes('説得力のあるコミュニケーション')} />
                              説得力のあるコミュニケーション
                              </label>
                            </li>
                          </ul>                        
                        </td>
                      </tr>     
                      <tr>
                        <td ></td>
                        <td className="bhidden2">低</td>
                        <td className="bhidden2">JOBスコア</td>
                        <td className="bhidden2 bh2r">高</td>
                      </tr>          
                    </tbody>
                  </Table>
                </Col>
                <Col className="checkcol">
                  <List className="checklistcall"> {/*checklistcall */}
                    {/* checklist呼ぶ */}
                    {val.map((c)=>(
                      <li className="change">{c}</li>
                    ))}
                      
                  </List>
                </Col>                
              </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>  
        </div>
      );
    case 3:
      return (
        <Row>
          <Col>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-bell me-2"> </i>
                結果確認
              </CardTitle>
              <CardBody>
                <Form>
                  <FormGroup>
                    <div style={{ display: 'block', width: 700, padding: 10}}>
                      <h4>案件情報</h4>
                      <List className="Linearli">
                        <li>案件名:OO募集</li>
                        <li>期間:YYYY/MM/DD-YYYY/MM/DD</li>
                        <li>説明:</li>                        
                      </List>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div style={{ display: 'block', width: 700, padding: 10}}>
                      <h4>{t("page:businessdriver")}</h4>
                      <List className="Linearli">
                        <li className="Linearlibi">未来を描く</li>
                          <List>
                            <li>新組織の総合</li>
                          </List>
                        <li className="Linearlibi">実行</li>
                          <List>
                            <li>OOOOOO</li>
                          </List>
                        <li className="Linearlibi">パフォーマンスの向上</li>
                          <List>
                            <li>OOOOOO</li>
                            <li>OOOOOO</li>
                          </List>
                        <li className="Linearlibi">ビジネスの向上</li>
                          <List>
                            <li>OOOOOO</li>
                          </List>
                      </List>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div style={{ display: 'block', width: 700, padding: 10}}>
                      <h4>Fit</h4>
                      <List className="Linearli">
                        <li className="Linearlibi">職務適合</li>
                            <List>
                              <li>OOOOOO</li>
                              <li>OOOOOO</li>
                            </List>
                        <li className="Linearlibi">組織適合</li>
                          <List>
                              <li>OOOOOO</li>
                              <li>OOOOOO</li>
                          </List>
                      </List>
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <div style={{ display: 'block', width: 700, padding: 10}}>
                      <h4>コンピテンシー</h4>
                      <List className="Linearli">
                        <li className="Linearlibi">戦略実施の推進</li>
                          <List className="Linearli">
                              <li className="Linearlikon">戦略的優先事項を現実の日常業務運営レベルの実施計画に落とし込む。関係者へのコミュニケーション、関係者の責任、人的資源の能力、組織内のプロセス、および継続的成果測定のための仕組みを最適化して、
                                戦略的優先事項が測定可能かつ持続可能な成果を生み出すようにする。</li>
                          </List>
                        <li className="Linearlibi">インタビューリスト</li>
                          <List className="Linearli">
                              <li className="Linearlikon">重要なリソースが複数の拠点に分散している場合、戦略的目標を確実に実行することは困難です。戦略的目標を達成するために、
                              異なる拠点のリソースを調整する必要があったときのことについて教えて下さい。</li>
                              <li className="Linearlikon">組織のビジョンを実践的な行動計画に落とし込む必要があった時のことを教えて下さい。</li>
                              <li className="Linearlikon">すべての新しい戦略が意図したとおりの結果を出すとは限りません。あなたが実行した戦略が目標を達成できなかった時のことについて教えて下さい。
                                目標を達成できなかった理由はなぜですか？どのような教訓を得られたでしょうか。</li>
                          </List>
                        <li className="Linearlibi">{t("page:bars")}</li>
                          <List className="Linearli">
                              <li>Lv5</li>
                                <List className="Linearlikon-l">
                                  <li>各自が与えられた責任の重要性を理解できるような、
                                    魅力的な双方向型コミュニケーション戦略を実施する。</li>
                                </List>                            
                          </List>
                      </List>
                    </div>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
      //fit コンピテンシー選択 page 
    case 4:
      return(
        <Row>
          <Col>
            {/* --------------------------------------------------------------------------------*/}
            {/* Card-1*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-bell me-2"> </i>
                Fit
              </CardTitle>
              <CardBody className="LinearP4">              
                  <List className="Linearlihtml">
                    <li>(説明と指示文：未作成)</li>
                    <li>コンピテンシーを選択してください。選択されたビジネスドライバーに関連性が高いものから順に表示しています。</li>
                    <li>コンピテンシーとは、ｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘ。</li>
                  </List>
                  <List className="LinearliBD">
                      <li className="BDTitle">選択済ビジネスドライバー（BD）</li>
                      <li>BD1：</li>
                      <li>BD2：</li>
                      <li>BD3：</li>
                      <li>BD4：</li>
                      <li>BD5：</li>
                      <li>BD6：</li>
                    </List>
                <Table bordered striped className="tb-center">
                  <thead>
                    <tr>
                      <th></th>
                      <th>順位</th>
                      <th>{t("page:businessdriver")}</th>
                      <th>BD1</th>
                      <th>BD2</th>
                      <th>BD3</th>
                      <th >BD4</th>
                      <th>BD5</th>
                      <th>BD6</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>1</td>
                      <td>パートナーシップ形成</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>2</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>3</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>4</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>   
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>     
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>6</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>                      
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
      default:
      return "unknown step";
  }
}

//ビジネスドライバー
const info = (selectedUs, selectedCategories, selectedJapan, selectedKorea) => {

  return (
    <div>
      {/* <div className="card"> */}
      <div className="">
        <h5 className="_h5 h5-1 jw">未来を描く</h5>
        {
          selectedUs.map((category) => {
              return (
                  <div key={category.key} className="field-checkbox field-checkbox-1 jwsita">
                      <label htmlFor={category.key}>{category.name}</label>
                  </div>
              )
          })
        }

        <h5 className="_h5 h5-2">実行</h5>
        {
          selectedCategories.map((category) => {
              return (
                  <div key={category.key} className="field-checkbox field-checkbox-2">
                      <label htmlFor={category.key}>{category.name}</label>
                  </div>
              )
          })
        }

        <h5 className="_h5 h5-3">パフォーマンスの向上</h5>
        {
          selectedJapan.map((category) => {
              return (
                  <div key={category.key} className="field-checkbox field-checkbox-3">
                      <label htmlFor={category.key}>{category.name}</label>
                  </div>
              )
          })
        }
         
        <h5 className="_h5 h5-4">ビジネスの成長</h5>
        {
          selectedKorea.map((category) => {
            return (
                <div key={category.key} className="field-checkbox field-checkbox-4">
                    <label htmlFor={category.key}>{category.name}</label>
                </div>
            )
          })
        }
      </div>
    </div>
  )
}

//Fit
const infoFit = (selectedBlue, selectedOrange, selectedGreen) => {

  return (
    <div>
      <div className="card">

        <h5 className="_h5 h5-1">未来を描く</h5>
        {
          selectedBlue.map((category) => {
              return (
                  <div key={category.key} className="field-checkbox field-checkbox-1">
                      <label htmlFor={category.key}>{category.name}</label>
                  </div>
              )
          })
        }

        <h5 className="_h5 h5-2">実行</h5>
        {
          selectedOrange.map((category) => {
              return (
                  <div key={category.key} className="field-checkbox field-checkbox-2">
                      <label htmlFor={category.key}>{category.name}</label>
                  </div>
              )
          })
        }

        <h5 className="_h5 h5-3">パフォーマンスの向上</h5>
        {
          selectedGreen.map((category) => {
              return (
                  <div key={category.key} className="field-checkbox field-checkbox-3">
                      <label htmlFor={category.key}>{category.name}</label>
                  </div>
              )
          })
        }
         
        {/* <h5 className="_h5 h5-4">ビジネスの成長</h5>
        {
          selectedBlack.map((category) => {
            return (
                <div key={category.key} className="field-checkbox field-checkbox-4">
                    <label htmlFor={category.key}>{category.name}</label>
                </div>
            )
          })
        } */}
      </div>
    </div>
  )
}

//Fit
const CheckboxDemoFit = (props) => {
  const { setOpenPopupFit } = props;
  const blue = [{name: '行動志向', key: 'C'}, {name:'問題提起の奨励', key: 'H'}, {name: '方針・手続きの証明化', key: 'D'}, {name: '継続的な改善', key: 'S'},
  {name: '部門間協力', key: 'A'},{name: '少数精鋭', key: 'J'},{name:'主体的参画の奨励', key: 'U'}];
  const orange = [{name: '', key: 'A'}, {name: '', key: 'M'}, {name: '', key: 'P'}, {name: '', key: 'R'}];
  const green = [{name: '', key: 'T'}, {name: '', key: 'O'}, {name: '', key: 'K'}, {name: '', key: 'S'}];
  // const black = [{name: '', key: 'S'}, {name: '', key: 'B'}, {name: '', key: 'D'}, {name: '', key: 'I'}];
  const [selectedBlue, setSelectedBlue] = useState([]);
  const [selectedOrange, setSelectedOrange] = useState([]);
  const [selectedGreen, setSelectedGreen] = useState([]);
  // const [selectedBlack, setSelectedBlack] = useState([]);
  

  const onOrangeChange = (e) => {
    let _selectedOrange = [...selectedOrange];

    if (e.checked) {
      _selectedOrange.push(e.value);
    }
    else {
        for (let i = 0; i < _selectedOrange.length; i++) {
            const selectedCategory = _selectedOrange[i];

            if (selectedCategory.key === e.value.key) {
              _selectedOrange.splice(i, 1);
                break;
            }
        }
    }

    setSelectedOrange(_selectedOrange);

  }



  const onBlueChange = (e) => {
    let _selectedBlue = [...selectedBlue];

    if (e.checked) {
      _selectedBlue.push(e.value);
    }
    else {
        for (let i = 0; i < _selectedBlue.length; i++) {
            const selectedCategory = _selectedBlue[i];

            if (selectedCategory.key === e.value.key) {
              _selectedBlue.splice(i, 1);
              break;
            }
        }
    }

    setSelectedBlue(_selectedBlue);
  }


  const onGreenChange = (e) => {
    let _selectedGreen = [...selectedGreen];

    if (e.checked) {
      _selectedGreen.push(e.value);
    }
    else {
      for (let i = 0; i < _selectedGreen.length; i++) {
          const selectedCategory = _selectedGreen[i];

          if (selectedCategory.key === e.value.key) {
            _selectedGreen.splice(i, 1);
            break;
          }
      }
    }

    setSelectedGreen(_selectedGreen);
  }


  // const onKoreaChange = (e) => {
  //   let _selectedBlack = [...selectedBlack];

  //   if (e.checked) {
  //     _selectedBlack.push(e.value);
  //   }
  //   else {
  //     for (let i = 0; i < _selectedBlack.length; i++) {
  //         const selectedCategory = _selectedBlack[i];

  //         if (selectedCategory.key === e.value.key) {
  //           _selectedBlack.splice(i, 1);
  //           break;
  //         }
  //     }
  //   }

  //   setSelectedBlack(_selectedBlack);
  // }


  const showInfoFit = (e) => {
    ReactDOM.render(
      infoFit(selectedBlue, selectedOrange, selectedGreen),   
      document.getElementById("test2")
    );
    setOpenPopupFit(false);
  }

  return (
    <div>
        <Form>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            Fit
            <Button className="btn-1" color="primary" onClick={showInfoFit}>クリック</Button>
          </CardTitle>
        </Form>
        <div className="card">

        <h5 className="_h5 h5-1">仕事・課題の進め方</h5>
          {
            blue.map((blueItem) => {
              return (
                <div key={blueItem.key} className="field-checkbox field-checkbox-1">
                    <Checkbox inputId={blueItem.key} name="blueItem" value={blueItem} onChange={onBlueChange} checked={selectedBlue.some((item) => item.key === blueItem.key)} />
                    <label htmlFor={blueItem.key}>{blueItem.name}</label>
                </div>
              )
            })
          }

          <h5 className="_h5 h5-2">仕組み・制度</h5>
          {
                orange.map((orange) => {
                    return (
                        <div key={orange.key} className="field-checkbox field-checkbox-2">
                            <Checkbox inputId={orange.key} name="orange" value={orange} onChange={onOrangeChange} checked={selectedOrange.some((item) => item.key === orange.key)} />
                            <label htmlFor={orange.key}>{orange.name}</label>
                        </div>
                    )
                })
            }

            <h5 className="_h5 h5-3">企業全体として大切にすること</h5>
            {
              green.map((greenItem) => {
                  return (
                    <div key={greenItem.key} className="field-checkbox field-checkbox-3">
                        <Checkbox inputId={greenItem.key} name="greenItem" value={greenItem} onChange={onGreenChange} checked={selectedGreen.some((item) => item.key === greenItem.key)}/>
                        <label htmlFor={greenItem.key}>{greenItem.name}</label>
                    </div>
                  )
              })
            }

{/*             
            <h5 className="_h5 h5-4">ビジネスの成長</h5>
            {
              korea.map((koreaItem) => {
                  return (
                    <div key={koreaItem.key} className="field-checkbox field-checkbox-4">
                      <Checkbox inputId={koreaItem.key} name="korea" value={koreaItem} onChange={onKoreaChange} checked={selectedKorea.some((item) => item.key === koreaItem.key)}/>
                      <label htmlFor={koreaItem.key}>{koreaItem.name}</label>
                    </div>
                  )
              })
            } */}
        </div>
    </div>
  )
}

//ビジネスドライバー
const CheckboxDemo = (props) => {
  const { setOpenPopup } = props;
  const us = [{name: '新組職の総合', key: 'C'}, {name: '新組戦略の立案', key: 'H'}, {name: '組織の抜本的な変革(パラダイムシフト)', key: 'D'}, {name: '運営コストの管理と削減', key: 'S'},
  {name: 'アライメント(整合性)とアカウンタビリティの作成', key: 'A'}];
  const categories = [{name: 'Test1', key: 'A'}, {name: 'Test2', key: 'M'}, {name: '', key: 'P'}, {name: '', key: 'R'}];
  const japan = [{name: 'Test1', key: 'T'}, {name: 'Test2', key: 'O'}, {name: '', key: 'K'}, {name: '', key: 'S'}];
  const korea = [{name: 'Test1', key: 'S'}, {name: 'Test2', key: 'B'}, {name: '', key: 'D'}, {name: '', key: 'I'}];
  const [selectedUs, setSelectedUs] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedJapan, setSelectedJapan] = useState([]);
  const [selectedKorea, setSelectedKorea] = useState([]);
  

  const onCategoryChange = (e) => {
    let _selectedCategories = [...selectedCategories];

    if (e.checked) {
        _selectedCategories.push(e.value);
    }
    else {
        for (let i = 0; i < _selectedCategories.length; i++) {
            const selectedCategory = _selectedCategories[i];

            if (selectedCategory.key === e.value.key) {
                _selectedCategories.splice(i, 1);
                break;
            }
        }
    }

    setSelectedCategories(_selectedCategories);

  }



  const onUsChange = (e) => {
    let _selectedUs = [...selectedUs];

    if (e.checked) {
      _selectedUs.push(e.value);
    }
    else {
        for (let i = 0; i < _selectedUs.length; i++) {
            const selectedCategory = _selectedUs[i];

            if (selectedCategory.key === e.value.key) {
              _selectedUs.splice(i, 1);
              break;
            }
        }
    }

    setSelectedUs(_selectedUs);
  }


  const onJapanChange = (e) => {
    let _selectedJapan = [...selectedJapan];

    if (e.checked) {
      _selectedJapan.push(e.value);
    }
    else {
      for (let i = 0; i < _selectedJapan.length; i++) {
          const selectedCategory = _selectedJapan[i];

          if (selectedCategory.key === e.value.key) {
            _selectedJapan.splice(i, 1);
            break;
          }
      }
    }

    setSelectedJapan(_selectedJapan);
  }


  const onKoreaChange = (e) => {
    let _selectedKorea = [...selectedKorea];

    if (e.checked) {
      _selectedKorea.push(e.value);
    }
    else {
      for (let i = 0; i < _selectedKorea.length; i++) {
          const selectedCategory = _selectedKorea[i];

          if (selectedCategory.key === e.value.key) {
            _selectedKorea.splice(i, 1);
            break;
          }
      }
    }

    setSelectedKorea(_selectedKorea);
  }


  const showInfo = (e) => {
    ReactDOM.render(
      info(selectedUs, selectedCategories, selectedJapan, selectedKorea),   
      document.getElementById("test")
    );
    setOpenPopup(false);
  }
 
  return (
    <div>
        <Form>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            ビジネスドライバー
            <Button className="btn-1" color="primary" onClick={showInfo}>クリック</Button>
          </CardTitle>
        </Form>
        <div className="card">

        <h5 className="_h5 h5-1">未来を描く</h5>
          {
            us.map((usItem) => {
              return (
                <div key={usItem.key} className="field-checkbox field-checkbox-1">
                    <Checkbox inputId={usItem.key} name="usItem" value={usItem} onChange={onUsChange} checked={selectedUs.some((item) => item.key === usItem.key)} />
                    <label htmlFor={usItem.key}>{usItem.name}</label>
                </div>
              )
            })
          }

          <h5 className="_h5 h5-2">実行</h5>
          {
                categories.map((category) => {
                    return (
                        <div key={category.key} className="field-checkbox field-checkbox-2">
                            <Checkbox inputId={category.key} name="category" value={category} onChange={onCategoryChange} checked={selectedCategories.some((item) => item.key === category.key)} />
                            <label htmlFor={category.key}>{category.name}</label>
                        </div>
                    )
                })
            }

            <h5 className="_h5 h5-3">パフォーマンスの向上</h5>
            {
              japan.map((japanItem) => {
                  return (
                    <div key={japanItem.key} className="field-checkbox field-checkbox-3">
                        <Checkbox inputId={japanItem.key} name="japan" value={japanItem} onChange={onJapanChange} checked={selectedJapan.some((item) => item.key === japanItem.key)}/>
                        <label htmlFor={japanItem.key}>{japanItem.name}</label>
                    </div>
                  )
              })
            }

            
            <h5 className="_h5 h5-4">ビジネスの成長</h5>
            {
              korea.map((koreaItem) => {
                  return (
                    <div key={koreaItem.key} className="field-checkbox field-checkbox-4">
                      <Checkbox inputId={koreaItem.key} name="korea" value={koreaItem} onChange={onKoreaChange} checked={selectedKorea.some((item) => item.key === koreaItem.key)}/>
                      <label htmlFor={koreaItem.key}>{koreaItem.name}</label>
                    </div>
                  )
              })
            }
        </div>
    </div>
  )
}


const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [openPopupFit, setOpenPopupFit] = useState(false);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                {/* optional */}
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          {getStepContent(activeStep, setOpenPopup,setOpenPopupFit)}
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            戻る
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "次へ"}
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            保存
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            補足情報表示
          </Button>
        </>
      )}
     
      <PopupFit title="組織適合Fit" openPopupFit={openPopupFit} setOpenPopupFit={setOpenPopupFit}>
      <CheckboxDemoFit setOpenPopupFit={setOpenPopupFit} />
      </PopupFit>
      <Popup title="ビジネスドライバー" openPopup={openPopup} setOpenPopup={setOpenPopup}>
      <CheckboxDemo setOpenPopup={setOpenPopup} />
      </Popup>
    </div>
  );
};

export default LinaerStepper;
