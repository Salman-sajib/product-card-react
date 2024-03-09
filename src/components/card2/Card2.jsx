import './card2.css';
import myImage from '../../assets/project2.png';

function Card2() {
  return (
    <div className='card2-container'>
      <div className='card2'>
        <div className='tech-used'>
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScripts</p>
          <p>ReactJS</p>
        </div>
        <h2 className='card2-title'>ToDo App</h2>
        <img className='card2-img' src={myImage} alt='project image' />
        <p className='card2-description'>
          A todo app with react, I used context api for managing the states. An
          user can add, delete, edit and toggle to completed and uncompleted a
          todo.
        </p>
        <a className='card2-link' href='#'>
          View Project
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 -960 960 960'
            width='24'
          >
            <path d='m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z' />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Card2;
