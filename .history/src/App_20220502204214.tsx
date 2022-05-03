interface ButtonProps{
  text?: string
}

function Button(props :ButtonProps ) {
  return <button>{props.text ?? 'Padrão'}</button>;
}

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Button text="Enviar"/>
      <Button text="Oi"/>
      <Button text="Tchau"/>
      <Button/>
    </>
  );
}

export default App;
