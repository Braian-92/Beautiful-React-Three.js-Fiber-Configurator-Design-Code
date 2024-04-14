import { Logo } from '@pmndrs/branding'
// npm install @pmndrs/branding
import { AiOutlineHighlight, AiOutlineShopping } from 'react-icons/ai'
// npm install react-icons/ai (no funciono)
// npm install react-icons --save (utilizar este metodo)
// -- react-icons/ai (requirio validar con la cuenta de git)
export default function Overlay() {
  return <Customizer />
}


function Intro() {
  return (
    <div className="container">
      <header>
        <Logo width="40" height="40" />
        <div>
          <AiOutlineShopping size="3em" />
        </div>
      </header>

      <section key="main">
        <div className="section--container">
          <div>
            <h1>LET'S DO IT.</h1>
          </div>
          <div className="support--content">
            <div>
              <p>
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{' '}
                and define your own style.
              </p>
              <button style={{ background: 'black' }}>
                CUSTOMIZE IT <AiOutlineHighlight size="1.3em" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


function Customizer() {
  const colors = [
    '#ccc',
    '#EFBD4E',
    '#80C670',
    '#726DE8',
    '#EF674E',
    '#353934',
    'Purple'
  ]

  return (
    <section key='custom'>
      <div className='customizer'>
        <div className='color-options'>
          {colors.map((color) => {
            <div
              key={color}
              className='circle'
              style={{ background:color }}
            ></div>
          })}
        </div>
      </div>
    </section>
  )
}