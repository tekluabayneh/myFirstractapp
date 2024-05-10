import logo from "./logo.svg";
import "./App.css";
import Jxs from "./component/Jsx";
import Hi from "./component/class_comp";
import { Name } from "./component/fnctional_comp";
import Fullname from "./component/props";
import Subscribe from "./component/state";
import Event_on_functional_comp from "./component/Event_on_functional_comp";
import Event_on_class from "./component/event_on_class";

import Getname from "./component/grtting";
import Fullnavbar1 from "./component/heading";
import Kipper from "./component/kipper-app";
import Card from "./component/card";
import Array_container from "./component/array.info-container";
import Fancycard from "./component/fancy_imo_card";
import Truker from "./component/imogy_array";
import Kipper_component from "./component/kipper-app_comp";
import props from "./component/props";
import User from "./component/user_input";
import Plusbtn from "./component/Plus_btn_comp";
import Randomtime from "./component/rabdomTime";
import Table from "./component/Table";
import Method_and_State from "./component/State_and_Method";
import To_doList from "./component/DO-LIST-APP";
/* function name(concat) {
  return (
    <Card
      key={concat.id}
      name={concat.name}
      tel={concat.tel}
      email={concat.email}
      img={concat.img}
    />
  );
} */
/* const Fancy = (FancFcon) => (
  <Fancycard
    key={FancFcon.id}
    img={FancFcon.img}
    heading={FancFcon.heading}
    paragraph={FancFcon.paragraph}
  />
);
 */
/* function Fancy(FancFcon) {
  return (
    <Fancycard
      key={FancFcon.id}
      img={FancFcon.img}
      heading={FancFcon.heading}
      paragraph={FancFcon.paragraph}
    />
  );
}
 */
/* const maped = Truker.map((Truker) => {
  return Truker.paragraph.substring(0, 100);
});
 */
/* function forkiper(kip) {
  return <Kipper title={kip.title} paragraph={kip.paragraph} />;
} */

function App() {
  return (
    <div className="App">
      {/* <Event_on_functional_comp /> */}
      {/*  <Hi />
        <Name />   */}
      {/* <Jxs /> */}
      {/*    <Fullname name="martha" age="12">
        <p>my name</p>
        <button>click me</button>
      </Fullname>
      <Fullname name="teklu" age="12" sex="male" />
      <Fullname name="kidus" age="12" sex="female" />
      <Subscribe />
      <Event_on_class />
      <Getname />
      <Fullnavbar1 /> */}
      {/* =========================================================================================
                                kipper component
      =======================================================================================*/}
      {/*       <Kipper title={props.title} paragrapg={props.paragrapg} />
       */}
      {/* <Kipper
        name={Kipper_component[1].title}
        paragraph={Kipper_componentr[1].paragraph}
      />
 */}
      {/* <Kipper
        title="thisdbis al you have to do"
        paragraph="this is paragraph butn we stil ned some help but we dant get that what we want to have"
      /> */}
      {/* 
      =====================================================================================
                                 card component
      =================================================================================*/}
      {/*   <Card
        name={Array_container[1].name}
        tel={Array_container[1].tel}
        email={Array_container[1].email}
        img={Array_container[1].img}
      /> */}
      {/*   
      <Card
        name={Array_container[2].name}
        tel={Array_container[2].tel}
        email={Array_container[2].email}
        img={Array_container[2].img}
      />
      <Card
        name={Array_container[3].name}
        tel={Array_container[3].tel}
        email={Array_container[3].email}
        img={Array_container[3].img}
      /> 
 */}
      {/* =======================================================================================
                               truker component
 ============================================================================================*/}
      {/*       {Truker.map(Fancy)}
       */}
      {/*  {Truker.map((FancFcon) => (
        <Fancycard
          key={FancFcon.id}
          img={FancFcon.img}
          heading={FancFcon.heading}
          paragraph={FancFcon.paragraph}
        />
      ))} */}
      {/* ===========================================================================================
                               arry_container component
      =============================================================================================*/}
      {/*      {Array_container.map(name) = FancFcon => <Fancycard   key={FancFcon.id}   img={FancFcon.img}    heading={FancFcon.heading}    paragraph={FancFcon.paragraph}  />

}*/}
      {/*       {Kipper_component.map(forkiper)}
       */}
      {/*    {Kipper_component.map((FancFcon) => (
        <Kipper title={FancFcon.title} paragraph={FancFcon.paragraph} />
      ))} */}
      {/* ========================================================================================
                                      user input
      ===============================================================================================*/}
      {/*       {<User />}
       */}{" "}
      {/* ==============================================================================================================
                                         Plus and minuse btn
      ===================================================================================================================*/}
      {/* <Plusbtn /> */}
      {/* ===========================================================================================================
                       the random time
      ====================================================================================================================*/}
      {/*  <Randomtime /> */}
      {/* ======================================================================================
                                  table
      ===========================================================================================*/}
      {/*       <Table />
       */}{" "}
      {/* =========================================================================================
                                  Method_and_State
       ============================================================================================*/}
      {/*       <Method_and_State />
       */}
      <To_doList />
    </div>
  );
}

export default App;

/* 
function App() {
  return <div className="App">


  </div>;
}
 */
