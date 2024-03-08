import './card.css';
import myImage from '../../assets/project1.png';

function Card() {
  return (
    <div className='card-container'>
      <div className='project-image'>
        <img src={myImage} alt='project image' />
      </div>
      <div className='project-detail'>
        <h3 className='project-name'>GSAP Layout Animation</h3>
        <p className='project-description'>
          By clicking the nav links the underline jumps with a subtle animation
          and the card&apos;s will expand and reveal the description and fold it
          by clicking with a neat animation.
        </p>
        <div className='technology-used'>
          <p>HTML</p>
          <p>CSS</p>
          <p>JAVASCRIPT</p>
          <p>GSAP</p>
        </div>
        <div className='project-buttons'>
          <button>
            <a href='#'>Visit</a>
          </button>
          <button>
            <a href='#'>Code</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
