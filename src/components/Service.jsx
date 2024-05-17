const Service = (props) => {
    return (
    <>
        <article className='service'>
              <span className='service-icon'>
                <i className={props.data.icon}></i>
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{props.data.title}</h4>
                <p className='service-text'>{props.data.text}</p>
              </div>
            </article> 
    </>
  );
};
export default Service;