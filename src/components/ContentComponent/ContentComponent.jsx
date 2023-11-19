import './style.scss'

const ContentComponent = ({title, description, color='#000', children, ...rest}) => {
  
  return (
    <div className='content' {...rest}>
      <h2 className='content-title' style={{ color: color }}>{title}</h2>
      <p className='content-description'>{description}</p>
      {children}
    </div>
  );
};

export default ContentComponent;