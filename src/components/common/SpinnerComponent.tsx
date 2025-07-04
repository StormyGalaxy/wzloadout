import { Container, Spinner } from 'react-bootstrap';

const SpinnerComponent = () => {
  return (
    <Container
      className='d-flex flex-column justify-content-center align-items-center'
      style={{ minHeight: '80vh' }}>
      <div className='mb-3'>
        <Spinner animation='grow' variant='primary' className='m-1' />
        <Spinner animation='grow' variant='secondary' className='m-1' />
        <Spinner animation='grow' variant='success' className='m-1' />
        <Spinner animation='grow' variant='danger' className='m-1' />
        <Spinner animation='grow' variant='warning' className='m-1' />
        <Spinner animation='grow' variant='info' className='m-1' />
        <Spinner animation='grow' variant='light' className='m-1' />
        <Spinner animation='grow' variant='dark' className='m-1' />
      </div>
      <h3>Generating Initial Loadout...</h3>
    </Container>
  );
};

export default SpinnerComponent;
