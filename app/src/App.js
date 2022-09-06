import './App.css';
import GifList from './components/GifList';
import GifForm from './components/GifForm';
import {connect} from 'react-redux';

function App(props) {
  const {loading, gifs} = props;


  return (
    <div className="App">
      <h1>Gifs!</h1>
      <GifForm />

      {
        loading ? <h3>We are loading</h3> : <GifList gifs={gifs}/>
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    gifs: state.gifs,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(App);
