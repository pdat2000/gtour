import './style.scss'

const ContentComponent = ({title, description, children, ...rest}) => {
  
  return (
    <div className='content' {...rest}>
      <h2 className='content-title'>{title}</h2>
      <p className='content-description'>{description}</p>
      {children}
    </div>
  );
};

export default ContentComponent;