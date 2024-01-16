import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderStyled>
        <div className="logo">
          <img
            src="/esed.png"
            alt="logo"
            width="200"
            height="80"
            className="logo"
          />
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
