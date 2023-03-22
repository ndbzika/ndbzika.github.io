import Photo from '../../images/flavio.png';
export const MyPhoto = () => {
  return (
    <picture>
      <img
        src={Photo}
        alt="Flávio Henrique"
        style={{ position: 'absolute', top: '19.9vw', left: '49vw' }}
      />
    </picture>
  );
};
