import './Home.css'
import Header from '../Header/Header.jsx'
import CardPizza from '../CardPizza/CardPizza.jsx'
import { pizzas } from './pizzas.js'

const Home = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          {pizzas.map((pizza) => (
            <div className='col-12 col-md-4 mb-5 mt-4' key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
