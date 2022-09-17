function Hello(props) {     // arba destructinti objecta ir gauti is karto propsa Hello({colorProp})

  return <h2 style={{color: props.colorProp, backgroundColor: props.bgProp}}>Hello world!</h2>;  // {} first is to go to JavaScript {} second to go to JavaScript Object
}

export default Hello;
