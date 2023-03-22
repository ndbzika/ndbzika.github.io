import Photo from '../../images/flavio.png';
export const MyPhoto = () => {
  return (
    <picture>
      <img
        src={Photo}
        alt="Flávio Henrique"
        style={{
          position: 'absolute',
          top: window.screen.height - 700,
          left: '70.1%',
        }}
      />
    </picture>
  );
};
