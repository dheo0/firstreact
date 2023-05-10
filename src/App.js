import Hello from './hello';
import Wrapper from './Wrappers';
import Counter from './Couter';
import InputSample from './InputSample';
import './App.css'

function App() {
  const name ='Oslo'
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  return (
    <Wrapper>
      <Hello name='react' color='red' isSpecial={false}/>
      <Hello color='pink' />
      <Counter />
      <InputSample />
    </Wrapper>
  );
}

export default App;
