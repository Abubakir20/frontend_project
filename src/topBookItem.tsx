import './style.css';

export default function TopBookItem({author, title, image}) {
  return (
    <div className="flex flex-row">
      <div>
        <img
          style={{ width: '54px', height: '80px', borderRadius: '8px' }}
          src= {image}
          alt="image"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h2 style={{fontSize: '14px', fontWeight: '700'}}>{title}</h2>
        <p style={{paddingBottom: '25px', fontSize: '13px', fontWeight: '400', color: 'rgba(240, 240, 240, 0.72)'}}>{author}</p>
      </div>
    </div>
  );
}
