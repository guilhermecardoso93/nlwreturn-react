interface ButtonProps{
  text: string
}

function Button(props :ButtonProps ) {
  return <button>Oi</button>;
}

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Button text="Enviar"/>
      <Button text="Oi"/>
    </>
  );
}

export default App;
