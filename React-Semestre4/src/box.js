const Box = ({children}) => {
  return <div style={{
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'black',
  }}>
    {children}
  </div>;
};

export default Box;