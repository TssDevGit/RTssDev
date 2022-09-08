import React, { useState } from "react";
import ReactDOM from "react-dom";

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

function getStepContent(step, setOpenPopup) {
  
  const  options  = [
    { label:  'Option 1', value:  'option_1'  },
    { label:  'Option 2', value:  'option_2'  },
    { label:  'Option 3', value:  'option_3'  },
    { label:  'Option 4', value:  'option_4'  },
  ]

  const  handleOnchange  =  val  => {
 
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
                <Form>
                  <FormGroup>
                    <Label for="exampleEmail">案件ID</Label>
                    <Input
                      id="nm1"
                      name="name"
                      placeholder="入力してください"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">案件名</Label>
                    <Input
                      id="nm2"
                      name="name"
                      placeholder="必須"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">開始日</Label>
                    <Input
                      id="date1"
                      name="password"
                      placeholder="必須"
                      type="date"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">終了日</Label>
                    <Input
                      id="date2"
                      name="date2"
                      placeholder="必須"
                      type="date"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">案件グループ</Label>
                    <Input id="exampleSelect" name="select" type="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">説明</Label>
                    <Input id="exampleText" name="text" type="textarea" />
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
                    ビジネスドライバー
                    <Button className="btn-1" color="primary" onClick={() => { setOpenPopup(true); }}>クリック</Button>
                  </CardTitle>
                </Form>
                  <div id="test"></div>                      
                  </CardBody>
              <CardBody>
                <Form>
                  <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                    Fit
                    <Button className="btn-1" color="primary" onClick={() => { setOpenPopup(true); }}>クリック</Button>
                  </CardTitle>
                </Form>
                  <div id="test2"></div>
              </CardBody>
            </Card>     
          </Col>
        </Row>
      );
    case 2:
      return (
        <div>
          {/***Table ***/}
          <Col lg="12">
            <Card>
              <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                <i className="bi bi-card-text me-2"> </i>
                コンピテンシー選択
              </CardTitle>
              <CardBody className="">              
                  <List className="Linearlihtml">
                    <li>(説明と指示文：未作成)</li>
                    <li>コンピテンシーを選択してください。選択されたビジネスドライバーに関連性が高いものから順に表示しています。</li>
                    <li>コンピテンシーとは、ｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘｘ。</li>
                  </List>
                  <List className="LinearliBD">
                      <li className="BDTitle">選択済ビジネスドライバー（BD）</li>
                      <li>BD1：成果重視型の文化の構築</li>
                      <li>BD2：顧客重視の風土形成</li>
                      <li>BD3：戦略的なビジネス提携（アライアンス）の構築（社外／組織外）</li>
                      <li>BD4：</li>
                      <li>BD5：</li>
                      <li>BD6：</li>
                    </List>
                <Table bordered striped className="tb-center">
                  <thead>
                    <tr>
                      <th></th>
                      <th>順位</th>
                      <th>コンピテンシー名</th>
                      <th  className="BDketka1">BD1</th>
                      <th  className="BDketka2">BD2</th>
                      <th  className="BDketka3">BD3</th>
                      <th  className="BDketka4">BD4</th>
                      <th  className="BDketka5">BD5</th>
                      <th  className="BDketka6">BD6</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>1</td>
                      <td>パートナーシップ形成</td>
                      <td>O</td>
                      <td>O</td>
                      <td>O</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>2</td>
                      <td>他者の目標設定変更</td>
                      <td>O</td>
                      <td></td>
                      <td>O</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>3</td>
                      <td>変革推進</td>
                      <td></td>
                      <td>O</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <th scope="row"><input type="checkbox" id="topping" name="topping" value="Paneer" /></th>
                      <td>4</td>
                      <td>チーム構築</td>
                      <td>O</td>
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
                <List className="LinearliBD">
                      <li className="BDTitle">選択済ビジネスドライバー（Fit）</li>
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
                      <th>コンピテンシー名</th>
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
                      <h4>ビジネスドライバー</h4>
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
                        <li className="Linearlibi">BARS</li>
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
                      <th>コンピテンシー名</th>
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
const infoFit = (selectedBlue, selectedOrange, selectedGreen, selectedBlack) => {

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
         
        <h5 className="_h5 h5-4">ビジネスの成長</h5>
        {
          selectedBlack.map((category) => {
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
const CheckboxDemoFit = (props) => {
  const { setOpenPopup } = props;
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
    setOpenPopup(false);
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
                    <Checkbox inputId={blueItem.key} name="blueItem" value={blueItem} onChange={onBlueChange} checked={selectedBlue.some((item) => item.key === BlueItem.key)} />
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
          {getStepContent(activeStep, setOpenPopup)}
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
     
      <Popup title="組織適合Fit" openPopup={openPopup} setOpenPopup={setOpenPopup}>
      <CheckboxDemoFit setOpenPopup={setOpenPopup} />
      </Popup>
      <Popup title="ビジネスドライバー" openPopup={openPopup} setOpenPopup={setOpenPopup}>
      <CheckboxDemo setOpenPopup={setOpenPopup} />
      </Popup>
    </div>
  );
};

export default LinaerStepper;
