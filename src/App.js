  import React, { Suspense, lazy,  Component } from 'react';
import 'antd/dist/antd.css';
import './index.css'

import { Carousel } from "antd";

import GphApiClient from 'giphy-js-sdk-core';
import Layout from './container/Layout'

const Gif = lazy(() => import('./component/Gif'));


class App extends Component {

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.carousel = React.createRef();

  }
  next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }
  state= {
    gifs: [],
  }
  componentDidMount(){
    
    var client = GphApiClient("F4D3Q1qXdtsGruEH30k6RRigE2IDhsvc")
    client.search('gifs', {"q": "cats"})
  .then((response) => {
    
    console.log(response.data)
    this.setState({gifs:response.data })
    
  })
  .catch((err) => {

  })

  }
  render() {
    const props = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow:10,
      slidesToScroll: 3,      
    };

    const loadingImg = <div>
      <img alt="loading" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif" />
    </div>

    const carousel = this.state.gifs.map(e => {
      return (
        <Suspense key={e.id} fallback={loadingImg}>
          <Gif
          url={e.images.downsized.url}/>
        </Suspense>
      );
    });

    return (      
      <div className="App">
      <Layout >
      <Carousel className="" ref={node => (this.carousel = node)} {...props}>
      {carousel}
      </Carousel>
      </Layout>
      </div>
    );
  }
}

export default App;
